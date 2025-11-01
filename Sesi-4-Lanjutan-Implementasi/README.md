# Sesi 4: Lanjutan Implementasi HTML, CSS, JS

## Tujuan Pembelajaran
- Membuat proyek yang lebih kompleks
- Menerapkan best practices
- Optimasi dan performance

## Konsep Lanjutan

### 1. Local Storage
Menyimpan data di browser tanpa server.

```javascript
// Menyimpan data
localStorage.setItem("key", JSON.stringify(data));

// Mengambil data
let data = JSON.parse(localStorage.getItem("key"));

// Menghapus data
localStorage.removeItem("key");

// Menghapus semua
localStorage.clear();
```

### 2. Async & Await
Menangani operasi asynchronous.

```javascript
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
```

### 3. Fetch API
Mengambil data dari server.

```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

### 4. Error Handling
Menangani error dengan baik.

```javascript
try {
    // Kode yang mungkin error
    let result = riskyOperation();
} catch (error) {
    console.error("Error terjadi:", error.message);
} finally {
    console.log("Selesai");
}
```

### 5. Regular Expression
Pattern matching untuk string.

```javascript
let pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
let email = "user@example.com";
let isValid = pattern.test(email);

// Atau gunakan match
let matches = "hello world".match(/\w+/g);
```

### 6. Destructuring
Mengekstrak nilai dari object atau array.

```javascript
// Object destructuring
let { name, age } = { name: "Budi", age: 25 };

// Array destructuring
let [first, second] = [1, 2, 3];

// Function parameter
function greet({ name, age }) {
    console.log(`Halo ${name}, umur ${age}`);
}
```

### 7. Spread Operator
Menyebarkan elemen.

```javascript
// Array spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

// Object spread
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
```

### 8. Template Literals
String dengan interpolasi.

```javascript
let name = "Budi";
let age = 25;
let message = `Halo, nama saya ${name} dan umur saya ${age} tahun`;
```

## Proyek: Weather App

### Fitur:
1. Input kota
2. Fetch data cuaca dari API
3. Tampilkan informasi cuaca
4. Simpan kota favorit di localStorage
5. Responsive design

### API yang digunakan:
- OpenWeatherMap API (gratis)

## Best Practices

### 1. Code Organization
```javascript
// Pisahkan concerns
const API = {
    getWeather: async (city) => { /* ... */ }
};

const UI = {
    render: (data) => { /* ... */ }
};

const Storage = {
    save: (key, data) => { /* ... */ },
    get: (key) => { /* ... */ }
};
```

### 2. Error Handling
```javascript
function handleError(error) {
    console.error("Error:", error);
    showErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
}
```

### 3. Validation
```javascript
function validateEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validateInput(input) {
    if (!input || input.trim() === "") {
        return false;
    }
    return true;
}
```

### 4. Performance
```javascript
// Debouncing - mengurangi pemanggilan function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Throttling - membatasi pemanggilan function
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

## Latihan

### Latihan 1: Enhanced Todo List
Tambahkan fitur:
- Simpan ke localStorage
- Edit todo
- Filter (All, Active, Completed)
- Due date untuk setiap todo

### Latihan 2: Notes App
Buat aplikasi notes dengan:
- Tambah, edit, hapus note
- Simpan ke localStorage
- Search functionality
- Kategori untuk notes

### Latihan 3: Expense Tracker
Buat aplikasi pencatat pengeluaran dengan:
- Tambah pengeluaran
- Kategori pengeluaran
- Total pengeluaran
- Grafik pengeluaran
- Simpan ke localStorage

## Referensi
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://openweathermap.org/api

## Checklist Pembelajaran
- [ ] Memahami localStorage
- [ ] Bisa menggunakan Fetch API
- [ ] Bisa menangani error dengan baik
- [ ] Bisa membuat proyek yang lebih kompleks
- [ ] Bisa mengoptasi performance
- [ ] Bisa melakukan validasi input
