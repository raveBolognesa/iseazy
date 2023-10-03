import {Given, Then, When} from "@cucumber/cucumber";
import {ICustomWorld} from "../core/custom-world";
import {expect} from "@playwright/test";

const  BASEURL = 'http://127.0.0.1:5173/'

When('the user clicks on the {string} with the text {string}',
    async function (selector: string, text: string) {
        const page = this.page!;
        const button = await page.locator(`${selector} >> text="${text}"`);
        await button.click();
    },
);
When('the user clicks on the {string}',
    async function (selector: string) {
        const page = this.page!;
        const button = await page.locator(`${selector}`);
        await button.click();
    },
);

Given('opens the website with title {string}', async function (this: ICustomWorld, title: string) {
    const page = this.page!;
    await page.goto(BASEURL);
    await page.locator('h1 >> text="' + title + '"').waitFor();
});


Then('the user don\'t see the modal with heading {string}', async function (string) {
    const page = this.page!;
    await expect(page.locator('#modal-selector')).toBeHidden()
    await expect(page.locator('#modal-heading-selector')).toBeHidden()
});

Then('the user sees the coment {string}', async function (string) {
    const page = this.page!;
    const comments = await page.locator('#comment-list')
    const commentsText = await comments.innerText()
    await expect(commentsText).toContain(string)
});


When(
    'fills the input with id {string} with value {string}',
    async function (this: ICustomWorld, id: string, value: string) {
        const page = this.page!;
        const input = await page.waitForSelector('#app >> input#' + id + ' ');
        await input.fill(value);
        await page.keyboard.press('Enter')

    },
);


Then('the user see the modal with heading {string}', async function (string) {
    const page = this.page!;
    await expect(page.locator('#modal-selector')).toBeVisible()
    await expect(page.locator('#modal-heading-selector')).toHaveText(string)
});
