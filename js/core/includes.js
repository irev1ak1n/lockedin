async function loadPartial(id, path) {
    const mount = document.getElementById(id);
    if (!mount) return;
    const res = await fetch(path);
    mount.innerHTML = await res.text();
}

function initSidebar() {
    const toggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('sideOverlay');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const open = document.body.classList.toggle('side-open');
        toggle.setAttribute('aria-expanded', open);
    });

    overlay.addEventListener('click', () => {
        document.body.classList.remove('side-open');
        toggle.setAttribute('aria-expanded', 'false');
    });

    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.side-link').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
}

loadPartial('nav-root', 'partials/nav.html').then(initSidebar);
loadPartial('footer-root', 'partials/footer.html');