
# Dynamic Form Generator

A dynamic form generator that takes a JSON schema and generates a styled, functional form in real-time. The application features a JSON editor and a generated form preview, which updates as the JSON schema is modified.

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Testing](#testing)

## Installation Instructions

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/dynamic-form-generator.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd dynamic-form-generator
   ```

3. **Install the dependencies**:
   Make sure you have **Node.js** and **npm** installed on your machine. Then, run the following command to install the required packages:
   ```bash
   npm install
   ```

4. **Start the development server**:
   After the dependencies are installed, you can start the app by running:
   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`.

## Running the Application

1. **Start the development environment**:
   Run the following command to start the application locally:
   ```bash
   npm start
   ```

2. **Open the application**:
   Open a web browser and go to `http://localhost:3000` to see the form editor in action.

## Usage

### JSON Schema Editor
- On the left side of the screen, you can edit the JSON schema that defines the form structure. This includes field types, validation rules, and other form properties.
- The editor supports syntax highlighting and real-time validation of the JSON content.

### Generated Form Preview
- On the right side, you can see the live preview of the form that is generated based on the JSON schema.
- The form will automatically update as you modify the JSON schema.
- Fields like text input, email, select, radio, and textarea are supported, and each field will be rendered accordingly.

### Features:
- **Real-time form generation**: The form updates instantly as you modify the JSON.
- **Responsive layout**: The form is mobile-friendly and adjusts based on the screen size.
- **Error handling**: Error messages are displayed for invalid JSON or form validation errors.
- **Form submission**: The form can be submitted, and the form data will be logged to the console.
- **Loading states**: Loading animations are displayed where appropriate.

## Testing

### Unit Testing with Jest
1. **Run the Jest tests**:
   ```bash
   npm test
   ```

### E2E Testing with Playwright
1. **Run the Playwright tests**:
   ```bash
   npx playwright test
   ```

```
