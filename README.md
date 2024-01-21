# Password Generator

A simple command-line tool written in Node.js for generating random passwords with customizable options.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Options](#options)
- [Example](#example)
- [License](#license)

## Features

- Generate random passwords with various options.
- Customize password length and character sets.
- Easy-to-use command-line interface.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/password-generator.git

    Navigate to the project directory:

    bash

cd password-generator

Install dependencies (none required for this project):

bash

# No dependencies to install

Run the password generator:

bash

    node password-generator.js [options]

Options

    --no-lowercase: Exclude lowercase letters.
    --no-uppercase: Exclude uppercase letters.
    --no-numbers: Exclude numbers.
    --no-symbols: Exclude symbols.
    --length <value>: Specify the password length.

Example

Generate a password with default options:

bash

node password-generator.js

Generate a password without lowercase letters and with a length of 16 characters:

bash

node password-generator.js --no-lowercase --length 16

License

This project is licensed under the MIT License - see the LICENSE file for details.
