// Main site interactions: navigation, smooth scroll, section highlighting, data rendering

function initNav() {
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const sections = Array.from(
    document.querySelectorAll('section[id]')
  );

  function handleNavClick(event) {
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const offset = document.querySelector('.site-header')?.offsetHeight || 0;
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: rect.top + scrollTop - offset - 12,
      behavior: 'smooth'
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavClick);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('nav__link--active');
          } else {
            link.classList.remove('nav__link--active');
          }
        });
      });
    },
    {
      threshold: 0.5
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initMobileNav() {
  const toggle = document.querySelector('.nav__menu-toggle');
  const navList = document.getElementById('primary-navigation');

  if (!toggle || !navList) return;

  function setOpen(isOpen) {
    navList.classList.toggle('nav__links--open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  }

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.contains('nav__links--open');
    setOpen(!isOpen);
  });

  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const isOpen = navList.classList.contains('nav__links--open');
      setOpen(!isOpen);
    }
  });

  navList.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    setOpen(false);
  });
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container || !Array.isArray(projects)) return;

  container.innerHTML = '';

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;

    const description = document.createElement('p');
    description.className = 'project-card__description';
    description.textContent = project.description;

    const tagsWrap = document.createElement('div');
    tagsWrap.className = 'project-card__tags';
    project.tags.forEach((tagText) => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = tagText;
      tagsWrap.appendChild(tag);
    });

    const linksWrap = document.createElement('div');
    linksWrap.className = 'project-card__links';

    if (project.githubUrl) {
      const repoLink = document.createElement('a');
      repoLink.href = project.githubUrl;
      repoLink.target = '_blank';
      repoLink.rel = 'noopener noreferrer';
      repoLink.className = 'project-card__link';
      repoLink.textContent = 'View Code';
      linksWrap.appendChild(repoLink);
    }

    if (project.liveUrl) {
      const liveLink = document.createElement('a');
      liveLink.href = project.liveUrl;
      liveLink.target = '_blank';
      liveLink.rel = 'noopener noreferrer';
      liveLink.className = 'project-card__link';
      liveLink.textContent = 'Live Demo';
      linksWrap.appendChild(liveLink);
    } else {
      const meta = document.createElement('span');
      meta.className = 'project-card__meta';
      meta.textContent = 'Repository only';
      linksWrap.appendChild(meta);
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tagsWrap);
    card.appendChild(linksWrap);

    container.appendChild(card);
  });
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container || !Array.isArray(skillCategories)) return;

  container.innerHTML = '';

  skillCategories.forEach((category) => {
    const wrapper = document.createElement('section');
    wrapper.className = 'skills-category';

    const heading = document.createElement('h3');
    heading.className = 'skills-category__title';
    heading.textContent = category.category;

    const tagsWrap = document.createElement('div');
    tagsWrap.className = 'skills-category__tags';

    category.skills.forEach((skill) => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = skill;
      tagsWrap.appendChild(tag);
    });

    wrapper.appendChild(heading);
    wrapper.appendChild(tagsWrap);
    container.appendChild(wrapper);
  });
}

function initFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (!yearEl) return;
  yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    initNav();
    initMobileNav();
    renderProjects();
    renderSkills();
    initFooterYear();
  } catch (error) {
    // Fail gracefully without breaking the page (NFR-2.4)
    // eslint-disable-next-line no-console
    console.error('Error initializing site scripts', error);
  }
});

