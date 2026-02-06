require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");


// Mongo
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("🔥 MongoDB Connected"))
.catch(err => console.log(err));


// Schema
const DocumentSchema = new mongoose.Schema({
    _id: String,
    data: Object
});

const Document = mongoose.model("Document", DocumentSchema);


// Track users
const activeUsers = {};


// Express
const app = express();
app.use(cors());
app.use(express.static("public"));

const server = http.createServer(app);

const io = new Server(server,{
    cors:{origin:"*"}
});


// SOCKET ENGINE
io.on("connection", socket => {

    socket.on("get-document", async (docId, username)=>{

        let document = await Document.findById(docId);

        if(!document){
            document = await Document.create({
                _id: docId,
                data: ""
            });
        }

        socket.join(docId);

        // USERS
        if(!activeUsers[docId]){
            activeUsers[docId] = [];
        }

        activeUsers[docId].push({
            id: socket.id,
            username
        });

        io.to(docId).emit(
            "users",
            activeUsers[docId].map(u=>u.username)
        );

        socket.emit("load-document", document.data);


        // REALTIME USING DELTA 
        socket.on("send-changes", delta=>{
            socket.to(docId).emit("receive-changes", delta);
        });


        socket.on("save-document", async data=>{
            await Document.findByIdAndUpdate(docId,{data});
        });


        socket.on("disconnect", ()=>{

            if(!activeUsers[docId]) return;

            activeUsers[docId] =
                activeUsers[docId].filter(
                    u=>u.id !== socket.id
                );

            io.to(docId).emit(
                "users",
                activeUsers[docId].map(u=>u.username)
            );

        });

    });

});


// START
const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`🚀 Server running on port ${PORT}`);
});
