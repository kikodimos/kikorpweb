// =======================
// SMOOTH SCROLL
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// =======================
// SCROLL ANIMACIJE
// =======================
const sections = document.querySelectorAll("section");

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});


// =======================
// BUTTON GLOW EFFECT
// =======================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px red';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});


// =======================
// TIKTOK LIVE STATUS (FAKE)
// =======================
function checkLive() {
  const live = Math.random() > 0.5;
  const status = document.getElementById('liveStatus');

  if (status) {
    status.innerText = live ? '🟢 ONLINE' : '🔴 OFFLINE';
  }
}

// pokreni odmah + refresh
checkLive();
setInterval(checkLive, 5000);


// =======================
// EXTRA: SCROLL PROGRESS BAR
// =======================
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.background = "red";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;

  progressBar.style.width = progress + "%";
});
