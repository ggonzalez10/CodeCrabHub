Prompts
1. I want to create a personalized online learning platform. I want to start with the server side. Recommend a good design and architecture for the server side and help me understand what is required.

2. I would like to use a microservices architecture for the server side. These are the services I want to be able to provide.
Personalized learning recommendations,
Interactive coding exercises
Real-time feedback to help developers improve their skills and knowledge.
What are the various components I should have?

3. I would like to create the user service. I would like to use Node.js and MongoDB for this project. How do I create a project structure?

4. Please give me the code that is to be included in each of the files.

5. Can you please provide the user data in JSON format?

6. User registration: Send a POST request to http://localhost:3000/users/register with the following request body:
   {
  "username": "john",
  "password": "password123"
  }

7. curl -X POST -H "Content-Type: application/json" -d '{"username": "john", "password": "password123"}' http://localhost:3000/users/register

8. curl -X POST -H "Content-Type: application/json" -d '{"username": "john", "password": "password123"}' http://localhost:3000/users/login

9. curl -X PUT -H "Content-Type: application/json" -d '{"newUsername": "john_smith"}' http://localhost:3000/users/john_smith

Don't forget steps:
Remember, any modifications you make in the lab environment won't be saved. If you plan to step away, use the following steps to ensure your changes are pushed to GitHub:

Ensure that you are currently inside the project directory.

Navigate to the project directory by performing cd <project dir>.

Set up your Git configuration:

Run: git config --global user.email "yourgithub@email.com"
Run: git config --global user.name "name"
Add your changes to the staging area:

Run: git add .
Commit your changes with a descriptive message:

Run: git commit -m "Adding temporary changes to Github"
The first step is to generate an access token from GitHub.com. Follow the lab named Generate GitHub personal access token and copy the access token as a password in the upcoming exercises.

Push your changes to the Git repository:

Run: git push
A prompt in the terminal will prompt you to enter your GitHub username and password (your previously created Personal Access Token from Step 5).

These steps ensure your work is safely stored in GitHub, allowing you to continue when you return to the lab environment.

10. Prompt for code review: Can you review the code below?

11. Prompt for documentation: Can you provide documentation and comments for the code to make it readable?

12. Prompt for code review:
Kindly review the userRoutes.js file code.
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:username', userController.updateUserProfile);
module.exports = router;

13. Prompt for dockerimage
Can you provide the docker file to bundle the application and the MongoDB server in a container?

15. 
