<section id="news">
  <h2>Recent News and Updates</h2>
  <div class="news-box">
    <ul>
      <li>
        <span class="date">November 5, 2024</span> – Our reseach poster titled "Comparative Analysis of Domain-Specific and Geometric Deep Learning Models in
Chemical Property Predictions" was presented at <a href="https://ibisml.org/ibis2024/" target="_blank">IBIS2024</a>.
      </li>
      <li>
        <span class="date">July 31, 2024</span> – Happy to announce that my proposal for KAKENHI FY2024 (Research Activity Start-up) has been issued by the Japan Society for Promotion of Science (JSPS).
      </li>
      <li>
        <span class="date">April 1, 2024</span> – After nearly 10 years in the U.S. (mostly under the chaos of DEI), I officially relocated to Japan and serve as an Information Science researcher.
      </li>
      <li>
        <span class="date">December 5, 2023</span> – The last dance@UC Davis: I finished the Ph.D. Exit Seminar titled "Applications of Machine Learning for Atomistic Modeling in Catalysis Informatics".
      </li>
    </ul>
  </div>
</section>

<section id="publications">
  <h2>Selected Publications</h2>
  <div class="publication">
    <!-- Larger figure -->
    <img src="/zeo_paper.jpg" alt="Publication Figure" class="paper-image" />
    <div class="paper-details">
      <!-- Title and abstract on the right -->
      <a href="https://pubs.acs.org/doi/full/10.1021/acs.jctc.4c00978" class="title">
        Stability and Dynamics of Zeolite-Confined Gold Nanoclusters
      </a>
      <p class="details">JCTC 2024</p>
      <p class="authors">Authors: Siddharth Sonti*, <strong>Chenghan Sun* (co-first)</strong>, Zekun Chen, Robert Michael Kowalski, 
      Joseph S. Kowalski, Davide Donadio, Surl-Hee Ahn, Ambarish R. Kulkarni.</p>
      <!-- Paper abstract -->
      <p class="abstract">
        Nanoengineered metal@zeolite materials have recently emerged as a promising class of catalysts for several industrially relevant 
        reactions. These materials, which consist of small transition metal nanoclusters confined within three-dimensional zeolite pores, 
        are interesting because they show higher stability and better sintering resistance under reaction conditions. While several such 
        hybrid catalysts have been reported experimentally, key questions such as the impact of the zeolite frameworks on the properties 
        of the metal clusters are not well understood. To address such knowledge gaps, in this study, we report a robust and transferable 
        machine learning-based potential (MLP) that is capable of describing the structure, stability, and dynamics of zeolite-confined 
        gold nanoclusters. Specifically, we show that the resulting MLP maintains ab initio accuracy across a range of temperatures 
        (300–1000 K) and can be used to investigate time scales (>10 ns), length scales (ca. 10,000 atoms), and phenomena (e.g., 
        ensemble-averaged stability and diffusivity) that are typically inaccessible using density functional theory (DFT). Taken together, 
        this study represents an important step in enabling the rational theory-guided design of metal@zeolite catalysts.
      </p>
    </div>
  </div>
  <div class="publication">
    <!-- Larger figure -->
    <img src="/hea_paper.jpg" alt="Publication Figure" class="paper-image" />
    <div class="paper-details">
      <!-- Title and abstract on the right -->
      <a href="https://pubs.acs.org/doi/10.1021/acs.langmuir.3c03401" class="title">
        Developing Cheap but Useful Machine Learning-Based Models for Investigating High-Entropy Alloy Catalysts
      </a>
      <p class="details">Langmuir 2024</p>
      <p class="authors">Authors: <strong>Chenghan Sun</strong>, Rajat Goel, Ambarish R. Kulkarni.</p>
      <!-- Paper abstract -->
      <p class="abstract">
        This work aims to address the challenge of developing interpretable ML-based models when access to large-scale computational 
        resources is limited. Using CoMoFeNiCu high-entropy alloy catalysts as an example, we present a cost-effective workflow that 
        synergistically combines descriptor-based approaches, machine learning-based force fields, and low-cost density functional theory 
        (DFT) calculations to predict high-quality adsorption energies for H, N, and NHx (x = 1, 2, and 3) adsorbates. This is achieved 
        using three specific modifications to typical DFT workflows including: (1) using a sequential optimization protocol, (2) developing 
        a new geometry-based descriptor, and (3) repurposing the already-available low-cost DFT optimization trajectories to develop a 
        ML-FF. Taken together, this study illustrates how cost-effective DFT calculations and appropriately designed descriptors can be 
        used to develop cheap but useful models for predicting high-quality adsorption energies at significantly lower computational costs. 
        We anticipate that this resource-efficient philosophy may be broadly relevant to the larger surface catalysis community.
      </p>
    </div>
  </div>
</section>

<section id="experience">
  <h2>Industry Experience</h2>
  <div class="experience-list">
    <!-- Experience 1 -->
    <div class="experience-item">
      <div class="experience-logo">
        <img src="/meta_logo.jpg" alt="Meta Logo" />
      </div>
      <div class="experience-details">
        <h3>Meta</h3>
        <p>Data Scientist Intern</p>
        <p>Affiliation: <span class="affiliation">Ads Problem DS Team, Business Integrity</span></p>
        <p class="experience-dates">June. 2022 – Sep. 2022, Seattle, WA</p>
      </div>
    </div>
</section>

<!-- Showcase Section -->
<section id="showcase">
  <img src="/showcase-image.jpg" alt="Showcase Image" />
</section>

<footer id="footer">
  <p>
    Designed by <strong>Chenghan Sun</strong>, powered by 
    <a href="https://svelte.dev/" target="_blank">Svelte</a> and 
    <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>.
  </p>
</footer>

<style>
  /* General Section Styles */
  section {
    margin: 2rem 0;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
  }

  /* News Section Specific Styles */
  #news {
    max-width: 1300px; /* Limits the width of the news section */
    margin: 0 auto; /* Centers the news section */
    padding: 0 1rem; /* Adds some padding for small devices */
  }

  #news .news-box {
    background: #f9f9f9; /* Light background */
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-height: 200px; /* Set the height of the news box */
    overflow-y: auto; /* Enable vertical scrolling */
  }

  #news ul {
    list-style: none; /* Remove default list styling */
    padding: 0;
    margin: 0;
  }

  #news li {
    margin-bottom: 0.5rem; /* Reduce spacing between lines */
    line-height: 1.4; /* Reduce line height for compactness */
  }

  #news .date {
    font-weight: bold;
    color: #555;
  }

  #news a {
    color: #007bff;
    text-decoration: none;
  }

  #news a:hover {
    text-decoration: underline;
  }

  /* Publications Section Styles */
  #publications {
    max-width: 1300px; /* Matches the max width of "Recent News and Updates" */
    margin: 0 auto; /* Centers the section */
    padding: 1rem; /* Adds padding around the section */
  }

  #publications h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
  }

  /* Publication Layout */
  .publication {
    display: flex;
    margin-bottom: 1.5rem; /* Keep consistent spacing between publication blocks */
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.8rem;
    gap: 1rem; /* Keep compact gap between figure and text */
    max-width: 1300px;
    margin: 0 auto;
  }

  .publication .paper-image {
    flex: 1.1; /* Slightly smaller proportion for the figure */
    max-width: 300px; /* Restrict maximum figure width */
    max-height: auto; /* Adjust height proportionally */
    object-fit: contain; /* Ensure full figure is displayed */
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .paper-details {
    flex: 0.9; /* Slightly smaller width for the text section */
    display: flex;
    flex-direction: column;
    font-size: 0.9rem; /* Keep smaller font size */
    line-height: 1.3; /* Slightly tighter line spacing */
  }

  .paper-details .title {
    font-size: 1.1rem; /* Slightly smaller title font */
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
    margin-bottom: 0.3rem; /* Less space under the title */
  }

  .paper-details .title:hover {
    text-decoration: underline;
  }

  .paper-details .details,
  .paper-details .authors {
    margin-bottom: 0.2rem; /* Reduce spacing between journal, authors, etc. */
  }

  /* Abstract Styling */
  .paper-details .abstract {
    font-size: 0.85rem; /* Reduce font size for the abstract */
    font-style: italic;
    color: #555;
    line-height: 1.2; /* Tighter spacing for abstract */
  }

  /* Experience Section Styles */
  #experience {
    margin: 2rem 0;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
  }

  #experience h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .experience-item {
    display: flex;
    align-items: center;
    gap: 1.5rem; /* Increased spacing between logo and details */
    padding: 1.5rem; /* Added padding for a larger box */
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .experience-logo img {
    width: 150px; /* Increased logo size */
    height: 150px;
    object-fit: contain;
  }

  .experience-details h3 {
    font-size: 1.5rem; /* Increased title size */
    color: #d63031; /* Meta Red Color */
    margin: 0;
  }

  .experience-details p {
    margin: 0.4rem 0;
    font-size: 1rem; /* Slightly larger font for readability */
    line-height: 1.6;
  }

  .experience-dates {
    font-style: italic;
    color: #555;
  }

  /* Showcase Section Styles */
  #showcase img {
    max-width: 100%; /* Ensures it doesn't overflow the container */
    max-height: 400px; /* Restricts the height */
    width: auto; /* Maintains the aspect ratio */
    height: auto; /* Maintains the aspect ratio */
    margin: 0 auto; /* Centers the image horizontally */
    display: block; /* Centers the image if margin is applied */
    border-radius: 8px; /* Keeps the rounded corners */
  }

  #footer {
    text-align: center; /* Centers the footer content */
    font-size: 0.9rem; /* Slightly smaller font size */
    color: #555; /* Soft gray text */
    margin-top: 2rem; /* Adds spacing above the footer */
    padding: 1rem 0; /* Adds padding around the text */
    border-top: 1px solid #ddd; /* Adds a top border for separation */
    background: #f9f9f9; /* Light background color for footer */
  }

  #footer a {
    color: #007bff; /* Matches link color with rest of the site */
    text-decoration: none;
  }

  #footer a:hover {
    text-decoration: underline; /* Underline on hover */
  }

</style>



