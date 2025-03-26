# 🎬 YouTube Video Player App (MVVM Pattern)
### Check appa preview:
https://leetio-varsha.github.io/youtube-mvvm-app/

## 📌 Project Overview
This is a **React (Vite) + TypeScript** application that follows the **MVVM pattern** and uses **Zustand** for state management. The app allows users to:
- **Add and play YouTube video** 📺
- **Remember video playback position** ⏳
- **Edit and remove video** ✏️❌
- **Navigate between Home, Video, and GIF pages** 🚀
- **Show funny GIFs on a dedicated page** 😆

## 🚀 Tech Stack
- **Frontend:** React (Vite) + TypeScript
- **State Management:** Zustand (with persist middleware)
- **Styling:** SCSS Modules (YouTube-like UI)
- **Video Integration:** react-youtube + LocalStorage
- **Linting & Formatting:** ESLint + Prettier
- **Deployment:** GitHub Pages

## 📂 Project Structure
```bash
youtube-mvvm-app/
├── eslint.config.js     # ESLint config
├── .prettierrc          # Prettier config
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
├── package.json         # Dependencies & scripts
├── README.md            # Instructions
│
├── public/              # Static assets
│   ├── index.html       # Entry point
│   ├── favicon.ico      # App icon
│
├── src/
│   ├── shared/          # Reusable components & utilities
│   │   ├── components/
│   │   │   ├── Button.tsx      # Reusable button component
│   │   │   ├── Input.tsx       # Reusable input component
│   │   │   ├── VideoPlayer.tsx # Reusable VideoPlayer component
│   │   ├── services/
│   │   │   ├── AddVideoService.ts # Business logic related to video management
│   │   ├── store/
│   │   │   ├── VideoStore.ts   # Zustand store for video list
│   │   ├── styles/
│   │   │   ├── main.scss       # Global styles
│   │   │   ├── variables.scss  # SCSS variables
│   │   ├── utils/
│   │   │   ├── formatTime.ts   # Utility to format time
│   │   │   ├── constants.ts    # App-wide constants
│   │   ├── hooks/
│   │   │   ├── someHook.ts   
│
│   ├── features/
│   │   ├── home/
│   │   │   ├── views/
│   │   │   │   ├── HomePage.tsx  # Landing page
│   │   ├── video/
│   │   │   ├── views/
│   │   │   │   ├── VideoPage.tsx    # Video page with logic
│   │   ├── gif/
│   │   │   ├── views/
│   │   │   │   ├── GifPage.tsx      # GIF page

│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Renders the app (entry point)
│
│
└── ..github/             # GitHub Actions for CI/CD
    ├── workflows/
    │   ├── deploy.yml   # Deploy to GitHub Pagesdeploy.yml   # Deploy to GitHub Pages
```

## 🎮 Features
✅ **Add YouTube video**
✅ **Save videos**
✅ **Remember playback position** (resumes where you left off)
✅ **Edit and remove videos**
✅ **Show random GIFs on GIF Page**
✅ **Styled with a YouTube-like dark theme**
✅ **Fully responsive UI**

## 💻 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/leetio-varsha/youtube-mvvm-app.git
cd youtube-mvvm-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

### 4️⃣ Run Tests
```sh
npm test
```

### 5️⃣ Build for Production
```sh
npm run build
```

### 6️⃣ Deploy to GitHub Pages
```sh
npm run deploy
```

## 📝 Usage
- **Home Page**: Add, edit, or remove videos.
- **Video Page**: Play videos with remembered playback positions.
- **GIF Page**: Enjoy a random funny GIF and navigate back.

## 📌 Notes
- **Zustand persist middleware** ensures video data remains saved across sessions.
- **Edit feature updates video instantly**.
- **GIF page selects a random funny GIF on each visit**.

---
