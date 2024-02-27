document.addEventListener('DOMContentLoaded', function () {
    const menus = document.querySelectorAll('.custom-menu');

    menus.forEach(menu => {
        const toggle = menu.querySelector('.menu-toggle');
        toggle.addEventListener('click', function () {
            menus.forEach(otherMenu => {
                if (
                    otherMenu !== menu &&
                    otherMenu.classList.contains('open')
                ) {
                    otherMenu.classList.remove('open');
                }
            });

            menu.classList.toggle('open');
        });
    });

    document.addEventListener('click', function (event) {
        menus.forEach(menu => {
            if (
                !menu.contains(event.target) &&
                menu.classList.contains('open')
            ) {
                menu.classList.remove('open');
            }
        });
    });
});
