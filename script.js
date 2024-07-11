/* Smooth scrolling for navigation */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Fog effect on home page
document.querySelector('#home').addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  
  // Create a fog effect
  const fogEffect = document.createElement('div');
  fogEffect.className = 'fog';
  fogEffect.style.left = mouseX + 'px';
  fogEffect.style.top = mouseY + 'px';
  document.body.appendChild(fogEffect);

  // Remove the fog effect after a short duration
  setTimeout(() => {
      fogEffect.remove();
  }, 1000);
});

// projects page
function openProjectDetails(url) {
  // Create a full-screen overlay
  const overlay = document.createElement('div');
  overlay.className = 'project-overlay';

  // Apply black background for the second project
  if (url === 'project2-details.html') {
      overlay.classList.add('black-bg');
  }

  overlay.innerHTML = `
      <button class="close-btn" onclick="closeProjectDetails()">✖</button>
      <div class="content">
          <iframe src="${url}" frameborder="0" style="width: 100%; height: 100%;"></iframe>
      </div>
  `;

  // Append overlay to the body
  document.body.appendChild(overlay);

  // Add animation effect
  setTimeout(() => {
      overlay.style.opacity = '1';
  }, 10);
}

function closeProjectDetails() {
  const overlay = document.querySelector('.project-overlay');
  if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => {
          overlay.remove();
      }, 300);
  }
}

// Experience page
