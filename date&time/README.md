#  Online Shopping Order Tracking (JavaScript Date & Time Example)

This  demonstrates how to use **JavaScript Date & Time features** in a real-world scenario: tracking an **online shopping order**.  
It covers order placement, delivery date calculation, timestamps, extracting date parts, formatting, and countdown to delivery.

1. **Order Date (current date & time)**
   - Captures when the order was placed using `new Date()`.

2. **Delivery Date (after 5 days)**
   - Calculates the expected delivery date by adding 5 days to the order date.

3. **Timestamp**
   - Converts the order date into a **timestamp** (milliseconds since Jan 1, 1970).

4. **Extract Date Parts**
   - Retrieves year, month, day, hours, minutes, seconds, and day of the week.

5. **Formatting**
   - Displays local date and time using `toLocaleDateString()` and `toLocaleTimeString()`.

6. **Countdown Timer**
   - Shows how much time is left until delivery (days, hours, minutes, seconds).

---

##  Code Example

```js
// 1. Order date (current date & time)
let orderDate = new Date();
console.log(" Order placed on:", orderDate.toLocaleString());

// 2. Delivery date (after 5 days)
let deliveryDate = new Date(orderDate);
deliveryDate.setDate(orderDate.getDate() + 5);
console.log(" Expected Delivery:", deliveryDate.toLocaleDateString());

// 3. Timestamp (milliseconds since 1970)
let orderTimestamp = orderDate.getTime();
console.log("⏱ Order Timestamp:", orderTimestamp);

// 4. Extract parts of date
console.log(" Year:", orderDate.getFullYear());
console.log(" Month:", orderDate.getMonth() + 1); // Month starts from 0
console.log(" Day of Month:", orderDate.getDate());
console.log(" Day of Week:", orderDate.getDay()); // 0 = Sunday
console.log(" Hours:", orderDate.getHours());
console.log(" Minutes:", orderDate.getMinutes());
console.log(" Seconds:", orderDate.getSeconds());

// 5. Formatting options
console.log(" Local Date:", orderDate.toLocaleDateString());
console.log(" Local Time:", orderDate.toLocaleTimeString());

// 6. Countdown to delivery (difference in days, hours, minutes, seconds)
let now = new Date();
let diffMs = deliveryDate - now;
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
let diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
let diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

console.log(` Time left for delivery: ${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`);
