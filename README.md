# Valentine's Proposal Website 💝

This is a cute, mobile-friendly interactive website to ask someone to be your Valentine!

## Features
- **Responsive Design:** Works beautifully on mobile and desktop.
- **Interactive 'No' Button:** The "No" button runs away when you try to click or hover over it!
- **Celebration:** Confetti explosion and specific message when they say "Yes".
- **Premium Aesthetics:** Glassmorphism, floating hearts, and smooth animations.

## How to Host on GitHub Pages (Free)

1.  **Create a New Repository:**
    - Go to GitHub and create a new repository (e.g., `my-valentine`).
    - Make sure it is **Public**.

2.  **Upload Files:**
    - Upload `index.html`, `style.css`, `script.js`, and `hero.png` to your new repository.
    - You can do this via the web interface "Upload files" button or using Git commands:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
      git push -u origin main
      ```

3.  **Enable GitHub Pages:**
    - Go to your repository **Settings**.
    - Click on **Pages** in the left sidebar.
    - Under **Build and deployment**, select **Source** -> **Deploy from a branch**.
    - Select **Branch**: `main` (or `master`) and folder `/ (root)`.
    - Click **Save**.

4.  **Share the Link:**
    - After a minute or two, refresh the page. You will see your live URL (e.g., `https://yourusername.github.io/my-valentine/`).
    - Send this link to your special someone! 💌

## Customization
- **Change Text:** Edit `index.html` to change the question or the celebration message.
- **Change Music:** You can add an `<audio>` tag in `index.html` if you want background music.
