### [Clash of Clans Unofficial SDK](https://www.npmjs.com/package/clash-of-clans-sdk-node) 🎮

## Install :star2:

```
npm i clash-of-clans-sdk-node
```

## NPM 👾
<a href="https://www.npmjs.com/package/clash-of-clans-sdk-node">https://www.npmjs.com/package/clash-of-clans-sdk-node</a>

## Usage:sparkles:


```javascript
const ClashOfClansSDK = require('./src/coc');


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
```

## Author👨‍💻
<a href="https://ashwin.engineer/">Ashwin</a>
