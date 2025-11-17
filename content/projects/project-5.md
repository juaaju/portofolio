---
title: "Sign Language Translator Glove"
image: "/images/projects/signgloves.png"
tags: ["Machine Learning", "IoT", "SVM", "Hardware"]
duration: "Dec 2023 – Jan 2024"
location: "Institut Teknologi Sepuluh Nopember (ITS)"
award: "1st Place Winner"
featured: true
---

# Sign Language Translator using SVM Algorithm

🏆 **Competition Winner - 1st Place**

An innovative wearable device that translates sign language gestures into text/speech using machine learning and IoT technology.

## Overview
A personal project developed for competition, combining hardware engineering with machine learning to create an accessible communication tool for the deaf and hard-of-hearing community. The final product just a functional prototype but not easy to wear.

## How It Works
The glove uses flex sensors to detect finger positions and hand gestures, which are then processed by a trained SVM (Support Vector Machine) model to recognize and translate sign language into readable text or speech output.

## Technical Implementation

### Hardware Design
- **Flex Sensors**: Measure finger bend angles for gesture recognition
- **ESP32 Microcontroller**: Processes sensor data and handles IoT communication

### Machine Learning
- **Algorithm**: Support Vector Machine (SVM) from scikit-learn
- **Training**: Dataset of sign language gestures
- **Accuracy**: High recognition rate for trained gestures

### IoT Integration
- **REST API**: Flask framework for web service
- **Connectivity**: Real-time data transmission via WiFi
- **Cloud Processing**: Optional server-side inference

## Tech Stack
- **Hardware**: ESP32, Flex Sensors
- **ML Library**: scikit-learn (SVM)
- **API Framework**: Flask
- **Programming**: Python (ML & API), C++ (ESP32)
- **Communication**: REST API, WiFi

## Achievement
🥇 Won **1st Place** in competition, recognized for innovation in assistive technology and practical implementation of ML on edge devices.