    // Function to remove a product from the cart
    function removeFromCart(index) {
        // Retrieve cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Remove the item at the specified index
        cartItems.splice(index, 1);

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Render the updated cart
        renderCart();
    }

    // Function to proceed to payment
    function proceedToPayment() {
        // Retrieve cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if there are any items in the cart
        if (cartItems.length === 0) {
            alert("Please add items to your cart before proceeding to payment.");
            return;
        }

        // Redirect to the payment page
        window.location.href = 'payment.html';
    }

    // Function to render cart items on the page
    function renderCart() {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        let cartContainer = document.getElementById('cart-items');

        // Clear previous content
        cartContainer.innerHTML = '';

        // Loop through cart items and create HTML elements to display them
        cartItems.forEach((item, index) => {
            let cartItemElement = document.createElement('div');
            cartItemElement.classList.add('col-md-4', 'col-sm-6', 'col-12', 'mb-3');

            cartItemElement.innerHTML = `
                <div class="card">
                    <img src="/images/2.webp" class="img-fluid card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Price: ${item.price}</p>
                        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `;

            cartContainer.appendChild(cartItemElement);
        });
    }

    // Call renderCart when the page loads to display existing cart items
    renderCart();