import { test, expect } from "@playwright/test";

test('"/b" redirects to "blog.arpitdalal.dev" with utm params', async ({
  page,
}) => {
  await page.goto("/b");

  await expect(page).toHaveURL(
    "https://blog.arpitdalal.dev/?utm_source=arpit.im&utm_medium=redirect&utm_campaign=url-shortener"
  );
});
test('"/blog" redirects to "blog.arpitdalal.dev" with utm params', async ({
  page,
}) => {
  await page.goto("/b");

  await expect(page).toHaveURL(
    "https://blog.arpitdalal.dev/?utm_source=arpit.im&utm_medium=redirect&utm_campaign=url-shortener"
  );
});
