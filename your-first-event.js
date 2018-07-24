const CreateEvent = require('./')

const params = {
    templateName: 'aws:appsync',
    cognitoIdentity: true, // switch off identity
    customInput: {
        contactName: 'Dimitri Tarasowski',
        contactEmail: 'youremail@here.de',
        entity: 'contact'
    }
}

const event = CreateEvent(params)

console.log(event)
