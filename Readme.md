# AWS Event Generator

**Note:** Currently only for AppSync Events with custom arguments.

**your-first-event.js**
```js
const CreateEvent = require('./')

const params = {
    templateName: 'aws:appsync',
    cognitoIdentity: true, // OR false if you want switch if off 
    customInput: {
        contactName: 'Dimitri Tarasowski',
        contactEmail: 'youremail@here.de',
        entity: 'contact'
    }
}

const event = CreateEvent(params)

console.log(event)
``` 
**console.log()**
```
{ args: 
   { input: 
      { contactName: 'Dimitri Tarasowski',
        contactEmail: 'youremail@here.de',
        entity: 'contact' } },
  identity: 
   { sub: '18b560d3-b524-4e11-a5cc-9aa46dc31350',
     issuer: 'https://cognito-idp.eu-west-1.amazonaws.com/XX',
     username: '18b560d3-b524-4e11-a5cc-9aa46dc31350',
     claims: 
      { sub: '18b560d3-b524-4e11-a5cc-9aa46dc31350',
        'cognito:groups': [Array],
        iss: 'https://cognito-idp.eu-west-1.amazonaws.com/XX',
        'cognito:username': '18b560d3-b524-4e11-a5cc-9aa46dc31350',
        preferred_username: 'testcompany',
        aud: '4ovlg9o3ahg7703d2aadgfojlg',
        event_id: '338bbb06-8f49-11e8-a316-5d4eb5239c30',
        token_use: 'id',
        auth_time: 1532440519,
        name: 'Dimitri',
        exp: 1532444119,
        iat: 1532440519,
        family_name: 'Tarasowski',
        email: 'your@email.de' },
     sourceIp: [ '37.221.176.67' ],
     defaultAuthStrategy: 'DENY',
     groups: [ 'canInvite', 'hasFullAccess' ] } }
```

## Todo:
* [ ] Add unit tests
* [ ] Add other event sources
* [ ] Create documentation
* [ ] Creat an npm module
