---

title: "Automated Invoice Record to Spreadsheet via WhatsApp"
image: "/images/projects/invoice- (1).png"
images: [
    "/images/projects/invoice- (1).png",
    "/images/projects/invoice- (2).png",
    "/images/projects/invoice- (3).png",
    "/images/projects/invoice- (4).png",
    "/images/projects/invoice- (5).png"
]
tags: ["Web Development", "Automation", "AI", "LLM", "WhatsApp Bot"]
duration: "Sept 2025"
location: "Surabaya"
github: "[https://github.com/juaaju/invoice-system](https://github.com/juaaju/invoice-system)"
featured: true
---

# Automated Invoice Record to Spreadsheet via WhatsApp

Solusi otomatisasi pencatatan invoice melalui WhatsApp yang dikembangkan dalam Hackathon **Hackative8**, memungkinkan pengguna mengirim invoice via chat dan sistem akan mengekstrak, menyimpan, serta mengunggah datanya secara otomatis ke spreadsheet.

## Kontribusi Saya

* Mendesain dan mengembangkan aplikasi secara **end-to-end**
* Membangun backend dan integrasi API
* Membuat frontend berbasis Next.js
* Implementasi automasi WhatsApp menggunakan Bot Baileys

## Ringkasan

Aplikasi ini dirancang untuk mengotomatisasi proses pencatatan invoice melalui WhatsApp dengan pemrosesan dokumen otomatis, penyimpanan ke database, dan sinkronisasi langsung ke Google Spreadsheet serta Google Drive. Sistem ini memanfaatkan integrasi API eksternal dan model bahasa besar untuk meningkatkan akurasi pembacaan dan pengelompokan data.

## Fitur Utama

### 1. Pencatatan Invoice Otomatis melalui WhatsApp

* Menggunakan Bot Baileys API untuk menerima pesan WhatsApp
* Sistem mendeteksi, mengekstrak, dan menyimpan data invoice secara otomatis
* Sinkronisasi ke Google Spreadsheet secara real-time melalui SPS Google API

### 2. Integrasi Google Drive

* Penyimpanan file invoice mentah ke Google Drive
* Penamaan otomatis dan pengelompokan berdasarkan tanggal/pengirim

### 3. Login Aman dengan Google Authentication

* Implementasi **OAuth 2.0 Google Login**
* Akses dashboard hanya untuk pengguna terotorisasi

### 4. Dashboard Web

* Dibangun menggunakan **Next.js**
* Tampilan responsif dan mudah digunakan
* Monitoring status invoice, file, dan riwayat sinkronisasi

### 5. Integrasi LLM

* Menggunakan LLM untuk mengekstrak pola teks invoice
* Membantu pembacaan field seperti tanggal, nominal, ID invoice, dan pengirim

## Teknologi

* **Frontend**: Next.js
* **Backend**: Node.js, Postgres, Express.js
* **Database**: PostgreSQL
* **API Integrasi**: Baileys WhatsApp API, Google Drive API, Google Spreadsheet API
* **LLM**: Model LLM terintegrasi untuk ekstraksi teks

## Arsitektur

Aplikasi menggunakan arsitektur modular: WhatsApp bot, backend API, LLM processor, dan dashboard frontend. Setiap modul dapat diskalakan secara terpisah, memudahkan maintenance dan peningkatan fitur.

### Dokumentasi

[https://github.com/juaaju/invoice-system](https://github.com/juaaju/invoice-system)
