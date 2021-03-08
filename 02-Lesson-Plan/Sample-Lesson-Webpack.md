# XX.X Sample Lesson Plan: Webpack

## Overview 

Today's lesson introduces students to bundling JavaScript code with Webpack as well as the implementation of Dev Server for live reloading. The benefits of performance optimization and Progressive Web Applications are also discussed. 

* In this lesson, students will complete activities `01-Ins_Modularization` through `06-Stu_Dev-Server`.

* Encourage students to refer to the [Webpack documentation](https://webpack.js.org/concepts/), as needed, to reinforce their understanding of key concepts. 

* The `01-Ins_Modularization` directory includes two demo files. The first Instructor demo is a simple front-end project using the HTML, CSS, and JavaScript structure students have used in prior projects. The second Instructor demo includes the same project optimized for use with Webpack. It may be useful to provide both of these demos to the students to help reinforce how they can convert an existing project to use Webpack.   

* Since these demos use a small codebase, it may not be immediately evident how JavaScript bundling can improve an app's performance. Remind students that in the workplace, projects are much bigger and often have many contributors and encourage them to "think big" when considering the benefits of Webpack. 

* Webpack is a robust tool that also be used to bundle HTML, CSS, and other assets. Stress to the students that while today's focus is on bundling JavaScript files, these additional uses -- as well as `import` and `export` syntax -- will be explored in the next lessons.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this unit for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Create a basic Webpack configuration file

* Bundle JavaScript code into a single file using Webpack

* Handle third-party JavaScript libraries using client-side NPM packages

* Implement Webpack's Dev Server for live reloading

## Slide Deck

* @TODO [Unit XX Slide Deck]()

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck]() and follow these prompts on their corresponding slides:

  * **@TODO TITLE OF SLIDE**: @TODO ADD TALKING POINTS

  * **@TODO TITLE OF SLIDE**: @TODO ELABORATE ON SLIDE CONTENT
  
  * **@TODO TITLE OF SLIDE**: @TODO TRANSITION INTO MINI-PROJECT DEMO

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Modularization (5 min) 

* Open `01-Ins_Modularization-Example/index.html` in your browser and demonstrate the following:

  * 🔑 Instead of using one large JavaScript file, we can use different JavaScript files to handle the functionality for each box. 

  * 🔑 This modularization allows us to break down our JavaScript into small, more manageable chunks of code that perform a specific function.

* Open `01-Ins_Modularization-Example/index.html` in your IDE and explain the following: 

  * 🔑 One way to handle multiple JavaScript files is to link the individual files to our HTML. This works but it is difficult to maintain as our projects grow in scope and the number of files increase. 

    ```html
    <script src="assets/js/box-one.js"></script>
    <script src="assets/js/box-two.js"></script>
    <script src="assets/js/box-three.js"></script>
    <script src="assets/js/box-four.js"></script>
    ```
  
* Open `01-Ins_Webpack-Example/` from the command line and demonstrate the following: 

  * 🔑 To write cleaner and faster code, we can use Webpack to bundle our JavaScript modules.   

  * 🔑 To use Webpack, we first need to initialize npm and create a `package.json` file. To do so, we use `npm init -y`.

    ```sh
    npm init -y
    ```

  * 🔑 Next, we install Webpack locally as well as Webpack's command line tools. Since we want to use Webpack during development only, we use `--save-dev`.

    ```sh
    npm install webpack webpack-cli --save-dev
    ```

* Open `01-Ins_Webpack-Example/src` in your IDE and explain the following: 

  * When we look at the file structure for our project, we now have a `package.json` at the root. We also have two new directories we use to hold Webpack's input and output.

  * 🔑 We use the `src` directory -- our input directory -- to hold the files we want Webpack to bundle. For now, all of our JavaScript files go into our `src`.

* Open `01-Ins_Webpack-Example/src/index.js` in your IDE and explain the following: 

  * 🔑 We also have a new file in our `src`, an `index.js`. This JavaScript file will serve as Webpack's entry point. 

  * 🔑 When we run Webpack, it will check everything that has been imported or required in the `index.js` entry point and then bundle it all together into a new file. 
  
  * In our `index.js` we have imported the files holding the code for each box so they are included in the bundle. 

    ```js
    import './box-one';
    import './box-two';
    import './box-three';
    import './box-four';
    ```

 * 🔑 The single `main.js` file will then be added -- by Webpack -- into the `dist` folder. 

* Open `01-Ins_Webpack-Example/dist` in your IDE and explain the following: 

  * 🔑 The `dist` directory contains all the files that Webpack outputs. For now, that is the just the `main.js` file. 
  
  * We also  put our `index.html` and `styles.css` file manually in this directory. Later, we will use Webpack to output these files as well.

* Open `01-Ins_Webpack-Example/dist/index.html` in your IDE and explain the following: 

  * 🔑 Now that we used Webpack to bundle our JavaScript files into a single `main.js` file, we no longer need links to multiple JavaScript files in our HTML. Instead, we can simply link to the newly generated `main.js` file. 

    ```html
    <script src="main.js"></script>
    ```

* Open `01-Ins_Webpack-Example/webpack.config.js` in your IDE and explain the following: 

  * 🔑 This is all we need for Webpack to bundle our files for a simple project. However, for more complex projects, it is important to use a configuration file to explicitly state the entry point and output expected and allow other custom configurations.  

    ```js
    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
       filename: 'main.js',
       path: path.resolve(__dirname, 'dist'),
      },
      mode: 'development'
    };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the benefit of breaking our JavaScript into small, more manageable modules? 

  * 🙋 In a large-scale project, using one large JavaScript file makes it difficult to maintain the code. Using smaller JavaScript 'chunks' that perform a single task makes it easier for developers to debug and work with the codebase.  

  * ☝️ What does Webpack do with these modules? 

  * 🙋 Webpack bundles all the modules needed for their project to run -- and their dependencies -- into a single JavaScript file.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Modularization/README.md`.

### 3. Student Do: Modularization (15 min) 

* Direct students to the activity instructions found in `02-Stu_Modularization/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Webpack JavaScript Bundling

  Work with a partner to add comments describing the functionality of the code found in [dist](./Unsolved/dist), [src](./Unsolved/src), and [webpack.config.js](./Unsolved/webpack.config.js)

  ## 📝 Notes

  Steps to Create a Webpack JavaScript Bundle 

  1. Navigate to `02-Stu_Modularization/Unsolved` in the command line and enter `npm install` and `npx Webpack`.

  2. Enter `npm install`.

  3. Enter `npx Webpack`.

  Refer to the documentation: 

  [Webpack Docs on Creating a Bundle](https://webpack.js.org/guides/getting-started/#creating-a-bundle)

  [Webpack Docs on Modules](https://webpack.js.org/guides/getting-started/#modules)

  [Webpack Docs on Configuration](https://webpack.js.org/configuration/)
  
  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How does Webpack build a dependency graph? What files are included? What files are not? 

  Use [Google](https://www.google.com) or another search engine to research this.

  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Modularization (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Webpack and modularization? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `npx webpack`

  * ✔️ `/src`

  * ✔️ `index.js` entry point

  * ✔️ `/dist`

  * ✔️ `main.js`

  * ✔️ `webpack.config.js`

* Navigate to `02-Stu_Modularization/Unsolved` in the command line and enter `npm install` and `npx Webpack`.

  * 🔑 To get our project up and running, we first have to generate a bundled `main.js` file. To do so, we run `npm install` and `npx Webpack`.

    ```sh
    npm install
    npm webpack
    ```

* Open `02_Stu-Modularization/Solved/src/index.js` in your IDE and explain the following: 

   * 🔑 When we run `npx Webpack`, Webpack looks at our entry point file, or `index.js` in our `src` directory and creates a dependency graph that traces back recursively all the code and dependencies needed. 

   * In the `index.js` entry point, we import the JavaScript files used for our boxes so that they are included in the bundle. 

     ```js
     import './box-one';
     import './box-two';
     import './box-three';
     import './box-four';
     ```

* Open `02_Stu-Modularization/Solved/dist/main.js` in your IDE and explain the following: 

   * 🔑 When the `main.js` file is generated, it is stored in the `dist` directory. This file contains all the bundled JavaScript code. 

* Open `02_Stu-Modularization/Solved/dist/index.html` in your IDE and explain the following:

   * Eventually, we will use Webpack to generate all the files in our `dist` directory but for now, we manually add our HTML and CSS file.
   
   * 🔑 To execute our JavaScript, we link this single `main.js` file to our HTML. 

     ```html
     <script src="main.js"></script>
     ```

* Open `02_Stu-Modularization/Solved/webpack.config.js` in your IDE and explain the following:

  * 🔑 To customize and extend Webpack's functionality, we use a configuration file. 

  * We use `entry` to set the entry point for Webpack. 

    ```js
    entry: './src/index.js',
    ```
     
  * We use `output` to set the name of our bundled file and where it will be stored. 

    ```js
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ```

  *  We can also set the mode. While in development, we set the mode to `development` so that Webpack uses the right built-in optimizations. Other mode options include 'production' and 'none.'

    ```js
     mode: 'development'
    ```

  * We put the configuration file at the root of our application so it will be read automatically by Webpack. We must name the file `webpack.config.js` exactly for the file to be read. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is the role of the entry point in creating a bundle with Webpack? 

  * 🙋 The entry point determines where Webpack should look to start building the bundle and what dependencies to include. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Webpack Docs on Getting Started](https://webpack.js.org/guides/getting-started/), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: NPM Libraries (5 min) 

* Open `03-Ins_NPM-Libraries/dist/index.html` in your browser and demonstrate the following:

  * 🔑 When we click on the button, the box disappears and reappears. 

  * 🔑 jQuery is a widely used JavaScript library that makes functionality like this easy to implement, but to get jQuery to work with Webpack, it will take a few extra steps. 

* Navigate to `03-Ins_NPM-Libraries/` in your command line and demonstrate the following:

  * 🔑 To use jQuery library with Webpack, we first install it using NPM.

    ```sh
    npm install jquery
    ```

* Open `03-Ins_NPM-Libraries/webpack.config.js` in your browser and demonstrate the following: 

  * 🔑 Installing the NPM package provides the core functionality we need, but we still have a problem. Like many JavaScript libraries, jQuery uses global variables.

  * To get global variables used in libraries like jQuery to work with Webpack, we must define the variables by using a plugin.

  * 🔑 In the config file, we first require Webpack's methods and properties. 

    ```js
    const webpack = require("webpack");
    ```

   * 🔑 Then we use the `ProvidePlugin` method to define the `$` variable and automatically load jQuery for use in our project. 

    ```js
     plugins:[
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
    ],
    ```

* Navigate to `03-Ins_NPM-Libraries/` in your command line and enter `npm install` and `npx webpack` to demonstrate the following:

  * 🔑 When we run `npx webpack`, the bundled file now includes our JQuery in the generated code. 

    ```sh
    ./node_modules/jquery/dist/jquery.js 282 KiB [built] [code generated]
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we add jQuery to our project that uses Webpack? 

  * 🙋 We use the jQuery npm package. To define the global variables and automatically load jQuery, we use Webpack's `ProvidePlugin` method.  

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_NPM-Libraries/README.md`

### 6. Student Do: NPM Libraries (15 min) 

* Direct students to the activity instructions found in `04-Stu_NPM-Libraries/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 jQuery's Global Variable Not Defined  

  Work with a partner to resolve the following issue(s):

  * As a user, I want to be able to click on the button to make the boxes appear and disappear. 

  ## Expected Behavior

  When I click on the `toggle boxes` button, the all the boxes should be hidden. When I click the button again, all the boxes should once again be visible. 

  ## Actual Behavior

  When I click on the button, the boxes remain visible.

  ## Steps to Reproduce the Problem

  1. Navigate to the `Unsolved` folder in the browser in the command line and run `npm install` and `npx webpack`. 

  2. Open `Unsolved/dist/index.html` in the browser. 

  3. Click on the `toggle boxes` button. The boxes remain visible. 

  4. Open the console. An error message reads `Uncaught ReferenceError: $ is not defined`.

  ## 💡 Hints

  How can you configure Webpack to use global variables used in libraries like jQuery? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * How would you add Bootstrap or other libraries to your Webpack project? 

  Use [Google](https://www.google.com) or another search engine to research this.

  ---
  
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: NPM Libraries (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with client-side NPM libraries? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ jQuery `$` variable

  * ✔️ `npm install jquery`

  * ✔️ `ProvidePlugin`

* Open `04-Stu_NPM-Libraries/Solved/src/index.js` in your IDE and explain the following: 

  *  We use jQuery to toggle our boxes on our page. However, it looks like our jQuery code is not working. 

    ```js
    $(document).ready(function(){
      $("button").click(function(){
      $(".item").toggle();
     });
    });
    ```

* Open `04-Stu_NPM-Libraries/Solved/package.json` in your IDE and explain the following: 

  * To use the jQuery library, we first install it using NPM using `npm install jquery` to create it as a dependency. 

  ```json
  "dependencies": {
    "jquery": "^3.6.0"
  }
  ```

* Open `04-Stu_NPM-Libraries/Solved/webpack.config.js` in your IDE and explain the following: 

  * 🔑 Since Webpack does not automatically have a way of understanding jQuery's global variable, we must also instruct Webpack to identify the variable. 

  * 🔑 In Webpack's configuration file, we add an array to hold the plugins.

    ```js
    plugins: []
    ```
  
  * 🔑 Next, we use Webpack's built-in `ProvidePlugin` method to define jQuery's global variables and automatically load jQuery.

    ```js
     plugins:[
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
    ],
    
    ```
  * 

* Open `04-Stu_NPM-Libraries/Solved/dist/index.html` in your browser to demonstrate the following:

  * 🔑 When we click on the button, the boxes now toggle. 

  * 🔑 When we navigate to the console, the error is gone. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When we use a JavaScript library with a global variable like jQuery, what must we do to make it work?

  * 🙋 Webpack does not automatically recognize global variables used in JavaScript libraries. So we use Webpack's `ProvidePlugin` method to define the variables and automatically load it.  

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Webpack Docs on ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: DevServer (5 min) 

* Navigate to `05-Ins_Dev-Server/` in the command line and enter `npm start`.

* Open `http://localhost:8080/` in your browser and demonstrate the following:

  * 🔑 When working with Webpack, we can use DevServer to enable live reloading.

  * 🔑 When we change the name of the title, the page will reload and show the change.

* Open `05-Ins_Dev-Server/src/title.js` in your IDE and explain the following:  

  * To change the title, we change the value of the `message` variable. This change triggers the Dev Server to rebuild the bundle to include the changes.  

    ```js
    const message = "Hello World!";
    ```

* Open `http://localhost:8080/` in your browser and demonstrate the following:

  * 🔑 When we reopen the page, the title has changed. 

* Navigate to `05-Ins_Dev-Server/` in the command line to demonstrate the following:

  * 🔑 To use DevServer, we install it as a development dependency.

    ```sh
     npm install --save-dev webpack-dev-server
    ```

* Open `05-Ins_Dev-Server/webpack.config.js` in your IDE and demonstrate the following:

  * 🔑 In our config file, we use `contentBase` to let the dev server know where to look for files. 

    ```js
    devServer: {
      contentBase: './dist',
    },
    ```

* Open `05-Ins_Dev-Server/package.json` in your IDE and demonstrate the following:

  * 🔑 Finally, in our package.json file, we add as script, so when we run `npm start` our Dev Server will fire up.

    ```json
    "start": "webpack serve --open"
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the advantage of using Webpack's Dev Server?

  * 🙋 Dev Server watches for changes in our files and automatically recompiles the changed module. 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Dev-Server/README.md`.

### 9. Student Do: Dev Server (15 min) 

* Direct students to the activity instructions found in `06-Stu_Dev-Server/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Webpack's Dev Server for Live Reloading

  Work with a partner to implement the following user story:

  * As a developer, I want to see the changes made to my app without having to manually enter npm commands every time I want to compile my code. 

  ## Acceptance Criteria

  * It's done when I enter `npm start` to launch the development server.

  * It's done when I change the color of any box and the page refreshes and shows the changes. 

  ## 📝 Notes

  Refer to the documentation: 

  [Webpack on Development](https://webpack.js.org/guides/development/)

  ## 💡 Hints

  * How do I direct the Dev Server to the where to look for files? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other development tools can I use with Webpack? Why would I choose one over the other?

  Use [Google](https://www.google.com) or another search engine to research this.

  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Dev Server (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using Dev Server? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔ `webpack-dev-server`

  * ✔️ `contentBase: './dist'`

  * ✔️ `npm start`

* Navigate to `06-Ins_Dev-Server/` in the command line to demonstrate the following: 

  * When in development, it is important to be able to see changes to your files quickly. 

  * 🔑 To use Dev Server for live reloading, we install it via NPM.

    ```sh
    npm install --save-dev webpack-dev-server
    ```

* Open `06-Stu_Dev-Server/webpack.config.js` in your IDE and demonstrate the following:

  * 🔑 We also have to make a change to our config file to let Dev Server know where to look for files to serve them to `localhost:8080`. We want the server to look in our `dist` directory to find our files.

    ```js
     devServer: {
       contentBase: './dist',
    },
    ```

* Open `06-Stu_Dev-Server/package.json` in your IDE and demonstrate the following:

  * 🔑 We add a script to our package json so we can start up our Dev Server by simply entering `npm start`.

    ```json
    "start": "webpack serve --open",
    ```

* Navigate to `06-Ins_Dev-Server/` in the command line to demonstrate the following: 

  * Now, we can simply run `npm install` and `npm start` and our browser will automatically load up the page.

    ```sh
    npm install
    npm start
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we test our app using Dev Server? 

  * 🙋 With Dev Server, we do not need to worry about spinning up a server. Instead, Dev Server serves up the files in our `dist` folder to `localhost:8080` so we can easily, and quickly test our app. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Webpack Docs on Development](https://webpack.js.org/guides/development/), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. END (0 min)
