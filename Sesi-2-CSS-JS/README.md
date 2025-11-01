# Sesi 2: CSS & JavaScript

## Tujuan Pembelajaran
- Memahami CSS untuk styling
- Pengenalan JavaScript
- Dasar-dasar JavaScript

## CSS (Cascading Style Sheets)

### Cara Menggunakan CSS

#### 1. Inline CSS
```html
<p style="color: red; font-size: 18px;">Teks berwarna merah</p>
```

#### 2. Internal CSS
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

#### 3. External CSS
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

### Selector CSS

```css
/* Element Selector */
p {
    color: black;
}

/* Class Selector */
.highlight {
    background-color: yellow;
}

/* ID Selector */
#header {
    background-color: navy;
    color: white;
}

/* Attribute Selector */
input[type="text"] {
    border: 1px solid gray;
}

/* Pseudo-class */
a:hover {
    color: red;
}

/* Combinators */
div > p {
    margin: 10px;
}
```

### Properties CSS Umum

```css
/* Text */
color: red;
font-size: 16px;
font-family: Arial, sans-serif;
font-weight: bold;
text-align: center;

/* Box Model */
margin: 10px;
padding: 15px;
border: 1px solid black;
width: 100px;
height: 50px;

/* Background */
background-color: lightblue;
background-image: url('image.jpg');

/* Display */
display: block;
display: inline;
display: flex;
display: grid;

/* Position */
position: relative;
top: 10px;
left: 20px;
```

## JavaScript Basics

### Pengenalan JavaScript
JavaScript adalah bahasa pemrograman yang berjalan di browser untuk membuat halaman web interaktif.

### Cara Menggunakan JavaScript

#### 1. Inline JavaScript
```html
<button onclick="alert('Halo!')">Klik Saya</button>
```

#### 2. Internal JavaScript
```html
<script>
    console.log('Hello World');
</script>
```

#### 3. External JavaScript
```html
<script src="script.js"></script>
```

### Variabel dan Tipe Data

```javascript
// Deklarasi variabel
var nama = "Budi";
let umur = 25;
const kota = "Jakarta";

// Tipe data
let string = "Teks";
let number = 42;
let boolean = true;
let array = [1, 2, 3, 4, 5];
let object = { nama: "Budi", umur: 25 };
let nullValue = null;
let undefinedValue = undefined;
```

### Operator

```javascript
// Arithmetic
let a = 10 + 5;  // 15
let b = 10 - 5;  // 5
let c = 10 * 5;  // 50
let d = 10 / 5;  // 2
let e = 10 % 3;  // 1

// Comparison
10 == "10"   // true (loose equality)
10 === "10"  // false (strict equality)
10 != 5      // true
10 > 5       // true
10 <= 10     // true

// Logical
true && false   // false
true || false   // true
!true           // false
```

### Kondisional

```javascript
// If-Else
if (umur >= 18) {
    console.log("Dewasa");
} else if (umur >= 13) {
    console.log("Remaja");
} else {
    console.log("Anak-anak");
}

// Ternary Operator
let status = umur >= 18 ? "Dewasa" : "Anak-anak";

// Switch
switch (hari) {
    case "Senin":
        console.log("Hari Kerja");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Akhir Pekan");
        break;
    default:
        console.log("Hari Lainnya");
}
```

### Loop

```javascript
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// For...of Loop
let array = [1, 2, 3, 4, 5];
for (let item of array) {
    console.log(item);
}

// forEach
array.forEach(function(item) {
    console.log(item);
});
```

### Function

```javascript
// Function Declaration
function greet(name) {
    return "Halo, " + name;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Calling Function
console.log(greet("Budi"));
console.log(add(5, 3));
console.log(multiply(4, 2));
```

### DOM Manipulation

```javascript
// Selecting Elements
let element = document.getElementById("myId");
let elements = document.getElementsByClassName("myClass");
let element2 = document.querySelector(".myClass");
let elements2 = document.querySelectorAll("p");

// Modifying Content
element.textContent = "Teks baru";
element.innerHTML = "<strong>HTML baru</strong>";

// Modifying Attributes
element.setAttribute("class", "newClass");
element.id = "newId";

// Modifying Style
element.style.color = "red";
element.style.fontSize = "20px";

// Adding/Removing Classes
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("highlight");

// Creating Elements
let newElement = document.createElement("p");
newElement.textContent = "Paragraf baru";
document.body.appendChild(newElement);
```

### Event Handling

```javascript
// Event Listener
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Tombol diklik!");
});

// Common Events
// click, dblclick, mouseover, mouseout, keydown, keyup, change, submit, load, etc.
```

## Latihan

### Latihan 1: Styling Halaman
Buat file `style.html` dan `style.css`:
- Styling heading dengan warna dan ukuran berbeda
- Styling paragraf dengan font dan line-height
- Membuat tombol dengan hover effect
- Styling list dengan custom bullets

### Latihan 2: Interaktif dengan JavaScript
Buat file `interaktif.html`:
- Tombol yang menampilkan alert
- Input yang menampilkan nilai di console
- Tombol yang mengubah warna background
- Counter yang bertambah saat tombol diklik

## Referensi
- https://www.petanikode.com/tutorial/css/
- https://www.petanikode.com/tutorial/javascript/
- https://github.com/bellshade/Javascript
- https://www.w3schools.com/css/
- https://www.w3schools.com/js/

## Checklist Pembelajaran
- [ ] Memahami CSS selector dan properties
- [ ] Bisa membuat styling dengan CSS
- [ ] Memahami variabel dan tipe data JavaScript
- [ ] Bisa menggunakan kondisional dan loop
- [ ] Memahami DOM manipulation
- [ ] Bisa menangani event dengan JavaScript
