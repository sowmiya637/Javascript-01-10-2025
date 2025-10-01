// Realtime Example: Online Shopping Order Tracking

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
let diffMs = deliveryDate - now; // difference in milliseconds
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
let diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
let diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

console.log(` Time left for delivery: ${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`);
