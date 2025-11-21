---
title: "Sistem Estimasi Posisi Traktor Berbasis GPS dan EKF"
date: "2024-12"
tags: ["GPS", "Extended Kalman Filter", "Autonomous Vehicle", "Jetson", "Python"]
image: "/images/projects/TA.png"
---

**Periode:** Desember 2024 – Juni 2025  
**Proyek Tugas Akhir** dalam topik **autonomous tractor research**.

Sistem penentuan posisi traktor dengan biaya rendah menggunakan **GPS u-blox NEO-6M**, dan peningkatan akurasi menggunakan **Extended Kalman Filter (EKF)** melalui pemodelan kinematika dan pembobotan sensor menggunakan **Kalman Gain**.

### Hasil Validasi
- Dibandingkan dengan data **RTK GPS** untuk mengukur error posisi.
- Koreksi bias menurunkan **RMSE** menjadi **1.044 m**.
- EKF meningkatkan akurasi lebih lanjut menjadi **0.610 m**.

### Teknologi
- **Hardware:** Jetson Xavier NX, GPS u-blox NEO-6M, RTK Quectel LC29H DA, Desain PCB untuk Power Supply
- **OS:** Linux  
- **Bahasa:** Python

### Dokumentasi
https://its.id/m/ta-mwahbahazzuhaili
