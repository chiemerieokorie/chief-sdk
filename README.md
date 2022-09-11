## Lord of The Rings SDK

This package implements the Lord of The Rings API that can be found under https://the-one-api.dev/v2

## How to install and use it

```bash
npm install chief-sdk
```

The module can be imported and used in your code as:
```javascript
import SDK from 'chief-sdk';
const sdk = new SDK('your-api-key');
const books = await sdk.Book.getAll();
const book = await sdk.Book.getOne()("id-of-book");

```

The module supports five different endpoints: `/book`, `/character`, `/chapter`, `/movie`, `/quote`. All modules can be accessed in the same way: 
```javascript
sdk.{Books | Character | Chapter | Movie | Quote }.get();
```

## Test the application
To test the application, just run `npm run test` from the root.
