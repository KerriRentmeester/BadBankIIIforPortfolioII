# **Project Name**:  

Bad Bank - the third iteration

# **Description**: 

The Bad Bank project was deployed via Amazon Web Service S3 bucket and can be accessed here to see its capabilities: https://kerri-rentmeester-fe-bankingapp-p2.s3.us-east-2.amazonaws.com/index.html#/createaccount/

The Bad Bank project, a standalone React app, is "bad" because there is no security. As a front end banking app; however, it has a register and login page, as well as a deposit and withdraw page. Additionally, there is a home page and a page that tracks all the data transactions that occur in one session. The account balance, initialized at zero, is displayed on the deposit page. Additionally, the account balance, initialized at $100, is displayed on the withdraw page. Unfortunately the account balance is not linked across pages at this time.

This iteration of the project is a standalone app and has outdated code, incompatible with the latest version of React node.js. I used node.js version 16.20.1 on my local machine to make it work.

The following Validation was employed:
* All submit buttons are disabled until all the fields have input.
* Email input fields on the Login and Create Account pages require correct email format, otherwise a warning will appear.
* Password input fields on the Login and Create Account pages require 8 or more characters.
* Both Deposit and Withdraw input fields require positive integers, otherwise a warning will appear.
* The Withdraw input cannot exceed the account balance, otherwise an overdraft warning will appear.

Some Features employed:
* When hovering over the NavBar, a title appears explaining what each page is/does. 
* Beware - Account Balance is NOT maintained across pages.
* Each page has a different color card/content to further distinguish its purpose.

The Bad Bank project is an example of the following skills and capabilities: routing, context, tracking state, event handling, and parent/child relationships. I employed Bootstrap and CSS for styling, as well as HTML5, JavaScript, and JSX. As such, this project is one component of my professional portfolio. This particular project is based off of a similar activity I worked on in September and October of 2023 from Modules 18, 19, and Portfolio II in the MIT xPro via Emeritus bootcamp I was enrolled in called "Professional Certificate in Coding: Full Stack Development with MERN."

# **Installation & Dependencies**: 

The project relies on the following dependencies: React, Bootstrap, Babel.

To use the app, follow these steps:
* Clone the repository or download the code files.
* Navigate to the project directory in your editor (ex/VSCode). 
* Type relevant commands:
    * npm install
    * npm install bootstrap
    * npm start

# **Usage / How to Run**:

The app initiates on the home page, which is fairly generic, with a welcome message and security warning. The first step would be to "Create Account" or "Login." Once logged in, the user can "Deposit" or "Withdraw" and see the account "Balance" on either of those pages. On the final page, one can see "AllData."

# **Support**: 

Please contact me via email at krentmeester@uwalumni.com.

# **Roadmap**: 

Future fixes or improvements that would be helpful to a user:

* Make the Deposit, Withdraw, and AllData pages only visible upon logging in.
* Track the account balance across all pages 
* Track the account balance even after logging out
* Once logged in, transport the user to an account page where all accounts are visible
* Once an account is created, transport the user to an account page where all accounts are visible
* Remove the AllData page
* NavBar tab is highlighted for the active page

# **License**: 

MIT License

Copyright (c) 2023 Kerri Rentmeester

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.