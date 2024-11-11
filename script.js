

const products = [
    { name: 'Product 1', inStock: true },
    { name: 'Product 2', inStock: false },
    { name: 'Product 3', inStock: true },
    { name: 'Product 4', inStock: false },
    { name: 'Product 5', inStock: true },
];

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const productButtonsContainer = document.getElementById('product-buttons');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    displayProducts(query);
});

const displayProducts = (query) => {
    // Clear previous results
    productButtonsContainer.innerHTML = '';

    // Filter products based on the search query
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    // Create buttons for filtered products
    filteredProducts.forEach(product => {
        const button = document.createElement('div');
        button.className = `product-button ${!product.inStock ? 'out-of-stock' : ''}`;
        button.textContent = product.name + (product.inStock ? '' : ' (Out of Stock)');
        button.disabled = !product.inStock;

        if (product.inStock) {
            button.addEventListener('click', () => {
                alert(`${product.name} added to cart!`);
            });
        }

        productButtonsContainer.appendChild(button);
    });
};