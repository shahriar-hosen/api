# JavaScript API & Async Examples

This repository contains multiple small, focused JavaScript projects demonstrating real-world concepts such as:

- Working with REST APIs (GET & POST)
- JSON parsing and serialization
- DOM manipulation
- Event handling (`event.target`, `addEventListener`)
- Function context (`call`, `apply`, `bind`)
- Asynchronous JavaScript (`setTimeout`, `setInterval`, event loop)
- Performance measurement using `Date()`

These examples are built without any framework — just **vanilla JavaScript**, making them ideal for beginners and interview preparation.

---

## 📁 Project Files Overview

### **1. `index.html` – JSON Fetch & POST Demo**
- Sends POST requests to JSONPlaceholder API
- Reads form input and converts it to JSON
- Fetches user list via GET request and displays usernames in a `<ul>`
- Demonstrates JSON structure and REST communication

### **2. `async.html` – Async/Await Fetch Example**
- Loads data using `fetch()` with `async/await`
- Renders usernames dynamically into the DOM  
- Modern replacement for `.then()` promise chains

### **3. `callapply.js` – call(), apply(), bind() Examples**
- Shows how to borrow methods between objects
- Demonstrates how `this` behaves in each method
- Includes salary calculation to visualize the output differences

### **4. `event.html` – DOM Event Handling**
- Uses inline `onclick="..."` handlers
- Uses `addEventListener()` (best practice)
- Demonstrates `event.target.innerText` vs `this.innerText`
- Shows how events bubble and how handlers receive event objects

### **5. `timeout.js` – setTimeout, setInterval & Event Loop Demo**
- Multiple timed callbacks demonstrate asynchronous execution
- Loop with delayed callbacks shows `let` closure behavior
- Visualizes event loop order through console logs

### **6. `date-timezone.js` – Performance Benchmark**
- Uses `Date()` timestamps to measure loop runtime
- Shows blocking synchronous execution
- Useful for understanding CPU-bound tasks in JS

---

## 🧠 What This Repository Demonstrates

Employers and reviewers can see proof of:

- Strong understanding of **JavaScript fundamentals**
- Ability to work with **APIs and JSON**
- Knowledge of **async programming and the event loop**
- Practical use of **DOM manipulation**
- Understanding of **function context** and advanced JS concepts
- Clean, readable code with clear intent

These are all essential for frontend, backend (Node.js), and full-stack roles.

---

## 🚀 How to Run

Just clone the repo and open any `.html` file in a browser:

```bash
git clone https://github.com/shahriar-hosen/api
