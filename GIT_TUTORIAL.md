# 📖 Tutorial Git untuk Pemrograman Web

Panduan lengkap menggunakan Git untuk version control dalam proyek pemrograman web.

---

## 📋 Daftar Isi

1. [Pengenalan Git](#pengenalan-git)
2. [Instalasi Git](#instalasi-git)
3. [Konfigurasi Awal](#konfigurasi-awal)
4. [Perintah Dasar](#perintah-dasar)
5. [Workflow Git](#workflow-git)
6. [Branch Management](#branch-management)
7. [Merge dan Conflict](#merge-dan-conflict)
8. [Remote Repository](#remote-repository)
9. [Tips dan Trik](#tips-dan-trik)

---

## 🎯 Pengenalan Git

**Git** adalah sistem version control terdistribusi yang memungkinkan Anda untuk:
- Melacak perubahan kode
- Berkolaborasi dengan tim
- Kembali ke versi sebelumnya
- Mengelola branch untuk fitur berbeda

### Mengapa Git Penting?
- ✅ Menyimpan history lengkap perubahan
- ✅ Memudahkan kolaborasi tim
- ✅ Mencegah kehilangan kode
- ✅ Memungkinkan eksperimen dengan branch

---

## 💻 Instalasi Git

### Windows
1. Download dari https://git-scm.com/download/win
2. Jalankan installer dan ikuti langkah-langkahnya
3. Pilih "Use Git from the Windows Command Prompt"

### macOS
```bash
# Menggunakan Homebrew
brew install git

# Atau download dari https://git-scm.com/download/mac
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo yum install git
```

### Verifikasi Instalasi
```bash
git --version
```

---

## ⚙️ Konfigurasi Awal

Sebelum menggunakan Git, atur identitas Anda:

### 1. Konfigurasi Global (untuk semua proyek)
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"
```

### 2. Konfigurasi Lokal (untuk proyek tertentu)
```bash
cd /path/to/project
git config user.name "Nama Anda"
git config user.email "email@example.com"
```

### 3. Verifikasi Konfigurasi
```bash
git config --list
```

### 4. Konfigurasi Editor Default
```bash
git config --global core.editor "nano"  # atau vim, code, dll
```

---

## 🔧 Perintah Dasar Git

### 1. Inisialisasi Repository
```bash
# Membuat repository baru
git init

# Atau clone dari remote
git clone https://github.com/username/repo.git
```

### 2. Melihat Status
```bash
# Melihat status file yang berubah
git status

# Melihat status dengan format singkat
git status -s
```

### 3. Menambahkan File ke Staging Area
```bash
# Menambahkan file tertentu
git add filename.js

# Menambahkan semua file
git add .

# Menambahkan file dengan pattern
git add *.js
```

### 4. Membuat Commit
```bash
# Commit dengan pesan
git commit -m "Pesan commit"

# Commit dengan deskripsi panjang
git commit -m "Judul commit" -m "Deskripsi detail tentang perubahan"

# Commit dengan menambahkan file secara otomatis (untuk file yang sudah tracked)
git commit -am "Pesan commit"
```

### 5. Melihat History Commit
```bash
# Melihat log commit
git log

# Melihat log dengan format singkat
git log --oneline

# Melihat log dengan grafik branch
git log --graph --oneline --all

# Melihat log dengan detail lengkap
git log -p

# Melihat commit tertentu
git show commit-hash
```

### 6. Melihat Perubahan
```bash
# Melihat perubahan yang belum di-stage
git diff

# Melihat perubahan yang sudah di-stage
git diff --staged

# Melihat perubahan antara dua commit
git diff commit1 commit2
```

---

## 🔄 Workflow Git

### Workflow Standar

```
1. Modifikasi file
   ↓
2. git add (staging)
   ↓
3. git commit (simpan ke repository)
   ↓
4. git push (upload ke remote)
```

### Contoh Praktis

```bash
# 1. Membuat atau memodifikasi file
echo "console.log('Hello');" > app.js

# 2. Melihat status
git status

# 3. Menambahkan ke staging
git add app.js

# 4. Membuat commit
git commit -m "Menambahkan file app.js"

# 5. Melihat log
git log --oneline
```

---

## 🌿 Branch Management

### Apa itu Branch?
Branch adalah cabang dari kode utama yang memungkinkan Anda bekerja pada fitur berbeda tanpa mengganggu kode utama.

### Perintah Branch

#### 1. Membuat Branch Baru
```bash
# Membuat branch baru
git branch nama-branch

# Membuat dan langsung pindah ke branch
git checkout -b nama-branch

# Atau dengan Git 2.23+
git switch -c nama-branch
```

#### 2. Melihat Branch
```bash
# Melihat branch lokal
git branch

# Melihat semua branch (lokal dan remote)
git branch -a

# Melihat branch dengan informasi terakhir commit
git branch -v
```

#### 3. Pindah ke Branch
```bash
# Pindah ke branch yang ada
git checkout nama-branch

# Atau dengan Git 2.23+
git switch nama-branch
```

#### 4. Menghapus Branch
```bash
# Menghapus branch lokal
git branch -d nama-branch

# Menghapus branch lokal secara paksa
git branch -D nama-branch

# Menghapus branch remote
git push origin --delete nama-branch
```

#### 5. Rename Branch
```bash
# Rename branch lokal
git branch -m nama-lama nama-baru

# Rename branch saat ini
git branch -m nama-baru
```

### Contoh Workflow dengan Branch

```bash
# 1. Membuat branch untuk fitur baru
git checkout -b feature/login

# 2. Membuat perubahan
echo "login code" > login.js
git add login.js
git commit -m "Menambahkan fitur login"

# 3. Pindah kembali ke main
git checkout main

# 4. Merge branch
git merge feature/login

# 5. Hapus branch
git branch -d feature/login
```

---

## 🔗 Merge dan Conflict

### Merge Branch

#### 1. Fast-Forward Merge
```bash
# Merge ketika branch target adalah ancestor dari branch saat ini
git checkout main
git merge feature/login
```

#### 2. Three-Way Merge
```bash
# Merge ketika kedua branch memiliki commit yang berbeda
git checkout main
git merge feature/login
```

### Menangani Merge Conflict

Conflict terjadi ketika Git tidak bisa secara otomatis menggabungkan perubahan.

#### Contoh Conflict
```
<<<<<<< HEAD
console.log("Version 1");
=======
console.log("Version 2");
>>>>>>> feature/login
```

#### Cara Menyelesaikan Conflict

```bash
# 1. Lihat file yang conflict
git status

# 2. Edit file dan pilih versi yang benar
# Hapus marker conflict: <<<<<<, ======, >>>>>>

# 3. Tambahkan file yang sudah diperbaiki
git add filename.js

# 4. Selesaikan merge
git commit -m "Merge feature/login dengan conflict resolution"
```

#### Membatalkan Merge
```bash
# Jika ingin membatalkan merge
git merge --abort
```

---

## 🌐 Remote Repository

### Apa itu Remote?
Remote adalah repository yang disimpan di server (seperti GitHub, GitLab, Bitbucket).

### Perintah Remote

#### 1. Melihat Remote
```bash
# Melihat remote yang terdaftar
git remote

# Melihat remote dengan URL
git remote -v
```

#### 2. Menambahkan Remote
```bash
# Menambahkan remote baru
git remote add origin https://github.com/username/repo.git

# Menambahkan remote dengan nama berbeda
git remote add upstream https://github.com/original/repo.git
```

#### 3. Mengubah Remote URL
```bash
git remote set-url origin https://github.com/username/new-repo.git
```

#### 4. Menghapus Remote
```bash
git remote remove origin
```

### Push dan Pull

#### 1. Push (Upload ke Remote)
```bash
# Push branch saat ini
git push origin main

# Push semua branch
git push origin --all

# Push dengan tracking
git push -u origin main

# Push branch tertentu
git push origin feature/login
```

#### 2. Pull (Download dari Remote)
```bash
# Pull dari remote
git pull origin main

# Pull dengan rebase
git pull --rebase origin main
```

#### 3. Fetch (Mengambil tanpa merge)
```bash
# Fetch dari remote
git fetch origin

# Fetch dari semua remote
git fetch --all
```

---

## 📚 Workflow Kolaborasi Tim

### Workflow untuk Proyek Web Programming UT

```bash
# 1. Clone repository
git clone https://github.com/armandowni/pemrograman-web.git
cd pemrograman-web

# 2. Buat branch untuk fitur/perbaikan
git checkout -b feature/sesi5-directives

# 3. Buat perubahan
# Edit file, tambahkan kode, dll

# 4. Commit perubahan
git add .
git commit -m "Menambahkan tutorial directives untuk Sesi 5"

# 5. Push ke remote
git push origin feature/sesi5-directives

# 6. Buat Pull Request di GitHub
# (Melalui web interface GitHub)

# 7. Setelah PR di-merge, update main lokal
git checkout main
git pull origin main

# 8. Hapus branch lokal
git branch -d feature/sesi5-directives
```

---

## 💡 Tips dan Trik

### 1. Undo Perubahan

```bash
# Undo perubahan file yang belum di-stage
git checkout -- filename.js

# Undo perubahan file yang sudah di-stage
git reset HEAD filename.js

# Undo commit terakhir (tetap simpan perubahan)
git reset --soft HEAD~1

# Undo commit terakhir (hapus perubahan)
git reset --hard HEAD~1

# Undo commit di tengah history
git revert commit-hash
```

### 2. Stash (Simpan Perubahan Sementara)

```bash
# Simpan perubahan sementara
git stash

# Melihat daftar stash
git stash list

# Mengembalikan stash terakhir
git stash pop

# Mengembalikan stash tertentu
git stash apply stash@{0}

# Menghapus stash
git stash drop
```

### 3. Rebase (Mengubah History)

```bash
# Rebase branch saat ini ke main
git rebase main

# Interactive rebase untuk mengubah commit
git rebase -i HEAD~3
```

### 4. Cherry-pick (Mengambil Commit Tertentu)

```bash
# Mengambil commit dari branch lain
git cherry-pick commit-hash
```

### 5. Tag (Menandai Versi)

```bash
# Membuat tag
git tag v1.0.0

# Membuat tag dengan pesan
git tag -a v1.0.0 -m "Version 1.0.0"

# Melihat tag
git tag

# Push tag ke remote
git push origin v1.0.0

# Push semua tag
git push origin --tags
```

### 6. Alias (Shortcut Command)

```bash
# Membuat alias
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'

# Menggunakan alias
git st      # sama dengan git status
git co main # sama dengan git checkout main
```

---

## 🚀 Contoh Workflow Lengkap untuk Proyek Web Programming UT

### Scenario: Menambahkan Tutorial Sesi 5

```bash
# 1. Clone repository
git clone https://github.com/armandowni/pemrograman-web.git
cd pemrograman-web

# 2. Update main branch
git pull origin main

# 3. Buat branch baru untuk fitur
git checkout -b feature/sesi5-tutorial

# 4. Buat atau edit file
# Misalnya: menambahkan file sesi5/directives.md

# 5. Lihat perubahan
git status
git diff

# 6. Tambahkan file ke staging
git add sesi5/directives.md

# 7. Commit perubahan
git commit -m "Menambahkan tutorial directives untuk Sesi 5

- Menjelaskan v-if, v-else, v-show
- Menambahkan contoh kode
- Menambahkan latihan praktis"

# 8. Push ke remote
git push origin feature/sesi5-tutorial

# 9. Buat Pull Request di GitHub
# (Buka https://github.com/armandowni/pemrograman-web/pulls)
# - Klik "New Pull Request"
# - Pilih branch feature/sesi5-tutorial
# - Tulis deskripsi PR
# - Klik "Create Pull Request"

# 10. Setelah PR di-merge oleh maintainer
# Update main lokal
git checkout main
git pull origin main

# 11. Hapus branch lokal
git branch -d feature/sesi5-tutorial

# 12. Hapus branch remote (optional, biasanya auto-delete)
git push origin --delete feature/sesi5-tutorial
```

---

## 📝 Commit Message Best Practices

### Format Commit Message yang Baik

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
- `feat`: Fitur baru
- `fix`: Perbaikan bug
- `docs`: Perubahan dokumentasi
- `style`: Perubahan style (formatting, semicolon, dll)
- `refactor`: Refactoring kode
- `perf`: Peningkatan performa
- `test`: Menambahkan test
- `chore`: Perubahan build, dependencies, dll

### Contoh

```bash
# Baik
git commit -m "feat(auth): Menambahkan fitur login dengan JWT"

# Kurang baik
git commit -m "update"

# Baik dengan deskripsi panjang
git commit -m "fix(form): Memperbaiki validasi email

- Menambahkan regex untuk validasi email
- Menampilkan error message yang lebih jelas
- Menambahkan unit test untuk validasi"
```

---

## 🔍 Debugging dengan Git

### 1. Menemukan Commit yang Menyebabkan Bug

```bash
# Binary search untuk menemukan commit yang bermasalah
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
# Git akan checkout commit di tengah-tengah
# Test apakah bug ada atau tidak
git bisect good  # atau git bisect bad
# Ulangi sampai menemukan commit yang bermasalah
git bisect reset
```

### 2. Melihat Siapa yang Mengubah Baris Tertentu

```bash
# Melihat history baris tertentu
git blame filename.js

# Melihat history dengan detail
git blame -L 10,20 filename.js
```

### 3. Melihat Kapan File Dihapus

```bash
# Melihat history file yang sudah dihapus
git log --full-history -- filename.js

# Restore file yang dihapus
git checkout commit-hash -- filename.js
```

---

## ⚠️ Peringatan Penting

### Jangan Lakukan Ini!

```bash
# ❌ Jangan: Force push ke main branch
git push --force origin main

# ❌ Jangan: Commit file yang sensitif (password, API key)
# Gunakan .gitignore untuk file sensitif

# ❌ Jangan: Commit file yang terlalu besar
# Gunakan Git LFS untuk file besar

# ❌ Jangan: Mengubah history yang sudah di-push
git rebase -i HEAD~5  # Hanya untuk commit lokal!
```

### .gitignore

```bash
# Buat file .gitignore untuk mengabaikan file tertentu
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore

git add .gitignore
git commit -m "Menambahkan .gitignore"
```

---

## 📚 Referensi Tambahan

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

## 🎓 Kesimpulan

Git adalah tool yang sangat penting dalam development modern. Dengan menguasai Git, Anda dapat:
- ✅ Mengelola kode dengan lebih baik
- ✅ Berkolaborasi dengan tim secara efisien
- ✅ Melacak perubahan dan history kode
- ✅ Menghindari kehilangan kode
- ✅ Membuat project lebih profesional

Praktik terus menggunakan Git dalam setiap project untuk menjadi mahir!

---

**Happy Coding! 🚀**
