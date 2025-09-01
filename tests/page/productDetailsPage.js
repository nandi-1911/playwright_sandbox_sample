import { expect, Page } from '@playwright/test';
export class ProductDetailsPage {


    constructor(page) {
        this.page = page;
        
    }
  
    async selectColourAndQuantity(colour, quantity){
        await this.page.getByRole('textbox').fill(quantity);
        await this.page.locator('//select').selectOption(colour);
        
    }
}