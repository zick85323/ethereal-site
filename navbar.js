// Navbar configuration
const navItems = [
  {
    name: "Home",
    path: "/",
    icon: "fa-home"  // Using Font Awesome icons
  },
  {
    name: "Features",
    path: "/features",
    icon: "fa-star"
  },
  {
    name: "Register",
    path: "/register",
    icon: "fa-user-plus"
  },
  {
    name: "Discussion",
    path: "/discussion",
    icon: "fa-comments"
  }
];

// Navbar initialization
function initNavbar() {
  // Create navbar element
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  
  // Create logo
  const logo = document.createElement('div');
  logo.className = 'navbar-logo';
  logo.innerHTML = '<img src="assets/icons.png" alt="Ethereal Icon" class="icon" />';
  navbar.appendChild(logo);
  
  // Create menu
  const menu = document.createElement('div');
  menu.className = 'navbar-menu';
  
  // Add nav items
  navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.path;
    link.className = 'navbar-link';
    link.innerHTML = `<i class="fas ${item.icon}"></i><span>${item.name}</span>`;
    menu.appendChild(link);
  });
  
  // Add CTA button
  const cta = document.createElement('a');
  cta.className = 'navbar-cta';
  cta.href = "https://wa.me/234XXXXXXXXXX";
  cta.target = "_blank";
  cta.innerHTML = '<span>🚀 Get Started</span>';
  menu.appendChild(cta);
  
  navbar.appendChild(menu);
  
  // Insert navbar at the top of the body
  document.body.insertBefore(navbar, document.body.firstChild);
  
  // Set active link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

// Export for use in main.js
export { initNavbar };