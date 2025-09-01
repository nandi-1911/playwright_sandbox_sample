import { test, expect } from '@playwright/test';
import { ProductListingPage } from '../page/productListingPage';
import { ProductDetailsPage} from '../page/productDetailsPage';

test('getting started should contain table of contents', async ({ page }) => {
  const productListingPage = new ProductListingPage(page);
  await productListingPage.navigateTo("https://sandbox.applitools.com/e-commerce");
  await productListingPage.clickBooks();
  await productListingPage.verifyProductVisible("Lightweight Aluminum Shirt");
  await productListingPage.verifyProductVisible("Ergonomic Leather Bottle");
  await productListingPage.verifyCostOfProduct("Ergonomic Leather Bottle", "$94.54");
  await productListingPage.ClickProduct("Ergonomic Leather Bottle");
  const productDetailsPage = new ProductDetailsPage(page);
  await productDetailsPage.selectColourAndQuantity("periwinkle","2");
  
});