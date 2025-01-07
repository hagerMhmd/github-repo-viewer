# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Setup and Run Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/hagerMhmd/github-repo-viewer.git
cd github-repo-viewer
```


### Step 2: Install Dependencies

Navigate to the project directory and install the required dependencies using npm or yarn:
`npm install`
or
`yarn install`.


### Step 3: Set Up GitHub OAuth and Firebase Configuration

To authenticate users via GitHub and set up Firebase, follow these steps:

## GitHub OAuth Setup
1. Go to the GitHub Developer Settings [https://github.com/settings/developers].
2. Create a new OAuth application. Fill out the required fields:
   Application Name: Enter a name for your application (e.g., "Github Auth")
   Homepage URL: http://localhost:3000
   Authorization callback URL: http://localhost:3000
3. After creating the OAuth app, you will receive a **Client ID** and **Client Secret**.
4. Add these values to your `.env` file in the root directory as follows:

## Firebase Console Setup
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on **Add project** and follow the prompts to create a new Firebase project.
3. Once your project is created, go to the **Authentication** section in the Firebase console, enable **GitHub** as a sign-in provider, and configure the provider with the **Client ID** and **Client Secret** from GitHub OAuth settings.
4. Go to **Firestore Database** and set up a new database in **Test Mode** for development.
5. Add the Firebase configuration to your `.env` file as follows:

```env
VITE_GITHUB_CLIENT_ID=<your-github-client-id>
VITE_GITHUB_CLIENT_SECRET=<your-github-client-secret>

VITE_FIREBASE_API_KEY=<your-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
VITE_FIREBASE_PROJECT_ID=<your-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
VITE_FIREBASE_APP_ID=<your-app-id>
VITE_FIREBASE_MEASUREMENT_ID=<your-measurement-id>
```


### Step 4: Start the Development Server

Once you have installed the dependencies and set up GitHub OAuth and Firebase, you can run the application locally using Vite:

Run the development server using Vite: `npm run dev` or `yarn dev`.


### Step 5: Logging In and Using the App

The app will be running at http://localhost:3000.
Click the Login with GitHub button.
Authorize the app to access your GitHub account.
Once logged in, you will be able to see your public repositories in a paginated list.
You can add comments to any repository, and they will be saved in your browser's local storage.
To log out, simply click the Logout button.
