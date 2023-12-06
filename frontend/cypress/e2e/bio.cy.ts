// https://docs.cypress.io/api/commands/viewport#Arguments
const sizes = ["iphone-xr", "macbook-13"];

export const isMobile = () => {
  return (
    Cypress.config("viewportWidth") <
    Cypress.env("mobileViewportWidthBreakpoint")
  );
};

describe("Bio page", () => {
  sizes.forEach((size) => {
    context(size, () => {
      beforeEach(() => {
        //@ts-ignore
        cy.viewport(size);
      });

      it("renders the artist header", () => {
        cy.visit("/bio");

        cy.findByAltText("Artist 1 picture").should("be.visible");
        cy.findByAltText("Artist 1 logo").should("be.visible");
        cy.findByText(/verified fans/i).should("be.visible");
      });

      it("renders the social media icons", () => {
        cy.visit("/bio");

        cy.findByAltText("twitter icon").should("be.visible");
        cy.findByAltText("youtube icon").should("be.visible");
        cy.findByAltText("instagram icon").should("be.visible");
        cy.findByAltText("soundcloud icon").should("be.visible");
        cy.findByAltText("share icon").should("be.visible");
        cy.findByAltText("spotify icon").should("be.visible");
      });

      it("renders upcoming events", () => {
        cy.visit("/bio");

        cy.findByText("Upcoming Events").should("be.visible");
      });

      it("shows no events when theres no events", () => {
        cy.intercept("GET", `/api/events`, {
          fixture: "events/events-empty",
        }).as("getEvents");

        cy.visit("/bio");

        cy.wait("@getEvents");

        cy.findByText("No upcoming events for this artist.").should(
          "be.visible"
        );
      });

      it("shows the first 3 events", () => {
        cy.intercept("GET", `/api/events`, {
          fixture: "events/events-all",
        }).as("getEvents");

        cy.visit("/bio");

        cy.wait("@getEvents");

        cy.findByText("Event 1").should("be.visible");

        if (!isMobile()) {
          cy.findAllByText("Get Tickets").should("have.length", 3);
        }

        cy.findByText("Event 2").should("be.visible");
        cy.findByText("Event 3").should("be.visible");
      });

      it("expands the events list", () => {
        cy.intercept("GET", `/api/events`, {
          fixture: "events/events-all",
        }).as("getEvents");

        cy.visit("/bio");

        cy.wait("@getEvents");

        cy.findByText("Event 1").should("be.visible");
        cy.findByText("Event 2").should("be.visible");
        cy.findByText("Event 3").should("be.visible");

        cy.findByText("See more").click();

        cy.findByText("Event 4").should("be.visible");
        cy.findByText("Event 5").should("be.visible");

        cy.findByText("See less").click();

        cy.findByText("See more").should("be.visible");
      });
    });
  });
});
