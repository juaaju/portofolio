---
title: "Sarung Tangan Penerjemah Bahasa Isyarat"
image: "/images/projects/signgloves.png"
tags: ["Machine Learning", "IoT", "SVM", "Hardware"]
duration: "Des 2023 – Jan 2024"
location: "Institut Teknologi Sepuluh Nopember (ITS)"
award: "Juara 1"
featured: true
---

# Sarung Tangan Penerjemah Bahasa Isyarat menggunakan Algoritma SVM

🏆 **Pemenang Kompetisi - Juara 1**

Perangkat wearable inovatif yang menerjemahkan gerakan bahasa isyarat menjadi teks/suara menggunakan teknologi machine learning dan IoT.

## Ringkasan
Proyek pribadi yang dikembangkan untuk kompetisi, menggabungkan rekayasa perangkat keras dengan machine learning untuk menciptakan alat komunikasi yang lebih mudah diakses bagi komunitas Tuli dan hard-of-hearing. Produk akhirnya berupa prototipe fungsional, meskipun belum nyaman untuk dipakai.

## Cara Kerja
Sarung tangan menggunakan flex sensor untuk mendeteksi posisi jari dan gesture tangan, kemudian diproses oleh model SVM (Support Vector Machine) yang telah dilatih untuk mengenali dan menerjemahkan bahasa isyarat menjadi teks atau suara.

## Implementasi Teknis

### Desain Perangkat Keras
- **Flex Sensor**: Mengukur sudut tekukan jari untuk pengenalan gesture  
- **Mikrokontroler ESP32**: Memproses data sensor dan menangani komunikasi IoT  

### Machine Learning
- **Algoritma**: Support Vector Machine (SVM) menggunakan scikit-learn  
- **Pelatihan**: Dataset gerakan bahasa isyarat  
- **Akurasi**: Tingkat pengenalan tinggi untuk gesture yang dilatih  

### Integrasi IoT
- **REST API**: Menggunakan framework Flask sebagai layanan web  
- **Konektivitas**: Pengiriman data secara real-time melalui WiFi  
- **Pemrosesan Cloud**: Opsional untuk inferensi sisi server  

## Teknologi
- **Perangkat Keras**: ESP32, Flex Sensor, PCB Design dengan KiCAD
- **Library ML**: scikit-learn (SVM)  
- **Framework API**: Flask  
- **Pemrograman**: Python (ML & API), C++ (ESP32)  
- **Komunikasi**: REST API, WiFi  

## Pencapaian
🥇 Meraih **Juara 1** dalam kompetisi, diakui untuk inovasi pada teknologi asistif dan implementasi praktis ML pada perangkat edge.
