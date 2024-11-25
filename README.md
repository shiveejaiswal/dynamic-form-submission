# **Dynamic Form Generator**

## **Overview**

The **Dynamic Form Generator** is an application that takes a JSON schema and generates a styled, functional form in real-time. It features a split-screen interface where the left side contains a JSON editor with syntax highlighting, real-time validation, and error messages for invalid JSON. The right side displays the generated form, which updates as the JSON schema is edited.

### **Key Features:**

- **Real-time JSON validation** with error messages for invalid JSON.
- **Dynamic form generation** that updates as the JSON schema changes.
- **Responsive layout** that stacks the editor and preview on smaller screens.
- **Form validation** with success and error messages.
- **Submit data** to `console.log()` after submission.
- **Tailwind CSS** for consistent styling.

---

## **Prerequisites**

Ensure you have the following installed:

1. **Node.js**: A JavaScript runtime used to build the application.

   - Download and install it from [nodejs.org](https://nodejs.org/).

2. **npm**: A package manager bundled with Node.js to manage dependencies.
   - To check if npm is installed, open the terminal/command prompt and type:
     ```bash
     npm -v
     ```
   - npm should be installed automatically with Node.js.

---

## **Installation**

Follow these steps to install and run the **Dynamic Form Generator** on your local machine:

### 1. **Clone the Repository**

Clone the project to your local machine using Git. Open the terminal/command prompt and run:

```bash
git clone https://github.com/your-username/dynamic-form-submission.git
```

Replace `your-username` with the actual GitHub username of the repository owner.

### 2. **Navigate to the Project Folder**

Navigate into the project directory:

```bash
cd dynamic-form-submission-main
```

### 3. **Install Dependencies**

Run the following command to install the required dependencies listed in the `package.json` file:

```bash
npm install
```

This will install all the necessary libraries for the project, including React, TypeScript, Tailwind CSS, and React Hook Form.

### 4. **Start the Development Server**

After the installation is complete, run the development server:

```bash
npm start
```

This command will start the application and open it in your default browser at `http://localhost:3000`. If it doesn’t open automatically, manually open the browser and visit `http://localhost:3000`.

### 5. **Verify the Application**

Once the app is running, you should be able to:

- See a **JSON editor** on the left side of the screen with syntax highlighting and real-time validation.
- See the **dynamically generated form** on the right side that updates as you edit the JSON.
- The form should have proper validation, error states, and submission behavior.

---

## **Development Setup (Optional)**

If you'd like to contribute or modify the application, follow these steps:

### 1. **Open the Project in a Code Editor**

You can use any text editor such as [Visual Studio Code](https://code.visualstudio.com/). Open the `dynamic-form-submission-main` folder in your editor.

### 2. **Modify Code and Test Changes**

After making any changes to the code, save the files and refresh your browser to see the changes reflected in real-time.

### 3. **Run Unit Tests**

To run unit tests using Jest (if included), use the following command:

```bash
npm test
```

### 4. **Run Playwright E2E Tests**

For end-to-end tests using Playwright, run:

```bash
npm run test:e2e
```

This will run Playwright tests for the entire application.

---

## **Deployment (Optional)**

You can deploy the application to platforms like Vercel or Netlify to make it accessible on the web. Here's how to do it on **Vercel**:

### 1. **Install Vercel CLI**

To deploy using Vercel, you first need to install the Vercel CLI (optional):

```bash
npm install -g vercel
```

### 2. **Deploy to Vercel**

Deploy the application with the following command:

```bash
vercel
```

Follow the prompts to configure and deploy the application. After deployment, Vercel will provide you with a URL to access the live version of your app.

---

## **Troubleshooting**

1. **Missing `package.json` Error**  
   If you see an error indicating that the `package.json` file is missing, make sure you're in the correct project directory.

2. **npm Install Errors**  
   If you encounter errors during `npm install`, try deleting the `node_modules` folder and the `package-lock.json` file, then run:

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Port Conflicts**  
   If the application doesn’t start on `localhost:3000` due to a port conflict, change the port by running:
   ```bash
   PORT=3001 npm start
   ```

---

## **Folder Structure**

Here’s a brief overview of the folder structure in the project:

```
/src
  /components           # React components for the form and editor
  /utils                # Utility functions for validation and form generation
  App.tsx               # Main application component
  index.tsx             # Entry point for the app
  /styles               # Tailwind CSS configuration and global styles
/public
  index.html            # HTML template
  /assets               # Static assets (e.g., images)
```

---

## **Testing**

To ensure the application works as expected, you should run the tests after setting up the application:

### 1. **Unit Tests (Jest)**

Run the unit tests using:

```bash
npm test
```

### 2. **End-to-End Tests (Playwright)**

For end-to-end testing with Playwright, run:

```bash
npm run test:e2e
```

---

## **Example JSON Schema**

Here's an example JSON schema that you can use to test the form generation:

```json
{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    }
  ]
}
```
Happy coding!
```
