**IMPORTANT. This is the server-side code of DropBearEats. Please find the client-side here: https://github.com/rachelktyjohnson/cosc560_a2**

# Details

## MongoDB Details
- DBName: drop-bear-eats
- Username: dbeUSER  
- Password: NsDTeYciOynp9m2l
- URL: mongodb+srv://dbeUSER:NsDTeYciOynp9m2l@drop-bear-eats.gqmb9.mongodb.net/drop-bear-eats?retryWrites=true&w=majority

## DBE Users
- test1@test.com, password
- test2@test.com, password
- test3@test.com, password
- admin@admin.com, admin

# Rubric
### Got something working
o Some code has been written.  
o Compiles, has code, starts, doesn't break.  
o Responds to HTTP requests.  
o Landing page works.  

### Event-Driven Connection: 10 marks
x Makes a WebSocket or Server-Sent Events connection.  
x The server sends the client events over the connection.  
x Data from the client can in some way affect what the server sends over the connection.  

###API: 10 marks
o The application has a REST-like API (JSON).  
o The REST-like API (JSON) is meaningful and works.  

### SPA: 10 marks
o Renders something using Vue.js.  
x Updates meaningfully from data over the event stream. *Not the event stream, but the RESTAPI calls*  
o The dynamic part of the page is interactive and can cause events or requests to be sent to the server.  
o The dynamic part of the page visualises something using SVG, Canvas, or d3.js (v5).  

### MongoDB: 10 marks
o Connects to MongoDB database.  
o Stores data in MongoDB in the correct database.  
o Data still retrieves correctly after stopping and restarting the server.  

### Design: 20 marks
o The project is usable, well-designed for its purpose, and reasonably attractive.  

## Quality: 20 marks
o Code quality.  
o Documentation / commenting (Use Swagger for API documentation).  
o Formatting / code layout.  
o Readability.  
o Version control.  
o Organisation.  
o Testability.  
