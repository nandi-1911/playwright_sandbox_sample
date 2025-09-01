import { expect, Page } from '@playwright/test';
export class BlogSpotPracticePage {


    constructor(page) {
        this.page = page;
        
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async fillUserDetails(user){ {
        await this.page.getByPlaceholder('Enter Name').fill(user.name);
        await this.page.getByPlaceholder('Enter EMail').fill(user.email);
        await this.page.getByPlaceholder('Enter Phone').fill(user.phone);
        await this.page.locator('#textarea').fill(user.address);
        await this.page.locator('//button[@class="submit-btn"]').click();
    }
}}


// 