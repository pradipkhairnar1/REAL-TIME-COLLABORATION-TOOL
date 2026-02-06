# REAL-TIME COLLABORATION TOOL

COMPANY : CODTECH IT SOLUTIONS PRIVATE LIMITED

NAME : PRADIP VISHWAS KHAIRNAR

ITERN ID : CTIS2857

DOMAIN : MERN STACK WEB DEVELOPMENT

DURATION : 4 WEEKS

MENTOR : NEELA SANTOSH 


About the Project :-

The **Real-Time Collaborative Document Editor** is a full-stack web application that allows multiple users to edit documents simultaneously with live synchronization.

Built using **Node.js, Express, MongoDB, Socket.IO, and Quill**, the application demonstrates modern real-time communication techniques similar to platforms like **Google Docs**.

This project focuses on collaborative system design, real-time data flow, and persistent document storage.



## Key Features

1. Real-time multi-user document editing  
2. Rich text editor (bold, italic, lists, colors)  
3. Live synchronization using WebSockets (Socket.IO)  
4. Unique shareable document links  
5. Active user presence tracking  
6. Autosave with MongoDB  
7. Session-based username system  
8. Delta-based syncing for efficient updates  



## Tech Stack

### Frontend
- HTML  
- CSS  
- Quill.js (Rich Text Editor)

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Real-Time Communication
- Socket.IO  



##  System Architecture

The application follows a client–server architecture:

###  Client
- Provides the rich text editing interface  
- Sends document updates in real time  
- Displays active collaborators  

###  Server
- Manages WebSocket connections  
- Handles document rooms  
- Broadcasts updates to connected users  

###  Database
- Stores documents  
- Ensures persistence through autosave  



##  Real-Time Capabilities

Socket.IO enables:

- Instant document updates  
- Multi-user collaboration  
- Presence tracking  
- Room-based communication  


##  Run Locally

### 1️ Install dependencies
npm install

### 2️ Start MongoDB service  
Make sure MongoDB is running locally.

### 3️ Start the server
npm start

### 4️ Open browser
http://localhost:5000


## OUTPUT

<img width="1917" height="1014" alt="Image" src="https://github.com/user-attachments/assets/cb3c71fd-b44a-4f45-b264-bd399546d520" />

<img width="1915" height="1017" alt="Image" src="https://github.com/user-attachments/assets/3ec5b35d-1d0c-4f2a-96bd-15bc6a97d392" />

