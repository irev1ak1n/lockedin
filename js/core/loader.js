(function () {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const start = performance.now();
    const minTime = 900;

    function hide() {
        const elapsed = performance.now() - start;
        const wait = Math.max(0, minTime - elapsed);
        setTimeout(() => {
            loader.classList.add('done');
            setTimeout(() => loader.remove(), 500);
        }, wait);
    }

    if (document.readyState === 'complete') {
        hide();
    } else {
        window.addEventListener('load', hide);
    }
})();