class SiteNavbar extends HTMLElement {
  connectedCallback() {
    const onMissionPage = window.location.pathname.endsWith('/mission.html');
    const homeHref = onMissionPage ? 'index.html#home' : '#home';
    const missionHref = 'mission.html';
    const impactHref = onMissionPage ? 'index.html#impact' : '#impact';
    const programsHref = onMissionPage ? 'index.html#programs' : '#programs';
    const storiesHref = onMissionPage ? 'index.html#stories' : '#stories';
    const donateHref = onMissionPage ? 'index.html#donate' : '#donate';

    this.innerHTML = `
      <nav class="site-nav" aria-label="Primary navigation">
        <a class="nav-logo" href="${homeHref}">
          <span class="heart" aria-hidden="true">&hearts;</span>
          <span>The Love Now Foundation</span>
        </a>
        <ul class="nav-links">
          <li><a href="${missionHref}" ${onMissionPage ? 'aria-current="page"' : ''}>Mission</a></li>
          <li><a href="${impactHref}">Impact</a></li>
          <li><a href="${programsHref}">Programs</a></li>
          <li><a href="${storiesHref}">Stories</a></li>
          <li><a class="btn-donate-nav" href="${donateHref}">Donate</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('site-navbar', SiteNavbar);
