//Nav bar and the login and the sign-up button

document.querySelectorAll(".navbar a, .btn").forEach(element => {
    element.addEventListener("mouseover", () => {
      element.style.transition = "color 0.3s, background-color 0.3s";
    });
  });

//images

document.querySelectorAll('.image-container img').forEach(image => {
    image.addEventListener('mouseover', () => {
      document.querySelector('.image-container').style.animationPlayState = 'paused';
    });
    image.addEventListener('mouseout', () => {
      document.querySelector('.image-container').style.animationPlayState = 'running';
    });
  });

  //-- ---------------------------------------------------------------------- 


  // Animate elements when they come into view
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

// Create the intersection observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
});

// Observe all step cards
document.querySelectorAll('.step-card').forEach(card => {
    observer.observe(card);
});

// Add hover effect to step cards
document.querySelectorAll('.step-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0)';
    });
});

// Animate main action button on hover
const mainAction = document.querySelector('.main-action');
mainAction.addEventListener('mouseenter', () => {
    mainAction.style.transform = 'translateY(-2px)';
});

mainAction.addEventListener('mouseleave', () => {
    mainAction.style.transform = 'translateY(0)';
});

function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}