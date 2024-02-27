function toggleDropdown(id) {
    const dropdownContent = document.getElementById(id);
    const allDropdowns = document.querySelectorAll('.dropdown-content');

    if (dropdownContent.style.display === 'flex') {
        dropdownContent.style.display = 'none';
    } else {
        allDropdowns.forEach(dropdown => {
            if (dropdown !== dropdownContent) {
                dropdown.style.display = 'none';
            }
        });
        dropdownContent.style.display = 'flex';
    }
}

function closeDropdowns() {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const dropdownId = toggle.dataset.dropdownId;
            toggleDropdown(dropdownId);
        });
    });

    document.addEventListener('click', event => {
        const dropdowns = document.querySelectorAll('.dropdown');
        let isDropdownClick = false;

        dropdowns.forEach(dropdown => {
            if (dropdown.contains(event.target)) {
                isDropdownClick = true;
            }
        });

        if (!isDropdownClick) {
            closeDropdowns();
        }
    });
});
