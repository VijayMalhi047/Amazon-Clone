document.addEventListener('DOMContentLoaded', function () {
    const panel = document.querySelector('.panel');
    const panelOps = document.querySelector('.panel-ops');

    panel.addEventListener('click', function () {
        panelOps.classList.toggle('panel-ops-visible');
    });
});
