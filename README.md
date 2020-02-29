## Description
This is a simple MERN stack application that creates and deletes blogposts while communicating to the database. It contains two form fields as 'title' and 'body'. Clicking on the submit button would submit this form and save the data into a mongo database. The section below displays all the current posts by retrieving data from the database. 

Once a new post is added, the below section updates in real time without the page reloading.

The DeleteAll button would remove all data from the database and consequently remove all the posts from the below section that are showing on the page.

### How to run
In the console type `npm run runApp` and this should start both the client(frontEnd) and the backend server at posts 3000 and 8080 respectively. If you wish to know how both are running simultaneiously with one command it is through the "concurrently" npm package. A script has been declared in the package.json file(main directory).

If port 8080 is busy you can change this in the code. The port number is declared in the "server.js" file as a const variable named PORT.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The frontend is communicating with the backend perfectly and you need only to interact from port 3000. 


### Database Details:
The DB name is mernApp1 and it is mentioned in the "server.js" file where the mongoose connect method is used with a url to connect locally. You will need to have mongodb setup on your environment inorder to run this and communicate with the database. The code creates a collection named "blogPosts" with the schema mentioned in the (models/blogPostModel.js) file.

### Required Packages
You first of all require npm. You can get it in addition to nodejs from its website. After npm is intalled you can use it to download the following on the console by running "npm install package_name":
  - nodemon
  - express
  - axios
  - mongoose
  - concurrently
  - morgan

Running "npm install" from the console should install the latter 5 packages. However nodemon needs to be installed separately.

