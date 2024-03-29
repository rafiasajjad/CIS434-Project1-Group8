## CIS434-Project1-Group8 Expense Tracker

The Expense Tracker is a web application developed using ReactJS as part of a project for CIS 434 Software Engineering at Cleveland State University. The application allows users to manage their income and expenses, which are displayed on the main page. The application also includes a transaction history where users can view past transactions, and clear transactions as needed.

## Screen
<img src="https://i.imgur.com/wVjZ2xa.png" alt="Alt Text" width="370" height="620">

## Features
- Add income and expenses
- Show running balance as well as the total amount for each category - income and expenses
- Save transaction data in local storage
- Clear transaction history
- Alert message when users leave fields blank when clicking add transaction button
- Alert for insufficient balance if expense is greater than the balance
- If the sign is not specified in the transation amount field then it is considered as positive income by default
- Simple and clean user interface

## Software, tools, and programming languages 
To code this project we used the following Software & Programming Languages
- Visual Studio Code
- GitHub
- JavaScript
- ReactJS
- Node.js
- HTML
- CSS
- Note: We used HTML and CSS for the front end development, and Javascript for the back-end. React and Node.js were used for our back-end as well as to host our website. We also used localStorage for our database.

## Technical issues
- Understanding ReactJS and how to deploy it using Node.js
- Database configuration 
- Decimal point constraint in the input field
## Solutions
- Followed some tutorials on how to deploy React with node.js, essentially node.js is used as a server for this application
- After research and trying out different database ideas such as firebase, we ended up using localStorage.
- We passed the input as text (String) in the index.html file and displayed an error message.


## Installation guide
Before starting the project make sure to delete package-lock.json and the node_modules.

Make sure you are in my-app directory and run:

### `npm install`

After, you can run:

### `npm run build`

And to start the application you can run:

### `npm start`


## Git notes

To check in which git repo you're on or the changes in your local repo

`git status`

make new branch from master

`git checkout -b mybranchname`

make sure you push this way to make your repo public to git

`git push --set-upstream master mybranchname`

switching branches to master

`git switch master`

list branches

`git branch`

commiting my changes to my branch

`git add .`      this adds all ( . )\
`git commit -m ""`	"this is what i did in this changes"\
`git push` 	this will give an error, copy and paste the suggestions

pulling changes

`git pull`

## Contributors

Rafia Sajjad (rafiasajjad), Kenee Shepherd (iamkenee), Shakeeb Rahman (shakeebur), Hamza Srhiri (Hamzas61), Sheeka Shee (SheekaShee).
Group Member Task Assignment
- Kenee and Rafia = Building and Testing app, Front-End design, Initial State
- Shakeeb = Add Transactions, Modifying Items 
- Sheeka = Display Balance and Income 
- Hamza = Deduct Expenses, Removing Items
