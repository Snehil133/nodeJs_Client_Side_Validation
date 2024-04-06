

    // Function to add a product to the cart
    function addToCart(productName, price) {
        // Retrieve existing cart items from local storage or initialize an empty array
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        cartItems.push({ name: productName, price: price });

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Show the "Added to Cart" modal
        $('#addToCartModal').modal('show');
    }
