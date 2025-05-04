document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    gridItems.forEach(item => {
        observer.observe(item);
    });
});

// hover
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.media img');

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.classList.add('zoom'); // Add zoom class on mouse enter
        });

        image.addEventListener('mouseleave', () => {
            image.classList.remove('zoom'); // Remove zoom class on mouse leave
        });
    });
});

// about]
document.getElementById('aboutBtn').addEventListener('click', function() {
    const content = document.getElementById('content');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const aboutInfo = document.getElementById('aboutInfo');

    // Show the content section
    content.classList.remove('hidden');

    // Show the welcome message
    welcomeMessage.classList.remove('hidden');

    // After 2 seconds, show the about info
    setTimeout(() => {
        welcomeMessage.classList.add('hidden');
        aboutInfo.classList.remove('hidden');
    }, 2000);
});

//translaet
const translateText = async (text, targetLanguage) => {
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.data.translations[0].translatedText;
  };
  
  // Usage
  translateText("Hello, how are you?", "mr").then(translated => {
    console.log(translated); // Outputs: "नमस्कार, तुम्ही कसे आहात?"
  });

//   succses
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
// document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate successful login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login logic (e.g., API call to your server)

    // Display success message
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Simulate successful login
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
    
        // Here you can add your login logic (e.g., API call to your server)
    
        // Display success message
        document.getElementById('loginMessage').textContent = 'Login successfully!';
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Simulate successful registration
        const regUsername = document.getElementById('regUsername').value;
        const regPassword = document.getElementById('regPassword').value;
    
        // Here you can add your registration logic (e.g., API call to your server)
    
        // Display success message
        document.getElementById('registerMessage').textContent = 'Registration successful! You can now log in.';
    });
    
    document.getElementById('showRegister').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('registerContainer').style.display = 'block';
    });
    
    document.getElementById('showLogin').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('registerContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
    });
    // REGISTER
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const messageElement = document.getElementById('message');
    
        // Simple validation
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                // Here you can add code to send the data to a server
                messageElement.textContent = 'Registration successful!';
                messageElement.style.color = 'green';
            } else {
                messageElement.textContent = 'Passwords do not match!';
                messageElement.style.color = 'red';
            }
        } else {
            messageElement.textContent = 'Please fill in all fields.';
            messageElement.style.color = 'red';
        }
    });