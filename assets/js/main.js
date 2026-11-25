/**
 * Mamun Autos - Premium Multi-Brand Car Showroom
 * Main Global Application Script (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initActiveNavLink();
  initBackToTop();
  initContactForms();
  initHeroSearch();
  initSmoothScroll();
  initHeroVideo();
});

/**
 * Hero Background Video Autoplay Safety
 */
function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  const carImg = document.querySelector('.hero-car-motion-img');
  if (video) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        video.style.opacity = '0.85';
      }).catch(() => {
        // Autoplay prevented or offline; reveal the moving car photo layer
        video.style.display = 'none';
        if (carImg) carImg.style.opacity = '1';
      });
    }
    video.addEventListener('error', () => {
      video.style.display = 'none';
      if (carImg) carImg.style.opacity = '1';
    });
  }
}

/**
 * Sticky Navbar on scroll
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Active navigation link matching
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Back to Top Floating Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Smooth scrolling for in-page anchors
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile navbar if open
        const navbarCollapse = document.querySelector('.navbar-collapse.show');
        if (navbarCollapse && window.bootstrap) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });
}

/**
 * Hero Section Quick Search
 */
function initHeroSearch() {
  const heroSearchForm = document.getElementById('heroSearchForm');
  if (!heroSearchForm) return;

  heroSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const brand = document.getElementById('heroSearchBrand')?.value || '';
    const category = document.getElementById('heroSearchCategory')?.value || '';
    const maxPrice = document.getElementById('heroSearchPrice')?.value || '';

    const params = new URLSearchParams();
    if (brand && brand !== 'all') params.append('brand', brand);
    if (category && category !== 'all') params.append('category', category);
    if (maxPrice && maxPrice !== 'all') params.append('maxPrice', maxPrice);

    window.location.href = `inventory.html?${params.toString()}`;
  });
}

/**
 * Form Validation (Contact & Inquiries)
 */
function initContactForms() {
  const contactForms = document.querySelectorAll('.needs-validation, #contactForm, #quickInquiryForm, #testDriveForm');

  contactForms.forEach(form => {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      form.classList.add('was-validated');

      // Submit simulation
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
      }

      setTimeout(() => {
        // Reset form & show success modal / alert
        form.reset();
        form.classList.remove('was-validated');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        // Close inquiry modal if open
        const modalElem = form.closest('.modal');
        if (modalElem && window.bootstrap) {
          const modalInstance = bootstrap.Modal.getInstance(modalElem);
          if (modalInstance) modalInstance.hide();
        }

        showToastNotification('Inquiry Sent Successfully!', 'Thank you for contacting Mamun Autos. Our senior automotive consultant will call or message you shortly.', 'success');
      }, 900);
    }, false);
  });
}

/**
 * Save to Favorites / Wishlist in LocalStorage
 */
function toggleFavorite(buttonElem, carId) {
  let favorites = [];
  try {
    favorites = JSON.parse(localStorage.getItem('mamun_favorites') || '[]');
  } catch (e) {
    favorites = [];
  }

  const icon = buttonElem.querySelector('i');
  const index = favorites.indexOf(carId);

  if (index > -1) {
    favorites.splice(index, 1);
    buttonElem.classList.remove('active');
    if (icon) {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }
    showToastNotification('Removed from Saved Cars', 'Vehicle removed from your saved list.', 'info');
  } else {
    favorites.push(carId);
    buttonElem.classList.add('active');
    if (icon) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    }
    showToastNotification('Saved to Favorites', 'Vehicle saved to your favorites.', 'success');
  }

  localStorage.setItem('mamun_favorites', JSON.stringify(favorites));
}

/**
 * Toast Notification Helper
 */
function showToastNotification(title, message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed bottom-0 start-50 translate-middle-x p-3';
    container.style.zIndex = '1090';
    document.body.appendChild(container);
  }

  const toastId = 'toast_' + Date.now();
  const iconClass = type === 'success' ? 'fa-circle-check text-success' : 'fa-circle-info text-primary';
  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center shadow-lg border-0 bg-dark text-white" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-start gap-3 p-3">
          <i class="fa-solid ${iconClass} fs-4 mt-1"></i>
          <div>
            <h6 class="mb-1 text-gold fw-bold">${title}</h6>
            <p class="mb-0 text-silver small">${message}</p>
          </div>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHtml);
  const toastElem = document.getElementById(toastId);
  if (toastElem && window.bootstrap) {
    const bsToast = new bootstrap.Toast(toastElem, { delay: 4000 });
    bsToast.show();
    toastElem.addEventListener('hidden.bs.toast', () => toastElem.remove());
  }
}

window.toggleFavorite = toggleFavorite;
window.showToastNotification = showToastNotification;
