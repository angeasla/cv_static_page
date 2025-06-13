# My Personal Portfolio/CV Template

This is a clean, responsive, and easy-to-customize static webpage template designed for creating a personal portfolio or online curriculum vitae (CV). It's built with modern web technologies, offering a straightforward way to showcase your skills, education, projects, and contact information.

---

## ✨ Features

* **Responsive Design:** Optimized for various screen sizes, from mobile devices to large desktops, ensuring your content looks great everywhere.
* **Smooth Navigation:** A sticky sidebar navigation with smooth scrolling to different sections of the page.
* **Dynamic "About Me" Section:** Features a dynamic typing animation to highlight your profession or key skills.
* **Professional Timeline:** Dedicated section for showcasing your educational background in a clean timeline format.
* **Skills Showcase:** Visually appealing cards to highlight your technical and soft skills with relevant icons.
* **Interactive Portfolio:** A grid layout to display your projects with images, descriptions, and links to live demos or GitHub repositories.
* **FAQ Section:** An accordion-style section for frequently asked questions, providing quick answers to common inquiries.
* **Contact Form:** An integrated, functional contact form powered by FormSubmit.co, allowing visitors to easily get in touch.
* **Social Media Links:** Prominently placed social media icons to connect with your professional network.
* **Favicon Support:** Easily customizable favicon for browser tabs.

---

## 🛠️ Technologies Used

This template leverages the following technologies to provide a modern and robust foundation:

* **HTML5:** The core structure of the webpage.
* **CSS3:** For styling and visual presentation.
* **Bootstrap 5.3.0-alpha3:** A powerful front-end framework for responsive design and pre-styled components (navigation, cards, forms, accordion, grid system).
* **Font Awesome 6.4.0:** A popular icon library used for various icons throughout the template (skills, navigation, social media).
* **JavaScript:** For interactive elements, smooth scrolling, and the dynamic typing animation.
* **FormSubmit.co:** A simple, free service used for handling contact form submissions without needing a backend.

---

## 🚀 How to Use

To get started with this template, follow these simple steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
    (Replace `your-username/your-repo-name` with your actual GitHub repository details.)
2.  **Navigate to the Project Directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser to view the template.
4.  **Deployment:** You can host this static site easily on platforms like GitHub Pages, Netlify, Vercel, or any web server.

---

## 🎨 Customization

This template is designed to be highly customizable. Here's how you can personalize it:

### 1. Basic Information (`index.html`)

* **Name & Title:**
    * Change `"Name Surname"` in the `<title>` tag and the `navbar-brand` `<a>` tag to your actual name.
    * Update the `<h1>` tag with your name: `<h1 class="display-2 mt-5 pt-5 name-title">Your Name Here</h1>`.
* **Profile Picture:**
    * Replace `img/bio.jpg` with your own profile picture. Make sure the image path is correct.
* **About Me Section:**
    * Edit the `<strong>` text within the `<p class="lead my-5 pb-5 quotes">` tag to introduce yourself.
    * **Typing Animation:** The dynamic text is controlled by `scripts/animation.js`. Open this file and modify the `textArray` to change the phrases that appear.
        ```javascript
        const textArray = ["Your Profession", "Your Skill", "Your Passion"];
        ```
* **Favicon:**
    * Replace `img/favicon.ico` with your desired favicon.

### 2. Navigation & Social Media (`index.html`)

* **Navigation Links:** The navigation items (`<li>` tags within `<ul class="navbar-nav">`) are linked by section IDs (e.g., `#about`, `#education`).
    * You can rename the text for each `nav-link` (e.g., change "About" to "Home").
    * The `data-scroll` attribute ensures smooth scrolling.
* **Social Media Links:**
    * Update the `href` attributes in the social media `<a>` tags (e.g., `https://www.linkedin.com/`, `https://github.com/`, `https://instagram.com/`, `mailto:your@email.com`) to your personal links.
    * To change the icons, find the corresponding Font Awesome `<i>` tag (e.g., `<i class="fa-brands fa-linkedin"></i>`) and replace the class with a different Font Awesome icon class.

### 3. Sections Content (`index.html`)

* **Education:**
    * For each `timeline-2` `div`, update:
        * `<a>` tag `href` and `<img>` `src` to your university/certification logo/image.
        * `<h4 class="fw-bold mb-4">` with your institution and certification title.
        * `<p class="text-muted mb-4">` with dates (e.g., `<i class="far fa-clock"></i> Your Start - Your End`).
        * `<p class="mb-0">` with a description of your studies.
* **Skills:**
    * For each `col-lg-4 mb-3` `div` (skill card):
        * Change the Font Awesome `<i>` tag within `<span>` to the icon representing your skill (e.g., `<i class="fa-brands fa-html5"></i>` for HTML5).
        * Update `<h4 class="font-weight-bold pb-2"><strong>` with your skill name.
        * Modify `<p>` with a brief description of your proficiency or related tools.
* **Portfolio:**
    * For each `col` `div` (portfolio item card):
        * Replace `img/placeholder_image.jpg` with an image of your project.
        * Update `<h5 class="card-title">` with your project title.
        * Edit `<p class="card-text">` with a description of your project.
        * Change the `href` in the `<a>` tag of the button to your project's GitHub repo or live application link. Update the button text as needed (e.g., "View Live Demo").
* **FAQ:**
    * For each `accordion-item`, update the `<button>` text with your `Question` and the `accordion-body` `<div>` with your `Answer`.

### 4. Contact Form (`index.html`)

Look below in the FormSubmit.co Integration section.

### 5. Styling (`styles/style.css`)

* Open `styles/style.css` to modify the template's look and feel.
* You can change colors by updating CSS variables or specific class styles. Look for comments to guide your changes.
* Adjust fonts, spacing, and other visual properties to match your personal brand.

---

## 📧 FormSubmit.co Integration

Your portfolio template uses [FormSubmit.co](https://formsubmit.co) to handle contact form submissions. This is a fantastic, free service that lets you receive form data directly to your email without needing to write any server-side code.

Here's how to configure it correctly:

### 1. Update Your Email Address

The most important step is to tell FormSubmit.co where to send the emails.

* Open your `index.html` file.
* Locate the `<form>` tag in the **Contact** section.
* Change the `action` attribute to include your actual email address:

    ```html
    <form class="row g-3" action="[https://formsubmit.co/your@email.com](https://formsubmit.co/your@email.com)" method="POST">
    ```

    **Replace `your@email.com` with the email address where you want to receive messages from your form.**

### 2. Activate Your Form (First Submission)

For security and to prevent spam, FormSubmit.co requires a one-time activation.

* After you've updated your email in the `action` attribute and deployed your website (or opened `index.html` locally), **submit the form for the first time** with some test data.
* **Check the inbox of the email address you provided in the `action` attribute.** You'll receive an email from FormSubmit.co asking you to activate your form.
* **Click the activation link** in that email.
* Once activated, all subsequent submissions will be sent directly to your email.

### 3. Customize Redirection (Optional)

After a user submits the form, FormSubmit.co redirects them to a "Thank You" page. By default, your template redirects to `https://haydn5.github.io/formsubmitdemo/success.html`. You can customize this.

* **Create Your Own Success Page:** It's highly recommended to create a simple `success.html` or `thank-you.html` page within your own project. This page could simply say "Thank you for your message! I'll get back to you soon."
* **Update the `_next` field:** In your `index.html` file, locate the hidden input for `_next`:

    ```html
    <input type="hidden" name="_next" value="[https://haydn5.github.io/formsubmitdemo/success.html](https://haydn5.github.io/formsubmitdemo/success.html)" >
    ```

    Change the `value` to the URL of your own success page. If your success page is `success.html` in the root of your project, you'd change it to:

    ```html
    <input type="hidden" name="_next" value="[https://your-github-username.github.io/your-repo-name/success.html](https://your-github-username.github.io/your-repo-name/success.html)" >
    ```
    (Adjust `your-github-username` and `your-repo-name` accordingly).

### 4. Captcha Settings (Optional)

FormSubmit.co provides basic spam protection.

* **To disable Captcha:** Your current template already has this line:
    ```html
    <input type="hidden" name="_captcha" value="false">
    ```
    Keeping this line means users won't see a Captcha challenge.
* **To enable Captcha:** If you prefer to have a Captcha for more robust spam protection, simply **remove this line** from your HTML.

### 5. Honeypot Field (Spam Protection)

The template includes a honeypot field, which is a common technique to deter spambots.

* ```html
    <input type="text" name="_honey" style="display: none;">
    ```
* This field is hidden from legitimate users but often filled out by bots. If it's filled, FormSubmit.co won't process the submission. It's best to **keep this line** as it helps reduce unwanted spam.

By following these steps, your contact form will be fully functional and ready to collect messages from your visitors!

---

## 📂 File Structure

The project has a straightforward file structure:

```
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   ├── index.js        (for general JS, e.g., smooth scroll)
│   └── animation.js    (for the typing animation effect)
└── img/
    ├── bio.jpg             (your profile picture)
    ├── favicon.ico         (your favicon)
    └── placeholder_image.jpg (placeholder images for education/portfolio)
```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5.  Push to the branch (`git push origin feature/AmazingFeature`).
6.  Open a Pull Request.

---

## 📄 License

This project is open-source and available under the MIT License.

---
