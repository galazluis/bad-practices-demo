import { Selector } from 'testcafe'

var productbtn1 = Selector('button[class="btn btn_primary btn_small btn_inventory"][name="add-to-cart-sauce-labs-backpack"]')
var Productbtn2 = Selector('button[class="btn btn_primary btn_small btn_inventory"][name="add-to-cart-sauce-labs-bike-light"]')
var product_btn3 = Selector('button[class="btn btn_primary btn_small btn_inventory"][name="add-to-cart-sauce-labs-bolt-t-shirt"]')

fixture('tests')
    .page `https://www.saucedemo.com/`

test('login success', async t => {
    await t.typeText('input[placeholder="Username"][name="user-name"]','standard_user')
    await t.typeText('#password','secret_sauce')
    await t.click('input[type="submit"]')
    await t.expect(Selector('.title').exists).ok()
})

test('add 3 products to cart', async t => {
    await t.typeText('input[placeholder="Username"][name="user-name"]','standard_user')
    await t.typeText('#password','secret_sauce')
    await t.click('input[type="submit"]')
    await t.expect(Selector('.title').exists).ok()
    await t.click(productbtn1)
    await t.expect(Selector('.shopping_cart_badge').innerText).eql('1')
    await t.click(Productbtn2)
    await t.expect(Selector('.shopping_cart_badge').innerText).eql('2')
    await t.click(product_btn3)
    await t.expect(Selector('.shopping_cart_badge').innerText).eql('3')
})