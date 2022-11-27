// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('AssertModel', (response) => { 
    expect(response).to.have.property('body');
    expect(response).to.have.property('duration');
    expect(response).to.have.property('headers');
})

Cypress.Commands.add('getRequest', (path) => {
    const options = {
        method: 'GET',
        url: path
    };

    return cy.request(options).then((response) => {})
})

Cypress.Commands.add('postRequest', (path, body) => {
    const options = {
        method: 'POST',
        url: path,
        form: true,
        body: body
    };

    return cy.request(options).then((response) => {})
})

Cypress.Commands.add('putRequest', (path, body) => {
    const options = {
        method: 'PUT',
        url: path,
        body: body
    };

    return cy.request(options).then((response) => {})
})

Cypress.Commands.add('deleteRequest', (path) => {
    const options = {
        method: 'DELETE',
        url: path
    };

    return cy.request(options).then((response) => {})
})