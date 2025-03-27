import {BasePage} from "../PageObjects/BasePage";
import {SelectablePage} from "../PageObjects/SelectablePage";

describe('Md1', () => {
  context("Grid", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    it.only("grid check", () => {
      SelectablePage.gridButton.click();
      // Click - “Two”, “Four”, “Six”, “Eight”
      SelectablePage.selectButton.contains("Two").click();
      SelectablePage.selectButton.contains("Four").click();
      SelectablePage.selectButton.contains("Six").click();
      SelectablePage.selectButton.contains("Eight").click();

      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.selectButton.contains("Two").should("contain.class","active");
      SelectablePage.selectButton.contains("Four").should("contain.class","active");
      SelectablePage.selectButton.contains("Six").should("contain.class","active");
      SelectablePage.selectButton.contains("Eight").should("contain.class","active");

      // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      SelectablePage.selectButton.contains("One").should("not.have.class","active");
      SelectablePage.selectButton.contains("Three").should("not.have.class","active");
      SelectablePage.selectButton.contains("Five").should("not.have.class","active");
      SelectablePage.selectButton.contains("Seven").should("not.have.class","active");
      SelectablePage.selectButton.contains("Nine").should("not.have.class","active");

    });
  });

});