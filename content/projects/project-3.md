---
title: "Digital Anthropometry untuk Bayi"
image: "/images/projects/antropo.png"
tags: ["Computer Vision", "Jetson Nano", "Medical Tech"]
duration: "Jan – Agu 2024"
location: "Institut Teknologi Sepuluh Nopember (ITS)"
github: "https://github.com/juaaju/antropo-digital-app"
youtube: "https://www.youtube.com/watch?v=jzpML7ADPH4"
---

# Digital Anthropometry

Sistem pengukuran tubuh bayi tanpa kontak menggunakan pemrosesan citra dan AI untuk menghasilkan pengukuran antropometri yang akurat di fasilitas kesehatan.

## Ringkasan
Mengembangkan alat inovatif untuk mengukur dimensi tubuh bayi menggunakan computer vision, menghilangkan kebutuhan akan kontak fisik, dan mengurangi potensi kesalahan pengukuran dalam aplikasi medis.

## Implementasi Teknologi

### Pemrosesan Citra
- **MediaPipe Pose**: Deteksi rangka tubuh (skeleton) untuk identifikasi titik-titik tubuh  
- **Segment Anything Model (SAM)**: Model segmentasi dari Meta untuk isolasi bagian tubuh secara presisi  
- **Kalibrasi Kamera**: Menjamin akurasi dalam pengukuran jarak dan ukuran  

### Kemampuan Pengukuran
Sistem dapat mengukur secara akurat:
- Lingkar kepala  
- Lingkar lengan  
- Lingkar kaki  
- Lingkar dada  
- Lingkar perut  
- Panjang tubuh bayi  

### Kontribusi Saya
- Konversi piksel ke cm untuk pengukuran lingkar  
- Penyesuaian GUI menggunakan Flet  
- Integrasi database Excel  

## Tumpukan Perangkat Lunak
- **Bahasa Pemrograman**: Python  
- **Framework GUI**: Flet untuk antarmuka desktop yang intuitif  
- **Library AI**: MediaPipe, SAM (Segment Anything Model)  
- **Sistem Operasi**: Linux (Jetson Nano)  

## Manfaat
- Pengukuran tanpa kontak (lebih higienis dan ramah bayi)  
- Cepat dan akurat  
- Mengurangi kesalahan pengukuran manual  
- Mudah digunakan oleh tenaga medis  
- Solusi komputasi edge yang portabel  
