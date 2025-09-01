import { expect, Page } from '@playwright/test';
export class ProductListingPage {


    constructor(page) {
        this.page = page;
        this.books = page.getByText('Books');
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async clickBooks() {
        await this.books.click();
    }
    async verifyProductVisible(product){
        const productLocator = await this.page.getByText(product);
        await expect(productLocator).toBeVisible();
    }

    async verifyCostOfProduct(product, cost){
        const productLocator = await this.page.getByText(product);
        const costLocator = await productLocator.locator("..//*[@class='product-card_productPrice__7qpKI']")
        console.log(await costLocator.innerText())
        await expect(costLocator).toHaveText(cost);
    }

    async ClickProduct(product,){
        const productLocator = await this.page.getByText(product);
        await productLocator.click();

    }
}

