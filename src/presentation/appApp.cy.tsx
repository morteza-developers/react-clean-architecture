import React from 'react'
import App from './app'

describe('<App />', () => {
  it('renders', () => {
    cy.viewport(1024, 768)
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.contains("ali").click()
    cy.contains("تغییر رمز عبور").click()
  })
})