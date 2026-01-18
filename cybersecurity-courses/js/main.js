/* ================================
   MAIN JAVASCRIPT
   Handles navigation, interactions, and page logic
   ================================ */

// ========== NAVIGATION FUNCTIONS ==========
/**
 * Initialize navigation
 * Sets up click handlers for navigation links
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = getCurrentPageFromURL();

  navLinks.forEach(link => {
    // Set active class on current page
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }

    // Add click handler for smooth navigation
    link.addEventListener('click', function (e) {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.parentElement.classList.toggle('mobile-open');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.parentElement.classList.remove('mobile-open');
      });
    });
  }
}

/**
 * Get current page name from URL or filename
 * @returns {string} Current page identifier
 */
function getCurrentPageFromURL() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  return filename.replace('.html', '');
}

// ========== COURSES DISPLAY FUNCTIONS ==========
/**
 * Render courses in grid
 * @param {Array} courses - Array of course objects
 * @param {string} containerId - ID of container element
 */
function renderCourses(courses, containerId = 'courses-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = courses.map(course => `
    <div class="card course-card" data-course-id="${course.id}">
      <div class="course-icon" style="font-size: 3rem; margin-bottom: 1rem;">${course.image}</div>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      
      <div style="margin: 1rem 0;">
        <span class="level">${course.level}</span>
      </div>

      <div style="display: flex; justify-content: space-between; margin: 1rem 0; font-size: 0.9rem;">
        <span>⏱️ ${course.duration}</span>
        <span>👥 ${course.students}</span>
        <span>⭐ ${course.rating}/5</span>
      </div>

      <div class="price">${course.price}</div>

      <button class="btn btn-primary btn-view-detail" 
              onclick="viewCourseDetail(${course.id})" 
              style="width: 100%; margin-top: 1rem;">
        Xem Chi Tiết
      </button>
    </div>
  `).join('');
}

/**
 * View course detail page
 * @param {number} courseId - ID of course to view
 */
function viewCourseDetail(courseId) {
  // Store selected course in sessionStorage for detail page
  sessionStorage.setItem('selectedCourseId', courseId);
  // Navigate to detail page
  window.location.href = 'course-detail.html';
}

// ========== FILTER FUNCTIONS ==========
/**
 * Filter courses by level/category
 */
function setupCourseFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      // Filter courses
      if (filterValue === 'all') {
        renderCourses(coursesData);
      } else {
        const filtered = coursesData.filter(course => course.category === filterValue);
        renderCourses(filtered);
      }
    });
  });
}

// ========== COURSE DETAIL PAGE FUNCTIONS ==========
/**
 * Load and display course detail
 */
function loadCourseDetail() {
  const courseId = parseInt(sessionStorage.getItem('selectedCourseId')) || 1;
  const course = coursesData.find(c => c.id === courseId);
  const details = courseDetails[courseId];

  if (!course || !details) return;

  // Update page title
  document.title = `${course.title} - Cybersecurity Courses`;

  // Header
  const headerTitle = document.getElementById('course-title');
  if (headerTitle) {
    headerTitle.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">${course.image}</div>
      <h1>${course.title}</h1>
      <p>${course.fullDescription || course.description}</p>
      <div style="margin-top: 1rem;">
        <span class="level">${course.level}</span>
      </div>
    `;
  }

  // Main content
  const contentMain = document.getElementById('course-content-main');
  if (contentMain) {
    contentMain.innerHTML = `
      <div>
        <h2>Bạn sẽ học được gì?</h2>
        <ul style="list-style: none; padding: 0;">
          ${details.learnings.map(learning => `
            <li style="padding: 0.75rem 0; padding-left: 1.5rem; position: relative;">
              <span style="position: absolute; left: 0; color: var(--accent-green); font-weight: bold;">✓</span>
              ${learning}
            </li>
          `).join('')}
        </ul>

        <h2 style="margin-top: 2rem;">Chương Trình Học Tập</h2>
        <div>
          ${details.curriculum.map((section, index) => `
            <div class="curriculum-item" onclick="toggleCurriculum(${index})">
              <h4>${section.week}: ${section.title}</h4>
              <p>${section.topics.join(' • ')}</p>
            </div>
          `).join('')}
        </div>

        <h2 style="margin-top: 2rem;">Yêu Cầu Đầu Vào</h2>
        <ul style="list-style: none; padding: 0;">
          ${details.requirements.map(req => `
            <li style="padding: 0.5rem 0;">• ${req}</li>
          `).join('')}
        </ul>

        <h2 style="margin-top: 2rem;">Đối Tượng Phù Hợp</h2>
        <ul style="list-style: none; padding: 0;">
          ${details.targetAudience.map(target => `
            <li style="padding: 0.5rem 0;">• ${target}</li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  // Sidebar
  const sidebar = document.getElementById('course-sidebar-content');
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="sidebar-item">
        <strong>Giá tiền:</strong>
        <div class="price" style="margin-top: 0.5rem;">${course.price}</div>
      </div>

      <div class="sidebar-item" style="margin-top: 1rem;">
        <strong>Thời lượng:</strong>
        <p style="margin: 0.5rem 0;">${course.duration}</p>
      </div>

      <div class="sidebar-item">
        <strong>Level:</strong>
        <p style="margin: 0.5rem 0;">${course.level}</p>
      </div>

      <div class="sidebar-item">
        <strong>Học viên:</strong>
        <p style="margin: 0.5rem 0;">${course.students} người</p>
      </div>

      <div class="sidebar-item">
        <strong>Đánh giá:</strong>
        <p style="margin: 0.5rem 0;">⭐ ${course.rating}/5</p>
      </div>

      <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">
        💳 Mua Khóa Học
      </button>

      <button class="btn btn-secondary" style="width: 100%; margin-top: 0.5rem;">
        ❤️ Lưu khóa học
      </button>
    `;
  }
}

/**
 * Toggle curriculum section
 * @param {number} index - Index of curriculum item
 */
function toggleCurriculum(index) {
  const items = document.querySelectorAll('.curriculum-item');
  if (items[index]) {
    items[index].style.backgroundColor = items[index].style.backgroundColor === 'var(--secondary-dark)' 
      ? 'rgba(0, 212, 255, 0.05)' 
      : 'var(--secondary-dark)';
  }
}

// ========== INSTRUCTOR PAGE FUNCTIONS ==========
/**
 * Render instructors
 */
function renderInstructors() {
  const container = document.getElementById('instructors-grid');
  if (!container) return;

  container.innerHTML = instructorsData.map(instructor => `
    <div class="instructor-card">
      <div class="instructor-avatar">${instructor.avatar}</div>
      <h3 style="color: var(--accent-cyan);">${instructor.name}</h3>
      <p style="color: var(--accent-green); font-weight: 600; margin-bottom: 1rem;">${instructor.title}</p>
      <p>${instructor.bio}</p>

      <div style="margin: 1.5rem 0;">
        <strong style="color: var(--accent-cyan);">Chuyên môn:</strong>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
          ${instructor.specialties.map(spec => `
            <span class="instructor-badge">${spec}</span>
          `).join('')}
        </div>
      </div>

      <div style="margin: 1rem 0;">
        <strong style="color: var(--accent-cyan);">Chứng chỉ:</strong>
        <div style="margin-top: 0.5rem;">
          ${instructor.certifications.map(cert => `
            <span style="display: inline-block; background-color: var(--accent-green); 
                         color: var(--primary-dark); padding: 0.25rem 0.75rem; 
                         border-radius: 4px; margin: 0.25rem; font-weight: 600; font-size: 0.85rem;">
              ${cert}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="achievements">
        <strong style="color: var(--accent-cyan); display: block; margin-bottom: 0.5rem;">Thành tích:</strong>
        <ul>
          ${instructor.achievements.map(achievement => `
            <li>${achievement}</li>
          `).join('')}
        </ul>
      </div>

      <a href="mailto:${instructor.contact}" class="btn btn-secondary" style="width: 100%; margin-top: 1rem;">
        Liên Hệ Giảng Viên
      </a>
    </div>
  `).join('');
}

// ========== CONTACT FORM FUNCTIONS ==========
/**
 * Handle contact form submission
 */
function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // Validate form
  if (!name || !email || !message) {
    alert('Vui lòng điền đầy đủ thông tin');
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Email không hợp lệ');
    return;
  }

  // Mock success message (in real app, would send to backend)
  console.log('Form submitted:', { name, email, message });
  alert('✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong 24 giờ.');

  // Reset form
  form.reset();
}

// ========== SMOOTH SCROLL & ANIMATIONS ==========
/**
 * Add scroll animation to elements
 */
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections
  document.querySelectorAll('.card, section > h2').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-in-out';
    observer.observe(el);
  });
}

// ========== SEARCH FUNCTIONALITY ==========
/**
 * Search courses
 * @param {string} query - Search query
 * @returns {Array} Filtered courses
 */
function searchCourses(query) {
  const searchQuery = query.toLowerCase();
  return coursesData.filter(course => 
    course.title.toLowerCase().includes(searchQuery) ||
    course.description.toLowerCase().includes(searchQuery) ||
    course.level.toLowerCase().includes(searchQuery)
  );
}

// ========== INITIALIZATION ==========
/**
 * Initialize all page functions on load
 */
document.addEventListener('DOMContentLoaded', function () {
  // Common initialization for all pages
  initNavigation();
  setupScrollAnimations();

  // Page-specific initialization
  const currentPage = getCurrentPageFromURL();

  switch (currentPage) {
    case 'index':
    case '':
      // Home page - no special initialization needed
      break;

    case 'courses':
      if (coursesData) {
        renderCourses(coursesData);
        setupCourseFilters();
      }
      break;

    case 'course-detail':
      loadCourseDetail();
      break;

    case 'instructors':
      if (instructorsData) {
        renderInstructors();
      }
      break;

    case 'contact':
      const contactForm = document.querySelector('.contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
      }
      break;
  }
});

// ========== UTILITY FUNCTIONS ==========
/**
 * Format price in Vietnamese currency
 * @param {number} price - Price amount
 * @returns {string} Formatted price
 */
function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
}

/**
 * Get URL parameter
 * @param {string} param - Parameter name
 * @returns {string} Parameter value
 */
function getUrlParameter(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Export functions for testing (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderCourses,
    searchCourses,
    formatPrice,
    getCurrentPageFromURL
  };
}
