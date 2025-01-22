<script>
  export let name = "Kaan Sancak";
  export let title = "Hi, I'm " + name;
  export let description = "I am a CS Ph.D. student in the College of Computing at Georgia Tech...";
</script>

<header class="text-center bg-gradient-to-r from-blue-100 to-pink-100 py-8">
  <img
    src="/path-to-your-profile-pic.jpg"
    alt="{name}'s Picture"
    class="rounded-full w-32 h-32 mx-auto"
  />
  <h1 class="text-4xl font-bold mt-4">{title}</h1>
  <p class="mt-2 text-gray-600">{description}</p>

  <div class="flex justify-center space-x-4 mt-4">
    <a href="https://linkedin.com" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com" target="_blank">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="mailto:kaan@gatech.edu">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </div>

  <button class="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg">
    <a href="/path-to-cv.pdf" target="_blank">CV</a>
  </button>
</header>

