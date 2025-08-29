
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }

  // Animate progress bars
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.width = value + '%';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 🔁 Add click event to mobile menu button
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMobileMenu);
    }

    // 🚀 Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        // 🧹 Hide mobile menu after clicking a link (on small screens)
        const mobileMenu = document.getElementById('mobile-menu');
        if (window.innerWidth < 768 && mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // 📊 Animate progress bars when in view
    const impactSection = document.querySelector('#impact');
    if (impactSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateProgressBars();
          }
        });
      });
      observer.observe(impactSection);
    }

    // 📨 Contact form submission (optional)
    const contactForm = document.querySelector('#contact-form');
     const modal = document.querySelector("#thank-you-modal");
      const closeBtn = document.querySelector("#close-modal");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          // Submit the form to FormSubmit using a hidden iframe
          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          contactForm.target = iframe.name = "hidden-iframe";
          document.body.appendChild(iframe);

          contactForm.submit();

          // Show thank you modal
          modal.classList.remove("hidden");
          modal.classList.add("flex");

          // Reset form
          contactForm.reset();
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.classList.add("hidden");
        });
      }
    });
  
