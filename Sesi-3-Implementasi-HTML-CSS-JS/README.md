# Sesi 3: Implementasi HTML, CSS, JS

## Tujuan Pembelajaran
- Mengintegrasikan HTML, CSS, dan JavaScript
- Membuat proyek web sederhana yang interaktif
- Menerapkan best practices

## Proyek: Todo List Sederhana

### Fitur yang akan dibuat:
1. Input untuk menambah todo
2. Tombol untuk menambah item
3. List todo dengan opsi hapus
4. Styling yang menarik

### Struktur File
```
Sesi-3/
├── index.html
├── style.css
└── script.js
```

## Konsep Penting

### 1. Pemisahan Concerns
- HTML: Struktur
- CSS: Styling
- JavaScript: Logika

### 2. Event Handling
```javascript
element.addEventListener("event", function() {
    // Kode yang dijalankan
});
```

### 3. DOM Manipulation
```javascript
// Membuat elemen
let newElement = document.createElement("tag");

// Menambahkan ke DOM
parent.appendChild(newElement);

// Menghapus dari DOM
element.remove();
```

### 4. Array Methods
```javascript
// Push - menambah item
array.push(item);

// Filter - menyaring item
let filtered = array.filter(item => item.completed);

// Map - mengubah item
let mapped = array.map(item => item.name);

// Find - mencari item
let found = array.find(item => item.id === 1);
```

## Latihan Praktis

### Latihan 1: Todo List
Buat aplikasi todo list dengan:
- Input untuk menambah todo
- Tombol Add
- List todo yang bisa dihapus
- Counter jumlah todo

### Latihan 2: Kalkulator Sederhana
Buat kalkulator dengan:
- Input untuk angka
- Tombol operasi (+, -, *, /)
- Tombol sama dengan
- Display hasil

### Latihan 3: Quiz Interaktif
Buat quiz dengan:
- Pertanyaan multiple choice
- Tombol next
- Scoring
- Hasil akhir

## Tips Implementasi

1. **Mulai dari HTML**
   - Buat struktur dasar terlebih dahulu
   - Gunakan semantic HTML

2. **Styling dengan CSS**
   - Gunakan class untuk styling
   - Buat responsive design

3. **Logika dengan JavaScript**
   - Pisahkan fungsi-fungsi
   - Gunakan event listener
   - Test setiap fungsi

4. **Testing**
   - Test di berbagai browser
   - Test dengan berbagai input
   - Gunakan console untuk debugging

## Debugging Tips

```javascript
// Console logging
console.log("Nilai:", variable);
console.error("Error:", error);
console.table(array);

// Breakpoint
debugger;

// Try-catch
try {
    // Kode yang mungkin error
} catch (error) {
    console.error("Error:", error);
}
```

## Referensi
- https://developer.mozilla.org/en-US/docs/Web/API/Document
- https://www.w3schools.com/jsref/

## Checklist Pembelajaran
- [ ] Bisa membuat struktur HTML yang baik
- [ ] Bisa styling dengan CSS eksternal
- [ ] Bisa menggunakan JavaScript untuk interaktivitas
- [ ] Bisa membuat proyek sederhana yang terintegrasi
- [ ] Bisa melakukan debugging
