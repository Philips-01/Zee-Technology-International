AOS.init({
      duration: 1000,
      once: true
    });


     document.addEventListener("DOMContentLoaded", function() {
  const dropdowns = document.querySelectorAll('.navbar .dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle, .nav-link');

    toggle.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();

        const isOpen = dropdown.classList.contains('show');

        // Close other dropdowns
        document.querySelectorAll('.navbar .dropdown.show').forEach(open => {
          open.classList.remove('show');
          open.querySelector('.dropdown-menu').style.display = 'none';
        });

        // Toggle the current one
        if (!isOpen) {
          dropdown.classList.add('show');
          dropdown.querySelector('.dropdown-menu').style.display = 'block';
        }
      }
    });
  });
});

  // 🔧 Reset dropdowns when resizing back to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 992) {
      document.querySelectorAll('.navbar .dropdown-menu').forEach(menu => {
        menu.style.display = '';
      });
      document.querySelectorAll('.navbar .dropdown.show').forEach(drop => {
        drop.classList.remove('show');
      });
    }
  });
