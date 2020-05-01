TODO:
Hard Code One Room:
    - Id: 1
    - get multiple users into the one room and each unique id's, and get messages to append.
    - when user joins, welcome broadcast for whoever joined the room. 
        - same with when a user leaves, broadcast user left
    - we need to create a sign in option, where we match the username with the already existing id in the db. 
        - getusers and map through them to match the input. 
    
    

On leave Button:
 - we want to delete that userId the rooms_db and then rerun get users to update the chat sidebar. 
 - want to broadcast that the user lefr

 want to broadcast when user joins


 Add a is typing placeholder
 
 
 When Chatroom loads:
 1) get all users on load, once
 2) get current user on load

 Listeners
 1) userJoined - get newUser, add to users array
 2) userLeft - call getUsers
 3) messageReceive