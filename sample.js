const ClashOfClansSDK = require('clash-of-clans-sdk-node');


; (async function main() {
    const connection = await new ClashOfClansSDK(
        email = process.env.EMAIL || 'yourEmailGoesHere',
        password = process.env.PASSWORD || 'yourPasswordGoesHere'
    );


    const tokens = await connection.listTokens();
    console.log(tokens);

    const key = {
        name: 'name*of*the*key',
        description: 'description|of|the|key',
        cidrRanges: ['0.0.0.0'], // Whitelist IP Address 
        scopes: null
    };
    const createdToken = await connection.createTokens(key);
    console.log(createdToken);

    const deleteKey = await connection.deleteKey('id-goes-here');
    console.log(deleteKey)
})()