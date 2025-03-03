// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Mobile client area dropdown
  const mobileClientDropdownBtn = document.getElementById(
    "mobile-client-dropdown-btn"
  );
  const mobileClientDropdown = document.getElementById(
    "mobile-client-dropdown"
  );

  if (mobileClientDropdownBtn && mobileClientDropdown) {
    mobileClientDropdownBtn.addEventListener("click", function (e) {
      e.preventDefault();
      mobileClientDropdown.classList.toggle("hidden");
      // Rotate arrow icon
      const icon = mobileClientDropdownBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("rotate-180");
      }
    });
  }

  // Header scroll effect
  const header = document.querySelector("header");
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      if (scrollToTopBtn) {
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
      }
    } else {
      header.classList.remove("scrolled");
      if (scrollToTopBtn) {
        scrollToTopBtn.classList.add("opacity-0", "invisible");
      }
    }

    // Animate elements on scroll with improved performance
    animateOnScroll(".feature-card");
    animateOnScroll(".faq-item");
    animateOnScroll(".pricing-row");
    animateOnScroll(".pricing-card");
  });

  //* filepath: /c:/Users/aadil/OneDrive/Desktop/coding/sch/main.js */

// Update the animateFeatures function
function animateFeatures() {
  const features = document.querySelectorAll('.feature-card');
  
  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add small delay before adding visible class
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // 150ms delay between each card
        observer.unobserve(entry.target);
      }
    });
  }, options);

  features.forEach((feature) => {
    observer.observe(feature);
  });
}

// Call this function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // ... existing code ...
  animateFeatures();
});

// Also check on scroll
window.addEventListener('scroll', function() {
  // ... existing scroll event code ...
  animateFeatures();
}, { passive: true });

  // Scroll to top button
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Preloader - with failsafe timeout
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // Normal preloader removal
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1500);

    // Failsafe: force remove preloader after 5 seconds no matter what
    setTimeout(() => {
      if (preloader.style.display !== "none") {
        console.log("Forcing preloader removal via failsafe");
        preloader.style.opacity = "0";
        preloader.style.display = "none";
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
      }
    }, 5000);
  }

  // Set animation delay for pricing cards and feature cards
  const pricingCards = document.querySelectorAll(".pricing-card");
  pricingCards.forEach((card, index) => {
    card.style.setProperty("--index", index);
  });

  // Enhanced feature card animations with staggered delays
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.setProperty("--index", index);

    // Add animation to child elements
    const icon = card.querySelector(".feature-icon");
    const heading = card.querySelector("h3");
    const paragraph = card.querySelector("p");

    if (icon) icon.style.setProperty("--index", index);
    if (heading) heading.style.setProperty("--index", index);
    if (paragraph) paragraph.style.setProperty("--index", index);
  });

  // Enhanced feature card animations
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".feature-icon i");
      if (icon) {
        icon.classList.add("animate-pulse");
      }
    });

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".feature-icon i");
      if (icon) {
        icon.classList.remove("animate-pulse");
      }
    });
  });

  // Initial animation check
  setTimeout(() => {
    animateOnScroll(".feature-card");
    animateOnScroll(".faq-item");
    animateOnScroll(".pricing-row");
    animateOnScroll(".pricing-card");
  }, 100);

  // Close mobile dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (mobileClientDropdown && mobileClientDropdownBtn) {
      if (
        !mobileClientDropdownBtn.contains(e.target) &&
        !mobileClientDropdown.contains(e.target)
      ) {
        mobileClientDropdown.classList.add("hidden");
        const icon = mobileClientDropdownBtn.querySelector("i");
        if (icon) {
          icon.classList.remove("rotate-180");
        }
      }
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href !== "#") {
        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
          // Offset for fixed header
          const headerHeight = document.querySelector("header").offsetHeight;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Fix for scrollbar in pricing section
  const pricingTableContainer = document.querySelector(
    ".pricing-table-container"
  );
  if (pricingTableContainer) {
    // Ensure the container width is properly set to prevent horizontal scrollbar
    pricingTableContainer.style.width = "100%";
    pricingTableContainer.style.overflowX = "auto";
    pricingTableContainer.style.overflowY = "hidden";
  }
});

// Function to animate elements when they come into view
function animateOnScroll(selector) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Add visible class when element is in viewport
    if (elementPosition < windowHeight - 50) {
      element.classList.add('visible');
    }
  });
}
