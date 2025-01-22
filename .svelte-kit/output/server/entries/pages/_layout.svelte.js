import { d as slot, e as bind_props } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  let data = $$props["data"];
  $$payload.out += `<header class="header svelte-oiaudo"><div class="profile-container svelte-oiaudo"><img src="/profile.jpg" alt="Chenghan Sun" class="profile-photo svelte-oiaudo"> <div class="contact-info svelte-oiaudo"><p class="svelte-oiaudo"><strong>Emails:</strong> <a href="mailto:sunchenghan1995@gmail.com" class="svelte-oiaudo">sunchenghan1995@gmail.com</a></p> <p class="svelte-oiaudo"><strong></strong> <a href="mailto:chsun@icredd.hokudai.ac.jp" class="svelte-oiaudo">chsun@icredd.hokudai.ac.jp</a></p> <p class="svelte-oiaudo"><strong>Résumé (last updated: 0229-2024):</strong> <a href="/Chenghan_Resume_0229_2024.pdf" target="_blank" class="svelte-oiaudo">Download link</a></p></div></div> <div class="intro svelte-oiaudo"><h1 class="svelte-oiaudo">Chenghan Sun</h1> <p class="quote svelte-oiaudo"><em>「我々は人種で判断されない、実力主義の社会を築く。」-- ドナルド・トランプ</em></p> <p class="svelte-oiaudo">I am currently affiliated with the Machine Learning group of <a href="https://www.icredd.hokudai.ac.jp/" target="_blank">WPI-ICReDD</a>@Hokkaido University, 
      led by <a href="https://itakigawa.github.io/" target="_blank">Prof. Ichigaku Takigawa</a>. My research broadly focuses on 
      AI-for-Science and Graph-based Molecular Representation Learning, with a particular emphasis on developing scalable Geometric Deep Learning models guided by physical 
      principles for tasks such as atomic property prediction and modeling complex dynamics.</p> <p class="svelte-oiaudo">I hold a Ph.D. in Chemical Engineering (Computational Science research track) and concurrently obtained an M.S. in 
      Statistics (Data Science track), both from the University of California, Davis. I earned a B.S. from Iowa State University with 
      Magna Cum Laude academic honor.</p> <div class="social-links svelte-oiaudo"><a href="https://scholar.google.com/citations?user=wf2_0iMAAAAJ&amp;hl=en" target="_blank" class="svelte-oiaudo">🎓 Scholar</a> <a href="https://github.com/Chenghan-Sun" target="_blank" class="svelte-oiaudo">💻 GitHub</a> <a href="https://www.linkedin.com/in/chenghan-sun-166a1ab0/" target="_blank" class="svelte-oiaudo">💼 LinkedIn</a> <a href="https://researchmap.jp/chsun?lang=en" target="_blank" class="svelte-oiaudo">📊 Research Map</a></div></div></header> <main><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
  bind_props($$props, { data });
}
export {
  _layout as default
};
