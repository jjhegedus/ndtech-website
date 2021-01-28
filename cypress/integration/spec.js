/// <reference types="cypress" />

import Chance from 'chance';
const change = new Chance();

describe('Cypress Testing: ndtech-website', () => {

	
	beforeEach(() => {
		console.log("cy = " + cy)
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		console.log("testing")
		// cy.contains('h1', 'Stories')
		cy.contains('h1', 'Welcome to ndtech!!!')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('About').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /contact', () => {
		cy.get('nav a').contains('Contact').click();
		cy.url().should('include', '/contact');
	});
});