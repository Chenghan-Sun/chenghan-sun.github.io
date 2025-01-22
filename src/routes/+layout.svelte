<script>
  export let data;
  export const prerender = true;
</script>

<header class="header">
  <!-- Profile Section -->
  <div class="profile-container">
    <img src="profile.jpg" alt="Chenghan Sun" class="profile-photo" />
    <div class="contact-info">
      <p>
        <strong>Emails:</strong> <a href="mailto:sunchenghan1995@gmail.com">sunchenghan1995@gmail.com</a>
      </p>
      <p>
      <strong></strong> <a href="mailto:chsun@icredd.hokudai.ac.jp">chsun@icredd.hokudai.ac.jp</a>
      </p>
      <p>
        <strong>Résumé (last updated: 0229-2024):</strong> <a href="/Chenghan_Resume_0229_2024.pdf" target="_blank">Download link</a>
      </p>
    </div>
  </div>

  <!-- Introduction Section -->
  <div class="intro">
    <h1>Chenghan Sun</h1>
    <!-- Added Quote -->
    <p class="quote"><em>「我々は人種で判断されない、実力主義の社会を築く。」-- ドナルド・トランプ</em></p>
    <p>
      I am currently affiliated with the Machine Learning group of <a href="https://www.icredd.hokudai.ac.jp/" target="_blank">WPI-ICReDD</a>@Hokkaido University, 
      led by <a href="https://itakigawa.github.io/" target="_blank">Prof. Ichigaku Takigawa</a>. My research broadly focuses on 
      AI-for-Science and Graph-based Molecular Representation Learning, with a particular emphasis on developing scalable Geometric Deep Learning models guided by physical 
      principles for tasks such as atomic property prediction and modeling complex dynamics.
    </p>
    <p>
      I hold a Ph.D. in Chemical Engineering (Computational Science research track) and concurrently obtained an M.S. in 
      Statistics (Data Science track), both from the University of California, Davis. I earned a B.S. from Iowa State University with 
      Magna Cum Laude academic honor.
    </p>
    <div class="social-links">
      <a href="https://scholar.google.com/citations?user=wf2_0iMAAAAJ&hl=en" target="_blank">🎓 Scholar</a>
      <a href="https://github.com/Chenghan-Sun" target="_blank">💻 GitHub</a>
      <a href="https://www.linkedin.com/in/chenghan-sun-166a1ab0/" target="_blank">💼 LinkedIn</a>
      <a href="https://researchmap.jp/chsun?lang=en" target="_blank">📊 Research Map</a>
    </div>
  </div>
</header>

<main>
  <slot />
</main>

<style>
  .header {
    display: flex;
    align-items: center; /* Vertically center items */
    justify-content: center; /* Center the entire section */
    gap: 2rem; /* Space between left and right sections */
    padding: 2rem;
    background: #fff;
    border-bottom: 1px solid #ddd;
  }

  .profile-container {
    display: flex;
    flex-direction: column; /* Stack photo and contact info */
    align-items: center; /* Center-align contact info under the photo */
  }

  .quote {
    font-style: italic;
    font-size: 1rem;
    color: #555; /* Soft gray color */
    margin-top: 0.5rem; /* Add some spacing */
    margin-bottom: 1rem; /* Separate from the next paragraph */
  }

  .profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .contact-info {
    text-align: center; /* Centers text below the photo */
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .contact-info p {
    margin: 0.5rem 0;
  }

  .contact-info a {
    color: #007bff;
    text-decoration: none;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }

  .intro {
    flex-grow: 1;
    max-width: 600px;
    text-align: left; /* Keeps text alignment */
  }

  .intro h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .intro p {
    text-align: justify;
    margin-bottom: 1rem;
    line-height: 1.6; /* Improves readability */
  }

  .social-links a {
    display: inline-block;
    margin-right: 1rem;
    text-decoration: none;
    color: #007bff;
  }

  .social-links a:hover {
    text-decoration: underline;
  }
</style>

