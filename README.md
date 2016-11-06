# Task Manager

### Description
Web application that uses JQuery along with mLab data API. In this application, you will be able to create tasks and categories as well as update and delete them.

### Setting up mLab
1. Signup for [mLab](https://mlab.com/)
2. Once logged in, you will be redirected to the [home](https://mlab.com/home) page.
3. At the home page, click 'Create new'. This will create a new deployment from scratch.
4. Choose Cloud Provider. Default is AWS.
5. Choose Plan. The free plan is under Single-node tab, then check Sandbox.
6. Give a Database name, `taskmanager`.
7. Click 'Create new MongoDB deployment'.
8. Click on your newly created project.
9. Click on the Users tab and 'Add database user'.
10. Under Collections tab, click 'Add collection'.
11. Create two collections called `categories` and `task`.
12. Retreive API key from mLab and Enable data API access.
13. Insert API key on line #16 in the main.js file.

### Setting up project
1. Clone project repository: `$ https://github.com/egarcia410/taskmanager.git`
2. Open project folder with text editor
3. Edit `main.js`, Insert API key on line #16
4. Open `index.html` inside browser
