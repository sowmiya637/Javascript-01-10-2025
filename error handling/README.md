#  Online Shopping Order Processing with Custom Errors

This demonstrates **JavaScript error handling** using `try`, `catch`, `finally`, and **custom error classes**.  
It simulates a simple online shopping order processing system with validation for cart items and payment.

1. **Custom Error Class**
   - `PaymentError` extends the built-in `Error` class.
   - Used to specifically handle payment-related issues.

2. **Error Handling**
   - `try/catch/finally` blocks handle errors gracefully.
   - Differentiates between general errors and payment errors.

3. **Order Validation**
   - Checks if the cart is empty.
   - Checks if the payment amount is valid (non-zero, numeric).

4. **Finally Block**
   - Always executes, providing a thank-you message regardless of success or failure.

---

##  Code Example

```js
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
processOrder([], 500);        // Empty cart → General Error
processOrder(["Apple"], 0);   // Invalid payment → PaymentError
processOrder(["Apple", "Mango"], 300); // Success

console output:

 General Error: Your cart is empty! Please add items.
 Thank you for shopping with us!
 Payment Error: Invalid payment amount!
 Thank you for shopping with us!
 Order processed successfully!
 Items: Apple, Mango
 Paid: ₹300
 Thank you for shopping with us!
