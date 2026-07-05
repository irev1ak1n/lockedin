async function loadPartial(id, path) {
    const mount = document.getElementById(id);
    if (!mount) return;
    const res = await fetch(path);
    mount.innerHTML = await res.text();
}

loadPartial('nav-root', 'partials/nav.html');
loadPartial('footer-root', 'partials/footer.html');