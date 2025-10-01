// Custom Error Class
class PaymentError extends Error {
  constructor(message) {
    super(message);
    this.name = "PaymentError";
  }
}

function processOrder(cart, payment) {
  try {
    // Check if cart is empty
    if (cart.length === 0) {
      throw new Error("Your cart is empty! Please add items.");
    }

    // Check if payment is valid
    if (payment <= 0 || isNaN(payment)) {
      throw new PaymentError("Invalid payment amount!");
    }

    // If everything is fine
    console.log(" Order processed successfully!");
    console.log("Items:", cart.join(", "));
    console.log("Paid: ₹" + payment);

  } catch (err) {
    // Handle errors
    if (err instanceof PaymentError) {
      console.error(" Payment Error:", err.message);
    } else {
      console.error(" General Error:", err.message);
    }
  } finally {
    // This will always run
    console.log(" Thank you for shopping with us!");
  }
}

// Test cases
processOrder([], 500);        // Empty cart → Error
processOrder(["Apple"], 0);   // Invalid payment → PaymentError
processOrder(["Apple", "Mango"], 300); // Success
