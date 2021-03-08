# 🐛 jQuery's Global Variable Not Defined  

Work with a partner to resolve the following issue(s):

* As a user, I want to be able to click on the button to make the boxes appear and disappear. 

## Expected Behavior

When I click on the `toggle boxes` button, all the boxes should be hidden. When I click the button again, the boxes should once again be visible. 

## Actual Behavior

When I click on the button, the boxes do not toggle and remain visible. 

## Steps to Reproduce the Problem

1. Navigate to the `Unsolved` folder in the browser in the command line and run `npm installl` and `npx webpack`. 

2. Open `Unsolved/dist/index.html` in the browser. 

3. Click on the `toggle boxes` button. The boxes remain visible.. 

4. Open the console. An error message reads `Uncaught ReferenceError: $ is not defined`.

## 💡 Hints

How can you configure Webpack to use global variables used in libraries like jQuery? 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How would you add Bootstrap or other libraries to your Webpack project? 

Use [Google](https://www.google.com) or another search engine to research this.

---
