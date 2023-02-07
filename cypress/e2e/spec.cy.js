describe("testing weather app", () => {
  it("test scenario 1", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".card-container").should("have.length", 1);

    cy.get("[data-test-id='add-card-button']").click();
    cy.get("[data-test-id='add-card-button']").click();

    cy.get(".card-container").should("have.length", 3);
    cy.get(".btn-close").first().click();
    cy.get(".btn-close").first().click();
    // cy.get(".btn-close").first().click();
    cy.get(".card-container").should("have.length", 1);
    cy.get(".input-field").type("London");
    cy.get(".card-city").should("have.text", "Bucharest");
    cy.get(".search-button").click();
    cy.get(".card-city").should("have.text", "London");
  });
});
