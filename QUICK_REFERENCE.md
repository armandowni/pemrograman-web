# 🚀 Quick Reference Guide

Panduan cepat untuk konsep-konsep penting dalam web programming.

## HTML Basics

```html
<!-- Struktur dasar -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Judul Halaman</title>
</head>
<body>
    <h1>Heading</h1>
    <p>Paragraf</p>
</body>
</html>

<!-- Common Tags -->
<h1>-<h6>           <!-- Headings -->
<p>                 <!-- Paragraph -->
<a href="#">        <!-- Link -->
<img src="">        <!-- Image -->
<button>            <!-- Button -->
<input type="">     <!-- Input -->
<form>              <!-- Form -->
<div>               <!-- Container -->
<span>              <!-- Inline container -->
```

## CSS Basics

```css
/* Selectors */
element { }         /* Element selector */
.class { }          /* Class selector */
#id { }             /* ID selector */
element.class { }   /* Combined */

/* Properties */
color: red;
background-color: blue;
font-size: 16px;
padding: 10px;
margin: 10px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;

/* Pseudo-classes */
:hover { }
:focus { }
:active { }
:first-child { }
:last-child { }
```

## JavaScript Basics

```javascript
// Variables
let variable = "value";
const constant = "value";
var oldVariable = "value";

// Data Types
let string = "text";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { name: "John", age: 25 };

// Operators
+, -, *, /, %, **
==, ===, !=, !==, <, >, <=, >=
&&, ||, !

// Conditionals
if (condition) { }
else if (condition) { }
else { }

// Loops
for (let i = 0; i < 10; i++) { }
while (condition) { }
array.forEach(item => { });

// Functions
function name(param) { return value; }
const arrow = (param) => { return value; };
const shortArrow = param => value;

// DOM
document.getElementById("id")
document.querySelector(".class")
element.textContent = "text"
element.innerHTML = "<p>HTML</p>"
element.addEventListener("click", function() { })
```

## Vue.js Basics

```javascript
// Create App
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello"
        }
    },
    computed: {
        computed() {
            return this.message.toUpperCase();
        }
    },
    methods: {
        method() {
            this.message = "Changed";
        }
    },
    watch: {
        message(newValue) {
            console.log(newValue);
        }
    }
}).mount("#app");
```

## Vue Directives

```html
<!-- Rendering -->
{{ message }}                    <!-- Interpolation -->
<div v-text="message"></div>    <!-- Text binding -->
<div v-html="html"></div>       <!-- HTML binding -->

<!-- Conditionals -->
<div v-if="condition"></div>
<div v-else-if="condition"></div>
<div v-else></div>
<div v-show="condition"></div>

<!-- Looping -->
<div v-for="item in items" :key="item.id">
    {{ item }}
</div>

<!-- Binding -->
<input v-model="message">                    <!-- Two-way -->
<a :href="url"></a>                         <!-- One-way -->
<div :class="{ active: isActive }"></div>   <!-- Class -->
<div :style="{ color: color }"></div>       <!-- Style -->

<!-- Events -->
<button @click="method"></button>
<input @keyup.enter="method">
<form @submit.prevent="method"></form>
```

## Array Methods

```javascript
// Non-mutating
array.map(item => item * 2)
array.filter(item => item > 5)
array.find(item => item.id === 1)
array.reduce((sum, item) => sum + item, 0)
array.some(item => item > 5)
array.every(item => item > 0)
array.includes(value)
array.indexOf(value)

// Mutating
array.push(item)
array.pop()
array.unshift(item)
array.shift()
array.splice(index, count, ...items)
array.sort((a, b) => a - b)
array.reverse()
```

## Common Patterns

### Form Handling
```html
<form @submit.prevent="handleSubmit">
    <input v-model="form.name" type="text">
    <input v-model.number="form.age" type="number">
    <select v-model="form.city">
        <option value="">Select</option>
        <option value="jakarta">Jakarta</option>
    </select>
    <button type="submit">Submit</button>
</form>
```

### List Rendering with Filter
```html
<div v-for="item in filteredItems" :key="item.id">
    {{ item.name }}
</div>

<script>
    computed: {
        filteredItems() {
            return this.items.filter(item => 
                item.name.includes(this.searchQuery)
            );
        }
    }
</script>
```

### Conditional Rendering
```html
<div v-if="isLoading">Loading...</div>
<div v-else-if="error">Error: {{ error }}</div>
<div v-else>{{ data }}</div>
```

### Event Handling
```html
<button @click="increment">Count: {{ count }}</button>
<input @keyup.enter="search">
<form @submit.prevent="submit">
    <button type="submit">Submit</button>
</form>
```

## Useful Functions

### Format Currency
```javascript
function formatCurrency(value) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);
}
```

### Format Date
```javascript
function formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
```

### Debounce
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}
```

### Throttle
```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

## localStorage

```javascript
// Save
localStorage.setItem("key", JSON.stringify(data));

// Get
let data = JSON.parse(localStorage.getItem("key"));

// Remove
localStorage.removeItem("key");

// Clear
localStorage.clear();
```

## Fetch API

```javascript
// GET
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// POST
fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "John" })
})
    .then(response => response.json())
    .then(data => console.log(data));

// Async/Await
async function getData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
```

## Canvas Basics

```javascript
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Clear
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Rectangle
ctx.fillStyle = "red";
ctx.fillRect(x, y, width, height);

// Circle
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fill();

// Line
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();

// Text
ctx.font = "20px Arial";
ctx.fillText("Text", x, y);

// Animation
function animate() {
    // Update and draw
    requestAnimationFrame(animate);
}
animate();
```

## CSS Animation

```css
@keyframes slide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100px);
    }
}

.element {
    animation: slide 1s ease-in-out infinite;
}

/* Animation properties */
animation-name: slide;
animation-duration: 1s;
animation-timing-function: ease-in-out;
animation-delay: 0s;
animation-iteration-count: infinite;
animation-direction: normal;
animation-fill-mode: forwards;
```

## Debugging Tips

```javascript
// Console logging
console.log("Value:", variable);
console.error("Error:", error);
console.table(array);
console.time("label");
// ... code ...
console.timeEnd("label");

// Breakpoint
debugger;

// Try-catch
try {
    // Code that might error
} catch (error) {
    console.error("Error:", error);
}

// Check type
typeof variable
instanceof Constructor
Array.isArray(variable)
```

## Performance Tips

1. **Use const/let instead of var**
2. **Use arrow functions for callbacks**
3. **Use computed properties for caching**
4. **Use v-show for frequent toggles**
5. **Use v-if for rare rendering**
6. **Debounce search inputs**
7. **Lazy load images**
8. **Minimize DOM manipulation**
9. **Use event delegation**
10. **Cache DOM queries**

## Common Mistakes to Avoid

❌ **Don't:**
- Mutate props directly
- Use array index as key in v-for
- Forget to bind `this` in methods
- Use v-if with v-for on same element
- Forget :key in v-for
- Use v-html with user input
- Block main thread with heavy computation

✅ **Do:**
- Use computed properties for derived state
- Use methods for actions
- Use watchers for side effects
- Always use :key in v-for
- Validate user input
- Use error handling
- Test your code

---

**Last Updated:** 2024
**Version:** 1.0
