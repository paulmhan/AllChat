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
//function for formatMessage taks in username and text as input and returns username, text and time in moment.format('h:mm a')

//Initial state: users is an empty array
//userJoin: function which takes in username, id and room and returns user as an object {username, id, room}
and pushes the user to the users array

//userLeave: function that takes in id and find user whose id matches with the user.id and get the user index. if the user index is not equal to -1 then use splice to remove that user from the users array

//getCurrentUser: takes in id as a param, loop through the users array and find user whose id matches with user.id

//getRoomUsers: takes in room as a param, loop through the users array and find user whose room matches with the user.room