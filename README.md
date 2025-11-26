# 🧠 Educational Quiz App

A fully functional, educational quiz application built with **React Native** and **Expo**. This app provides a dynamic, question-by-question quiz experience with immediate feedback and a final results summary.

This project is a great demonstration of state management, user interaction, UI feedback, and native animation techniques in a mobile environment.

---

## 🧭 Table of Contents

* [Overview](#-overview)
* [Screenshots](#-screenshots)
* [Features](#-features)
* [Technologies Used](#-technologies-used)
* [Installation](#-installation)
* [Running the Project](#-running-the-project)
* [Author](#-author)

---

## 📝 Overview

The **Educational Quiz App** is designed to test users on general knowledge through a clean, intuitive, and interactive mobile interface. The questions are currently in Albanian, focusing on technology and science topics.

This project highlights key mobile development techniques:

* **Native Animation:** Uses the **`Animated`** API to create a smooth, visually engaging progress bar.
* **State Management:** Manages the current question index, score, selected answer, and answering status (`isAnswering`).
* **Dynamic UI Feedback:** Changes button colors instantly to green (correct) or red (incorrect) upon selection.
* **Conditional Rendering:** Seamlessly transitions from the quiz flow to a dedicated **Results Screen** upon completion.

---

## 🖼️ Screenshots

| Quiz Screen | Correct Answer Feedback | Results Screen |
| :---------------------------: | :-------------------: | :---------------------------: |
| <img src="assets/QuizApp.jfif" alt="Initial quiz question screen with options" width="180"/> | <img src="assets/QuizApp1.jfif" alt="Quiz screen showing correct answer feedback" width="180"/> | <img src="assets/QuizApp2.jfif" alt="Final score and percentage results screen" width="180"/> |

---

## ✨ Features

✅ **Interactive Gameplay:** Simple tap-to-select interface for answering questions.
✅ **Progress Bar:** Animated progress bar to visually track quiz completion.
✅ **Immediate Feedback:** Options turn green for correct or red for incorrect upon answering.
✅ **Results Summary:** Displays the final score, total questions, and percentage score.
✅ **Restart Functionality:** Dedicated button to easily restart the quiz from the beginning.
✅ **Structure:** Uses local data structure (`quizQuestions` array) for easy question customization.

---

## 💻 Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **React Native** | Frontend framework for mobile UI |
| **Expo** | Development & build environment |
| **JavaScript (ES6+)** | App logic and component structure |
| **Animated API** | Smooth progress bar animation |
| **StyleSheet API** | Styling components and layout design |

---

## ⚙️ Installation

Follow these steps to set up and run the project locally:

```bash
# 1️⃣ Clone the repository from GitHub
git clone [https://github.com/yourusername/QuizApp.git](https://github.com/yourusername/QuizApp.git)

# 2️⃣ Navigate into the project directory
cd QuizApp

# 3️⃣ Install all dependencies
npm install # or yarn install
```
> 🧩 **Note:** Make sure you have **Node.js** (v18 or above) and the latest **Expo CLI** installed globally.

---

## 🏃 Running the Project

Once all dependencies are installed, start the development server using:

```bash
npx expo start
```
From there, you can:

* 📱 **Scan the QR code** using the **Expo Go** app (available on both Android & iOS).
* 🖥️ Or choose one of the following options directly in the terminal or browser:
    * Press `a` → Run on Android device/emulator
    * Press `i` → Run on iOS simulator (Mac only)
    * Press `w` → Run in your web browser

---

## 👩‍💻 Author

**Alma Muzliukaj**
* 💼 *Computer Science Student*
* 🌐 https://github.com/almamuzliukaj
* 📧 almamuzliukaj@gmail.com
