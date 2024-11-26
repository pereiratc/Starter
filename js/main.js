// Smooth scrolling for navigation
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const section = document.querySelector(event.target.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Form validation (optional)
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Message sent successfully!');
  });