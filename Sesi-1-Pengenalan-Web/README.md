# Sesi 1: Pengenalan Pemrograman Berbasis Web

## Tujuan Pembelajaran
- Memahami konsep dasar web development
- Mengenal struktur HTML
- Memahami tag-tag HTML dasar

## Konsep Dasar Web Development

### Apa itu Web?
Web adalah sistem informasi global yang terhubung melalui internet. Setiap halaman web terdiri dari:
1. **HTML** - Struktur konten
2. **CSS** - Styling/tampilan
3. **JavaScript** - Interaktivitas

### Client-Server Architecture
```
User (Client) <---> Server
     Browser         Database
```

## HTML Basics

### Struktur Dasar HTML
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
</head>
<body>
    <h1>Selamat Datang</h1>
    <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>
```

### Tag-Tag Dasar HTML

#### Heading
```html
<h1>Heading 1 (Paling Besar)</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 (Paling Kecil)</h6>
```

#### Paragraf dan Text
```html
<p>Ini adalah paragraf</p>
<strong>Teks tebal</strong>
<em>Teks miring</em>
<u>Teks bergaris bawah</u>
<small>Teks kecil</small>
<mark>Teks highlight</mark>
```

#### List
```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>Pertama</li>
    <li>Kedua</li>
    <li>Ketiga</li>
</ol>
```

#### Link dan Image
```html
<a href="https://example.com">Klik di sini</a>
<img src="gambar.jpg" alt="Deskripsi gambar">
```

#### Form
```html
<form>
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <label for="pesan">Pesan:</label>
    <textarea id="pesan" name="pesan"></textarea>
    
    <button type="submit">Kirim</button>
</form>
```

#### Semantic HTML
```html
<header>Header halaman</header>
<nav>Navigasi</nav>
<main>Konten utama</main>
<article>Artikel</article>
<section>Bagian</section>
<aside>Sidebar</aside>
<footer>Footer halaman</footer>
```

## Latihan

### Latihan 1: Membuat Halaman Profil Sederhana
Buat file `profil.html` dengan konten:
- Heading dengan nama Anda
- Paragraf tentang diri Anda
- List hobi atau keahlian
- Link ke media sosial
- Foto profil

### Latihan 2: Membuat Halaman Blog Sederhana
Buat file `blog.html` dengan:
- Header dengan judul blog
- Navigasi (Home, About, Contact)
- 3 artikel dengan heading, paragraf, dan tanggal
- Footer

## Referensi
- https://www.petanikode.com/tutorial/html/
- https://www.w3schools.com/html/
- https://developer.mozilla.org/en-US/docs/Web/HTML

## Checklist Pembelajaran
- [ ] Memahami struktur HTML dasar
- [ ] Mengenal tag-tag HTML umum
- [ ] Membuat halaman HTML sederhana
- [ ] Memahami semantic HTML
