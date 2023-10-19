const products = [
    { name: 'laptop', price: 58000, color: 'silver' },
    { name: 'phone', price: 32000, color: 'black' },
    { name: 'watch', price: 19000, color: 'red' },

];

// const brands = products.map(product => product.name)
// console.log(brands);

// const price = products.map(product => product.price)
// console.log(price);

// products.forEach(product => console.log(product.color));

const chip = products.filter(product => product.price <= 60000)
console.log(chip);