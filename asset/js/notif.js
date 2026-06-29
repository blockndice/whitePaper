window.addEventListener('DOMContentLoaded', () => {
    const notif = document.querySelector('.notification-wrapper');
    const toc = document.querySelector('.table-of-contents');
    if (!toc) return;

    if (notif && notif.offsetHeight > 0) {
        toc.style.top = `${notif.offsetTop + notif.offsetHeight + 16}px`;
    } else {
        toc.style.top = '2rem';
    }
});