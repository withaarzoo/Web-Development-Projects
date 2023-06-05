# Random Password Generator
This is a simple web application that generates a random password using HTML, CSS, and JavaScript. It allows users to generate a password and copy it to their clipboard.

## Usage
To use the Random Password Generator, follow these steps:

1. Open the index.html file in a web browser.
2. The web page will display a "Generate Password" button and a text input field.
3. Click the "Generate Password" button to generate a random password.
4. The generated password will appear in the text input field.
5. Click the copy icon (file copy) next to the password to copy it to the clipboard.
6. A success message will appear indicating that the password has been copied.

## Technologies Used
The Random Password Generator uses the following technologies:

* HTML: The structure and layout of the web page.
* CSS: The styling and appearance of the web page.
* JavaScript: The logic and interactivity of the web page.

## Features
The Random Password Generator offers the following features:

* Random Password Generation: The application generates a random password by combining uppercase letters, lowercase letters, numbers, and symbols.
* Password Length: The generated password has a fixed length of 12 characters.
* Copy to Clipboard: Users can easily copy the generated password to their clipboard by clicking the copy icon.

## How it Works
The JavaScript code in `script.js file` performs the following actions:

1. Selects the necessary HTML elements (password input field, copy button, and generate button) using `document.querySelector`.
2. Defines the character sets for uppercase letters, lowercase letters, numbers, and symbols.
3. Combines all the character sets into a single `allChars` string.
4. Defines the `createPassword` function that generates a random password by selecting a random character from each character set and adding it to the password string.
5. Ensures that the generated password has a length of 12 characters by repeatedly adding random characters from `allChars` until the desired length is reached.
6. Sets the generated password as the value of the password input field.
7. Defines the `copyPassword` function that selects the password input field, copies its value to the clipboard using `document.execCommand("copy")`, and displays a success message.
8. Adds event listeners to the generate button and copy button, which call the `createPassword` and `copyPassword` functions respectively when clicked.

## Customization
If you want to customize the behavior or appearance of the Random Password Generator, you can modify the following parts of the code:

* Password Length: The length of the generated password is currently set to 12 characters. If you want a different length, you can change the value of the `length` constant in the JavaScript code.
* Styling: The appearance of the web page can be customized by modifying the CSS code in the `style.css` file. You can change the colors, fonts, margins, and other styling properties to suit your preferences.

## Preview
<img width="960" alt="Screenshot 2023-06-05 103330" src="https://github.com/Aarzoo75/Web-Development-Projects/assets/59678435/3327198f-dc73-4ea8-983b-d4295948fcba">
