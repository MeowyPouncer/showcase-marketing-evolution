document.addEventListener('DOMContentLoaded', function () {
    const packages = document.querySelectorAll('.package');

    packages.forEach(function (pkg) {
        const expandBtn = pkg.querySelector('.expand-btn');
        const closeBtn = pkg.querySelector('.close-btn');

        if (expandBtn) {
            expandBtn.addEventListener('click', function (e) {
                e.preventDefault();

                // Close any other expanded packages
                packages.forEach(function (otherPkg) {
                    if (otherPkg !== pkg) {
                        otherPkg.classList.remove('expanded');
                    }
                });

                // Expand the clicked package
                pkg.classList.add('expanded');
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                pkg.classList.remove('expanded');
            });
        }
    });
});
