# Galactic Explorer Registry

**Galactic Explorer Registry** adalah aplikasi web yang dikembangkan menggunakan AdonisJS v6 dan PostgreSQL untuk mendaftarkan penjelajah galaksi. Aplikasi ini memungkinkan pengguna untuk mendaftar sebagai penjelajah dengan mengisi nama, planet asal, dan misi mereka, menyimpan data ke database, serta menampilkan daftar penjelajah yang telah terdaftar. Fitur tambahan seperti pesan flash untuk umpan balik pendaftaran sukses dan desain bertema luar angkasa dengan efek partikel menambah nilai kreativitas pada proyek ini.

## Fitur Utama
- **Form Pendaftaran Penjelajah**: Pengguna dapat mengisi nama, planet asal, dan misi melalui form yang responsif dan berdesain futuristik.
- **Penyimpanan Data**: Data penjelajah disimpan ke database PostgreSQL menggunakan AdonisJS Lucid ORM.
- **Daftar Penjelajah**: Menampilkan daftar semua penjelajah yang telah terdaftar dalam format tabel.
- **Flash Message**: Menampilkan pesan "Selamat! Anda terdaftar sebagai Penjelajah Galaksi!" setelah pendaftaran berhasil.
- **Desain Kreatif**: Tema luar angkasa dengan latar gradien, efek partikel bintang (Particles.js), dan aksen neon menggunakan TailwindCSS.

## Teknologi yang Digunakan
- **AdonisJS v6**: Framework backend Node.js untuk logika server, routing, dan ORM.
- **PostgreSQL**: Database relasional untuk menyimpan data penjelajah.
- **Edge.js**: Template engine untuk rendering halaman HTML dinamis.
- **TailwindCSS**: Framework CSS untuk styling responsif dan modern.
- **Particles.js**: Library JavaScript untuk efek partikel bintang di latar belakang.
- **TypeScript**: Bahasa pemrograman untuk kode yang lebih terstruktur dan aman.

## Struktur Proyek
Berikut adalah struktur folder utama proyek:

```
galactic-explorer/
├── app/
│   ├── controllers/
│   │   └── explorers_controller.ts
│   ├── middleware/
│   ├── models/
│   │   └── explorer.ts
│   └── validators/
├── bin/
├── config/
│   └── database.ts
├── database/
│   └── migrations/
│       └── <timestamp>_create_explorers_table.ts
├── node_modules/
├── resources/
│   └── views/
│       ├── explorers.edge
│       └── register.edge
├── start/
│   └── routes.ts
├── tests/
├── .editorconfig
├── .env
├── .env.example
├── .gitignore
├── adonisrc.ts
├── eslint.config.js
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```

**Penjelasan Struktur**:
- **`app/controllers/explorers_controller.ts`**: Mengelola logika untuk menampilkan form, menyimpan data, dan menampilkan daftar penjelajah.
- **`app/models/explorer.ts`**: Model untuk tabel `explorers` di database.
- **`database/migrations/`**: Berisi skema migrasi untuk tabel `explorers`.
- **`resources/views/`**: Berisi template Edge.js untuk halaman form (`register.edge`) dan daftar penjelajah (`explorers.edge`).
- **`start/routes.ts`**: Mendefinisikan rute aplikasi.
- **`.env`**: Konfigurasi lingkungan seperti koneksi database.
- **`adonisrc.ts`**: File konfigurasi utama AdonisJS v6.
- **`package.json`**: Dependensi proyek.

## Struktur Database
Tabel `explorers` di PostgreSQL memiliki struktur berikut:
- **Nama Tabel**: `explorers`
- **Kolom**:
  - `id`: Integer, primary key, auto-increment.
  - `name`: String, nama penjelajah (tidak boleh kosong).
  - `planet`: String, planet asal (tidak boleh kosong).
  - `mission`: String, misi penjelajah (tidak boleh kosong).
  - `created_at`: Timestamp, waktu pembuatan record.
  - `updated_at`: Timestamp, waktu pembaruan record.

## Prasyarat
Sebelum menjalankan proyek, pastikan Anda memiliki:
- **Node.js** (versi 18.x atau lebih baru) dan **NPM**.
- **PostgreSQL** (versi 12 atau lebih baru) terinstal dan berjalan.
- **Git** untuk mengunggah proyek ke GitHub.
- Sistem operasi Windows (atau sesuaikan perintah jika menggunakan OS lain).

## Cara Setup Proyek
1. **Clone Repositori (Jika Sudah Ada di GitHub)**:
   ```powershell
   git clone <url-repositori-anda>
   cd galactic-explorer
   ```
   Jika belum ada di GitHub, Anda bisa membuat proyek baru (lihat langkah-langkah sebelumnya).

2. **Instal Dependensi**:
   Karena ada konflik dependensi antara `@adonisjs/core@6.18.0` dan `@adonisjs/view@6.2.0`, gunakan `--legacy-peer-deps`:
   ```powershell
   npm install --legacy-peer-deps
   ```

3. **Konfigurasi Lingkungan**:
   - Salin `.env.example` ke `.env`:
     ```powershell
     Copy-Item -Path .env.example -Destination .env
     ```
   - Edit `.env` dengan kredensial PostgreSQL Anda:
     ```env
     TZ=Asia/Jakarta
     PORT=3333
     HOST=localhost
     LOG_LEVEL=info
     APP_KEY=Gz1gsAFWDJz-2DmiYEYgD3a8AWujHmw6
     NODE_ENV=development
     DB_CONNECTION=pg
     DB_HOST=127.0.0.1
     DB_PORT=5432
     DB_USER=postgres
     DB_PASSWORD=your_postgres_password
     DB_DATABASE=galactic_explorer
     ```
     Ganti `your_postgres_password` dengan kata sandi PostgreSQL Anda.

4. **Buat Database**:
   - Buka terminal PostgreSQL:
     ```powershell
     psql -U postgres
     ```
   - Buat database:
     ```
     CREATE DATABASE galactic_explorer;
     \q
     ```

5. **Jalankan Migrasi**:
   ```powershell
   node ace migration:run
   ```
   Ini akan membuat tabel `explorers` di database.

## Cara Menjalankan Proyek
1. **Jalankan Server dalam Mode Pengembangan**:
   ```powershell
   npm run dev
   ```
   - Server akan berjalan di `http://localhost:3333`.

2. **Uji Aplikasi**:
   - Buka `http://localhost:3333/register` di browser untuk melihat form pendaftaran.
   - Isi data (nama, planet, misi), lalu submit. Anda akan melihat flash message "Selamat! Anda terdaftar sebagai Penjelajah Galaksi!".
   - Buka `http://localhost:3333/explorers` untuk melihat daftar penjelajah.

## Cara Mengunggah ke GitHub
1. **Inisialisasi Git**:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Galactic Explorer Registry"
   ```

2. **Buat Repositori di GitHub**:
   - Buka GitHub, buat repositori baru bernama `galactic-explorer-registry` (atau nama lain).

3. **Push ke GitHub**:
   ```powershell
   git remote add origin <url-repositori-anda>
   git push -u origin main
   ```

## Troubleshooting
- **Error Konflik Dependensi**:
  - Jika `npm install` gagal, gunakan `--legacy-peer-deps`:
    ```powershell
    npm install --legacy-peer-deps
    ```
- **Error `node ace`**:
  - Pastikan semua dependensi terinstal dan file `adonisrc.ts` ada.
- **Server Tidak Berjalan**:
  - Periksa apakah port 3333 sudah digunakan:
    ```powershell
    netstat -aon | findstr :3333
    ```
  - Jika digunakan, ubah `PORT` di `.env` ke port lain (misalnya, 3000).
- **Database Tidak Terkoneksi**:
  - Pastikan PostgreSQL berjalan dan kredensial di `.env` benar.

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini:
1. Fork repositori ini.
2. Buat branch baru: `git checkout -b fitur-baru`.
3. Commit perubahan: `git commit -m "Menambahkan fitur baru"`.
4. Push ke branch: `git push origin fitur-baru`.
5. Buat pull request di GitHub.

## Lisensi
Proyek ini tidak memiliki lisensi resmi (UNLICENSED).

## Pengembang
Dibuat sebagai bagian dari tugas kuliah Semester 6, mata kuliah PPL.

