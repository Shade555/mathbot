import  { Client , Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c4e78c003bd0092b54');

const account = new account(client)

export {account, client};

async function handleLogin (){
    account.create0Auth2Session(
        'google',
        'https://shade555.github.io/mathbot/',
        'https://shade555.github.io/mathbot/fail'

    )
}
