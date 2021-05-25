# NBA Tracker
This application allows the user to create a list of their favorite NBA players along with some basic statistics. (Name, Position, Team, Overall Rank, and ESPN Rating)
## Installation
1. Fork and clone this repository
2. Navigate to this directory
3. Run:
    1. npm install
    2. json-server --watch db.json --port 3001
    3. json-server --watch newlist.json --port 3002
    4. npm start

## Usage
- The initial page that will open is the home page
    This page serves the purpose of explaining the program and being a place to return to after the user is done using the program
- From here, the user can click on one of two tabs
    - Players
        This page holds a database of NBA players along with their respective Name, Position, Team, Overall Rank, and ESPN Rating
        The user can use this page as a reference to use to build there list on the My List page
    - My List
        This page is where the user will be spending most of their time
        Initially the page will contain only a title saying "My List" and a button saying "Add a Player!"
        The user will click on the "Add a Player!" button and will see a prompt to imput the player they want to add and their respective statistics.
        After entering the users player, it will be added to the list
        From here the user will be able to like a player by inputing a number into the "How many likes?" bar and pushing the "Like" button next to the player they wish to like
