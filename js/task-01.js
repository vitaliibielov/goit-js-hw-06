
const categoriesEls = document.querySelectorAll('.item');
// const categoryList = document.querySelector('.item > ul');




console.log(`Number of categories: ${categoriesEls.length}`,)

categoriesEls.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
});



// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5