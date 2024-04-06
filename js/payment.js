    function validatePayment() {
        // Retrieve input values
        var cardNumber = document.getElementById('cardNumber').value;
        var cvv = document.getElementById('cvv').value;
        var otp = document.getElementById('otp').value;

        // Basic validation
        if (!cardNumber || !cvv || !otp) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate validation (you may replace this with actual validation logic)
        var sampleCardNumber = "1234567890123456";
        var sampleCVV = "123";
        var sampleOTP = "123456";

        if (cardNumber !== sampleCardNumber || cvv !== sampleCVV || otp !== sampleOTP) {
            alert("Invalid card details or OTP.");
            return;
        }

        // If validation passes, proceed with payment
        alert("Payment successful!");

        // Reset the form
        document.getElementById('paymentForm').reset();
        
        // Here you can add logic to redirect to a confirmation page or perform any other action
    }
