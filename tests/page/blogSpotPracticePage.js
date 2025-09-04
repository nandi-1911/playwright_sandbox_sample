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
        await this.page.locator('#male').check();


        for (const day of user.days) {

            // Correctly constructs a Locator object
             await this.page.locator(`//*[@id="${day.toLowerCase()}"]`).check();
        
            // Use the Locator object directly to perform the action
        }
        await this.page.locator('//button[@class="submit-btn"]').click();

    }
}}


// select files in vs code or choose using git add
// git commit -m "added new test"
// git push origin main
// git checkout -b feature/blogSpotPracticePage
// git checkout main
// git status
// git pull origin main