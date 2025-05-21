# Placement Assist

**Placement Assist** is a modern, interactive platform designed to help students prepare for campus placements and technical interviews. It offers curated resources, interactive blogs, mock interviews, and more—all with a sleek, responsive UI.

---

## 🚀 Features

- **Curated Blogs & Resources:**
  Explore categorized blogs and guides for core CS subjects, aptitude, and soft skills.
- **Interactive Mock Interviews:**
  Practice with realistic interview questions and scenarios.
- **Discussion & Testimonials:**
  Share experiences and read testimonials from successful candidates.
- **Responsive UI:**
  Built with Tailwind CSS and Radix UI for a seamless experience across devices.
- **Dark Mode:**
  Toggle between light and dark themes.

---

## 🛠️ Tech Stack

- **Next.js 15** (App Directory)
- **React 19**
- **Tailwind CSS** (with custom themes)
- **Radix UI** (for accessible components)
- **TypeScript**
- **Lucide Icons**
- **MDX** (planned for blog content)
- **(Planned) Backend Auth & Progress Saving**

---

## 📁 Folder Structure
```
placement-assist/
├── app/                # Next.js app directory (routes, pages, API)
│   ├── blog/           # Main blog page (will render MDX content)
│   ├── blogs/          # Topic-based blog routes and resources
│   ├── mock-interview/ # Mock interview feature
│   └── ...             # Other routes (about, problems, etc.)
├── components/         # Reusable UI components (navbar, footer, cards, etc.)
├── content/            # (Planned) MDX blog files
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (MDX, etc.)
├── public/             # Static assets (images, logos)
├── styles/             # Global and custom styles
├── package.json        # Project dependencies and scripts
└── README.md
```


---

## 🧑‍💻 Contributing

We welcome contributions! Here’s how to get started:

1. **Fork the repo** and clone it locally.
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the dev server:**
      ```sh
      npm run dev
      ```
   4. **Create a new branch** for your feature or bugfix.
   5. **Submit a Pull Request** with a clear description.

   **Ideas for Contribution:**
   - Add new MDX blog articles or resources.
   - Improve UI/UX or accessibility.
   - Suggest or implement new features (see below).

   ---

   ## 🌱 Future Improvements

   - **MDX Blog Integration:**
     Move all blog content to `.mdx` files for easy authoring and rich formatting.
   - **Backend Authentication:**
     Integrate user accounts with progress saving and personalized dashboards.
   - **Progress Tracking:**
     Save solved problems, attempted interviews, and reading history.
   - **Admin Dashboard:**
     For managing content and user feedback.
   - **More Interactive Features:**
     Quizzes, coding playgrounds, and more.

   ---

   ## 🛠️ Setup & Development

   1. **Clone the repo:**
      ```sh
      git clone https://github.com/your-username/placement-assist.git
      cd placement-assist
      ```
   2. **Install dependencies:**
      ```sh
      npm install
      ```
   3. **Run the development server:**
      ```sh
      npm run dev
      ```
   4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

   ---

   ## 📢 Feedback & Community

   Have suggestions or want to share your placement experience?
   Open an issue or start a discussion!

   ---

   **Happy Learning & Best of Luck for Your Placements!**
