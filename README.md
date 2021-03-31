# webapp_spring2021_assignment3

Assignment 3 - Creating MVC architecture for social networking website
Author: Fernando Campos

How tasks were split

Fernando was responsible for doing every task in the assignment. 

Modifications

Due to the complexity of the sign up form that we had implemented previously, we decided to change the sign up form to
be on one page for simplicity in sending the information to our mongoDB database along with validations and error checking.

How to install and launch the project

make sure mongoDB is installed on your system and is on the PATH variable
once cloned, run: npm install in the project directory
After doing npm install, run the script file to seed the database with some dummy data by running: node seed
After seeding the database, you can then start the webapp by running: nodemon main
Go to your browser, go to localhost:3000 to see the webapp
No other steps are needed to create the database as we have mongoose, which will create the database for us once we
run the webapp

Design Choices

We decided to make a simple MVC architecture, as we realize that we will need to update our webapp to use CRUD models.
In terms of the layout and overall scheme of the webapp, nothing has changed. The only pages that we modified were
the sign up page, login page, and the profile page which will show a nicer layout than it was previously. On an
error for the sign up page, we made sure to add some CSS styles and javascript code on the client side to change
the background colors of inputs that were missed even though they are required input fields. We chose this color
to be a light coral color to signify that there is an important field while also being light so that it won't be
annoying. Along with this, every time we pass error messages from the users controller to either the login page or sign up page
we make the error messages appear at the top of the form in red text to specifically show what error is occurring after some
server side validation. This server side validation is helpful in the case that the client side validation isn't working or is bypassed. 
We added in some new views for the webapp which include an error404.ejs and error500.ejs file, which allow us to handle error 404 and error 500
codes. The controllers that we have are a users controller, an error controller, and a home controller. The users controller handles
information with signing up and logging in a user, the home controller handles any other page requests that we want to handle, and
the error controller handles the 404 and 500 http errors. For the error pages, we decide to just use simple html headers to signify that
an error went wrong with the application. Overall the general files that were needed for the webapp just had to be referenced differently while
also moving them to new locations that allow for readability. 

Future Plans

For our web application, we plan to change the overall structure of the project by using CRUD models and adding in sessions, cookies, user authentication
with passport, functionality to post social media text (for example, a tweet), and changing the way errors are handled with express-validator. Posts that users 
can create will also need a new model that will be added as well. We will also include a view that handles the request to see every user on the database, including
links to their main homepage which will show more detailed information. Other plans include to clean up some of the code to make it readable for future cases where
we might need to update some javascript code or ejs code. 
