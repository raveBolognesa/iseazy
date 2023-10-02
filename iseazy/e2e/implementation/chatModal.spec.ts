import { test, expect } from '@playwright/test'
const  BASEURL = 'http://127.0.0.1:5173/'
test('Bob wants to chat with the app', async ({ page }) => {
    await page.goto(BASEURL)
    await page.click('button#chat-button:has-text("Chat")')
    await expect(page.locator('#modal-selector')).toBeVisible()
    await expect(page.locator('#modal-heading-selector')).toHaveText('Comentarios')
})

test('Bob wants to test if the chat opens and records comments', async ({ page }) => {
    await page.goto(BASEURL)
    await page.click('button#chat-button:has-text("Chat")')

    await expect(page.locator('#modal-selector')).toBeVisible()

    await page.fill('input#comment-input', 'Test comment')
    await page.keyboard.press('Enter')

    const comments = await page.locator('#comment-list')
    const commentsText = await comments.innerText()
    await expect(commentsText).toContain('Test comment')
})

test('Bob wants to test if the chat opens and closes correctly', async ({ page }) => {
    await page.goto(BASEURL)
    await page.click('button#chat-button:has-text("Chat")')
    await expect(page.locator('#modal-selector')).toBeVisible()
    await expect(page.locator('#modal-heading-selector')).toHaveText('Comentarios')

    await page.click('button#close-button')

    const chat = await page.locator('button#chat-button:has-text("Chat")')
    await expect(chat).toBeVisible()
})
