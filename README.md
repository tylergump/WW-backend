# Wags-Whiskers

Wags & Whiskers is a cat and dog matchup app that matches prospective pet owners to their ideal cat or dog. Ideal matches will be found based on what the owner places in their profile and comparing them with animals from the petfinder api.

Model(s):
Username password email zip code preferences
User Model

User Name, string (required)
Password, string (required)
Email, string (required)
Zip code, number (required)
Preferences, [string]
Routes:
GET / - landing page
GET /signup - displays user login (might be a component instead?)
POST /signup - creates the user profile with provided input
GET /login - displays user login (might be a component instead?)
GET /user/:id - displays user's info
PUT /user - updates user profile info
DELETE /user - deletes user account
GET /matches - index page; displays all potential matches
Get /matches/:id - show page for selected animal

Wireframes
Wireframes with basic page layouts

Copy and paste or drag and drop your images here.

20211019_155305
20211019_155319
20211019_155329

User Stories
User stories detailing app functionality

Add user stories following the As a [type of user], I want [what the user wants], so that [what it helps accomplish] format.

see below in MVP

MVP Goals
MVP Goals
-As a user, I’ll first be presented a landing page prompting me to sign up or login
-As a user, there will be a nav bar up top linking to an “About” page, describing the general purpose and functionality of the app, and a “User Profile” page
-As a user, I’ll be directed on the “User Profile” page to choose my preferences from a set of pre-specified options (e.g. dog/cat, size, breed, age)
-As a user, I can input my zip code and specify a distance preference (e.g. <10 miles, 10-25 miles) that will further filter the search results (and perhaps even sort them by distance)
-The user’s preferences will then serve as a filter for the search results (using Petfinder’s API), which will display, one at a time, on the main index page in Carousel format
-The index display will show the pet’s basic information (e.g. profile pic, name, age)
-Clicking a pet’s index will direct the user to the show page, which will contain the pet’s full profile, along with a favorite/heart-style button to save the selection if the user chooses

Stretch Goals
As a user, search results will also contain partial matches after full matches (e.g. pets that meet most but not all search criteria)
-As a user, the User Profile page will display the list of saved pets as they are added (i.e. it will become another index page)
