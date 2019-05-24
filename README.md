# guidr-FE



The flow of the app:

User login -> List of Trips -> Go into each individual trip by clicking the link -> Update the Trip or Delete if needed.

I attempted to implement all of the CRUD operations:

C: We have an Add Trip form. This unfortunately doesn't work and we get a 500 server error. We're not sure whether this is our fault or the backend's fault but unfortunately our BE guy is overwhelmed and unable to help us firgure that out.

R: We are able to GET and read the list of trips we got from the BE

U: We are able to update the trip! However it's pretty Janky.  Here's how to observe a delete. 1) go into individual trip and fill out each field 2) go back to the full trip-list 3) observe that the trip you updated has been updated. We are not getting the full array of the trip  


D: We are able to delete the trip! However this too is pretty janky. Here's how to observe a delete. 1) go into individual trip and delete 2) log-in again 3) observe that the trip you deleted is gone. 



I have not yet styled the app and will be working on that on Friday.

Here is my self evaluation for the ruberic

Teamwork: 3. I pair programmed a ton with my fellow FE and tried pretty hard to work more closely with BE. I got us all to be in the help zoom together to identify a Backend issue with Trips that the BE identified and fixed.

React Fundamentals: 3 I think My code is fairly well organized and compartmentalized. I've used array methods to dynamically generate HTML elements and it is fairly easy to determine what components and files make up what parts of the application.

React Composition: I integrated with Redux and used HOC to build private routes. 

SPA-AJAX: 2? I can't verify if the ADD/Create functionality of the CRUD due to Backend issues but ther est of them do work!



