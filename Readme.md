# AWS Event Generator

**Note:** Currently only for AppSync Events with custom arguments.

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

## Todo:
* [ ] Add unit tests
* [ ] Add other event sources
* [ ] Create documentation
* [ ] Creat an npm module
