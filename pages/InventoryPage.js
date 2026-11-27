class InventoryPage {
  constructor(page) {
    this.title = page.locator('[data-test="title"]');
    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = InventoryPage;
