import { Client, Account } from "appwrite";

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66c4e78c003bd0092b54'); // Your project ID

// Initialize the Appwrite account service
const account = new Account(client);

export { account, client };

// Function to handle Google login
async function handleLogin() {
    try {
        await account.createOAuth2Session(
            'google', // OAuth provider
            'https://shade555.github.io/mathbot/', // Redirect URL on success
            'https://shade555.github.io/mathbot/fail' // Redirect URL on failure
        );
    } catch (error) {
        console.error('Login failed', error);
        // You may want to show an error message to the user here
    }
}
