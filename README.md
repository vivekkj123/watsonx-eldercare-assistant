# Project Overview

This project uses IBM Watsonx AI to generate story-like narrations based on journal entries. The application is designed to help elderly people recall their old memories by generating detailed and engaging stories from provided information.

## Prerequisites

Before running this application, ensure you have the following:

- Node.js (v14.x or later)
- IBM Cloud account
- IBM Watsonx AI service instance

## Setup

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Install Dependencies
Install the necessary dependencies by running:

```bash
npm i
```

### Step 3: Configure IBM Credentials
Create an .env file in the root directory of your project and add your IBM Cloud credentials:

```
API_KEY=<your-ibm-cloud-api-key>
```

### Step 4: Update Project Parameters
Open the index.js file and update the projectId and modelId parameters with your own project details:

```
const params = {
    ...
    projectId: '068f3e1c-abee-442e-8de6-d9109f80085b',
    ...
};
```
### Running the Application
Run the application using the following command:

```
node index.js
```

If everything is set up correctly, the application will generate a story-like narration based on the provided journal entry and output it to the console.

