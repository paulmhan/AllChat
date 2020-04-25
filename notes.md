//psuedo code

//for DB
// users
//     - multiple messages
//     - multiple chatrooms
// messages
//     - single user
//     - single chatroom
// chatrooms
//     - multiple users
//     - multiple messages


// login with username
// start with 1 chatroom 

Navbar semantic link is causing the domnesting warning

//Messages
// Format of the messages
//function for formatMessage takes in username and text as input and returns username, text and time in moment.format('h:mm a')

//Initial state: users is an empty array
//userJoin: function which takes in username, id and room and returns user as an object {username, id, room}
and pushes the user to the users array

//userLeave: function that takes in id and find user whose id matches with the user.id and get the user index. if the user index is not equal to -1 then use splice to remove that user from the users array

//getCurrentUser: takes in id as a param, loop through the users array and find user whose id matches with user.id

//getRoomUsers: takes in room as a param, loop through the users array and find user whose room matches with the user.room


Have a login and sign in option:

log in grabs data from username from db;

sign up creates a new username and then gets 


Same thing for rooms:
    Enter an existing room
    Create a new room
    

Create a getUsers by roomId
Add room_id to users table
    when someone joins a room, update that to that current roomID;
    when user leaves the room, remove their room id (null);


Todo:
1)create a post route for room on sign up form
2)create a get route to get that room name and append it to chatroom header
    a) create a room_id state 
    b) pass room_id into messageinput bar and create the function in there
    c) Create room queries and controllers and routes;
