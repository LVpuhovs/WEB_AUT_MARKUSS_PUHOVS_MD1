import {BasePage} from "./basePage";
export class SelectablePage extends BasePage {
    static get url() {
        return "selectable";
    }
    static get gridButton(){
        return cy.get("#demo-tab-grid");
    }
    static get selectButton(){
        return cy.get("#gridContainer");
    }
}