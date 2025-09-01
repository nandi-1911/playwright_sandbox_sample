import { test, expect } from '@playwright/test';
import { BlogSpotPracticePage } from '../page/blogSpotPracticePage';
import userData from '../page/data/user.json'; // Import the JSON file
test('PracticeTest', async ({ page }) => {
  const blogSpotPracticePage = new BlogSpotPracticePage(page);
  await blogSpotPracticePage.navigateTo("https://testautomationpractice.blogspot.com/");
  await blogSpotPracticePage.fillUserDetails(userData.kowshik);
});
