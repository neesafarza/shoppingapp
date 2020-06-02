

const feUrl = 'http://localhost:3000/';

const processSell = (product) => {
    // call business logic here
    // $.post(URL,data,callback);
    $.post(feUrl + 'order', product, (data, code) => {
        alert(`${data}, purchase of ${product.title} succesful!`)
    } )

}

$('document').ready(() => {


    // get all of your products ....
    const productsEl = $('#products'); // get page element

    $.get(feUrl + 'products', (products, code) => {
        console.log(products)
        products.forEach( (product) => {
            const productEl = $('<div>') // create new div
            productEl.addClass('product-container')
            productEl.append(
                `<h2 class='product-title'>${product.title}</h2>`
            )
            productEl.append(
                `<img src= ${product.image} class= 'product-image'>`
            )
    
            productEl.append(
                `<p class='product-description'>${product.description}</p>`
            )
            productEl.append(
                `<aside class= 'product-price'>£${product.price}</aside>`
            )
            const buyButton = $('<button>')
            buyButton.text('Buy');
            buyButton.addClass('product-buy');
            buyButton.click(() => processSell(product))
    
            productEl.append(buyButton)
    
            productsEl.append(productEl); // append new div to page
        })
    })

    



    // now write each product in you products list

});