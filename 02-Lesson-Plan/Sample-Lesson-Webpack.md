# XX.X Sample Lesson Plan: Webpack

## Overview 

Today's lesson introduces students to bundling JavaScript code with Webpack as well as the implementation of Dev Server for live reloading. The benefits of performance optimization and Progressive Web Applications are also discussed. 

* In this lesson, students will complete activities `01-Ins_Modularization` through `06-Stu_Dev-Server`.

* Encourage students to refer to the [Webpack documentation](https://webpack.js.org/concepts/), as needed, to reinforce their understanding of key concepts. 

* The `01-Ins_Modularization` directory includes two demo files. The first Instructor demo is a simple front-end project using the HTML, CSS, and JavaScript structure students have used in prior projects. The second Instructor demo includes the same project optimized for use with Webpack. It may be useful to provide both of these demos to the students to help reinforce how they can convert an existing project to use Webpack.   

* Since these demos use a small codebase, it may not be immediately evident how JavaScript bundling can improve an app's performance. Remind students that in the workplace, projects are much bigger and often have many contributors and encourage them to `think big` when considering the benefits of Webpack. 

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

  * 🔑 Instead of using one large JavaScript file, we can use a different JavaScript file to handle the functionality for each box on the page. 

  * 🔑 This modularization allows us to break down our JavaScript into small, more manageable chunks of code that perform a specific role.

* Open `01-Ins_Modularization-Example/index.html` in your IDE and explain the following: 

  * 🔑 To use multiple JavaScript files, we can link each individual file to our HTML. This works but it is difficult to maintain as our projects grow in scope. 

    ```html
    <script src="assets/js/box-one.js"></script>
    <script src="assets/js/box-two.js"></script>
    <script src="assets/js/box-three.js"></script>
    <script src="assets/js/box-four.js"></script>
    ```
  
* Open `01-Ins_Webpack-Example/` from the command line and demonstrate the following: 

  * 🔑 To write cleaner, faster code, we can use Webpack to bundle our JavaScript modules.   

  * 🔑 To use Webpack, we first need to initialize npm and create a `package.json` file. To do that, we use `npm init -y`.

    ```sh
    npm init -y
    ```

  * 🔑 Next, we install Webpack locally as well as the command line tools. Since we want to use Webpack during development only, we use `--save-dev`.

    ```sh
    npm install webpack webpack-cli --save-dev
    ```

* Open `01-Ins_Webpack-Example/src` in your IDE and explain the following: 

  * When we look at the file structure for our project, we now have a `package.json` at the root. We also have two new directories we use to hold Webpack's input and output.

  * 🔑 We use the `src` directory -- our input directory -- to hold the files we want Webpack to bundle. For now, all of our JavaScript files go into our `src`.

* Open `01-Ins_Webpack-Example/src/index.js` in your IDE and explain the following: 

  * 🔑 We also have a new file in our `src`, an `index.js`. This JavaScript file will serve as Webpack's entry point. 

  * 🔑 When we run Webpack, it will check everything that has been imported or required in the `index.js` entry point and then bundle it all together into a new file called `main.js`. 

    ```js
    import './box-one';
    import './box-two';
    import './box-three';
    import './box-four';
    ```

 * 🔑 The single `main.js` file will then be added -- by Webpack -- into the `dist` folder. 

* Open `01-Ins_Webpack-Example/dist` in your IDE and explain the following: 

  * 🔑 The `dist` directory contains all the files Webpack outputs. For mow, that is the `main.js` file. 
  
  * Since we are only generating a JavaScript bundle for now, we also  put our `index.html` and `styles.css` file manually in this directory. Later, we will use Webpack to output all these files.

* Open `01-Ins_Webpack-Example/dist/index.html` in your IDE and explain the following: 

  * 🔑 Now that we used Webpack to bundle our JavaScript files into a single `main.js` file, we no longer need links to multiple JavaScript files. Instead, we can simply link to the newly generated `main.js` file. 

    ```html
    <script src="main.js"></script>
    ```

* Open `01-Ins_Webpack-Example/webpack.config.js` in your IDE and explain the following: 

  * 🔑 This is all we need for Webpack to bundle our files for a simple project. However, for more complex projects, it is important to use a configuration file explicitly state the entry point and output expected. 

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

  * ☝️ How comfortable do you feel with modularization? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `/src`

  * ✔️ `index.js` entry point

  * ✔️ `/dist`

  * ✔️ `main.js`

  * ✔️ `webpack.config.js`

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? }

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 6. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: { ACTIVITY NAME } (5 min) 

@TODO USE THE FOLLOWING FOR BROWSER AND/OR COMMAND LINE DEMOS, RESPECTIVELY. REMOVE IF UNUSED

* Open `@TODO/folder/file` in your browser and demonstrate the following:

* Run `@TODO/folder/file { AND ARGS, IF ANY }` from the command line and demonstrate the following: 

  * 🔑 @TODO { WHEN WE DO THIS, IT DOES THAT. }

  * 🔑 @TODO { WE ALSO SEE THESE THINGS. }

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 @TODO { YES, HOW? } 

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `@TODO/folder/file`.

### 9. Student Do: { ACTIVITY NAME } (15 min) 

* Direct students to the activity instructions found in `@TODO/folder/file`.

* Break your students into pairs that will work together on this activity.

  ```md
  @TODO ADD ACTIVITY INSTRUCTIONS, TABBED ONCE OR TWICE (DEPENDING ON CODE SNIPPETS IN ACTIVITY INSTRUCTIONS)
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: { ACTIVITY NAME } (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with @TODO { TOPIC }? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ @TODO { THIS }

  * ✔️ @TODO { THAT }

  * ✔️ @TODO { THE OTHER }

* Open `@TODO/folder/file` in your IDE and explain the following: 

  * @TODO { WE DO THIS AND THE RESULT IS THAT }

    ```
    @TODO ADD CODE SNIPPET, TABBED TWICE (4 SPACES)
    ```

  * 🔑 @TODO DON'T FORGET TO USE THE KEY EMOJI ON KEY POINTS, BUT ONLY KEY POINTS, NOT _EVERY_ POINT

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ @TODO { DO WE END OUR REVIEWS WITH A QUESTION? }

  * 🙋 @TODO { YES, WE DO! }

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 @TODO We can refer to supplemental material, read the [{ DOCS }]({ URL }), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.


### 11. END (0 min)
