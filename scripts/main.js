// Modern UI/UX Enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initNavigation();
    initScrollEffects();
    initAnimations();
    initFormHandling();
    initThemeTransitions();
    initScrollIndicator();
});

// Enhanced Navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Advanced Scroll Effects
function initScrollEffects() {
    // Active navigation link highlighting with smooth transitions
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current link
                const activeLink = document.querySelector(`a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Enhanced Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                entry.target.classList.add('loaded');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Apply animations to various elements
    const elementsToAnimate = document.querySelectorAll(
        '.portfolio-item, .blog-post, .stat, .contact-item, .about-text'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('loading');
        el.style.animationDelay = `${index * 0.1}s`;
        animateOnScroll.observe(el);
    });

    // Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let index = 0;
        
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Floating animation for profile image
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    if (profilePlaceholder) {
        profilePlaceholder.classList.add('floating');
    }

    // Stagger animation for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('fade-in-up');
    });
}

// Enhanced Form Handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        // Add floating label effect
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Check if already has value
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });

        // Form submission with enhanced UX
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn');
            const originalText = submitBtn.textContent;
            
            // Loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.style.pointerEvents = 'none';
            submitBtn.style.opacity = '0.7';
            
            // Simulate form submission (replace with actual implementation)
            setTimeout(() => {
                // Success state
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'rgba(34, 197, 94, 0.2)';
                submitBtn.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                
                // Reset form
                contactForm.reset();
                inputs.forEach(input => {
                    input.parentElement.classList.remove('focused');
                });
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.pointerEvents = 'auto';
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                }, 3000);
            }, 2000);
        });
    }
}

// Theme and Visual Enhancements
function initThemeTransitions() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class after page loads
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    });

    // Enhanced cursor interactions for portfolio and blog items
    const interactiveItems = document.querySelectorAll('.portfolio-item, .blog-post');
    
    interactiveItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Scroll Progress Indicator
function initScrollIndicator() {
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            scrollIndicator.style.transform = `scaleX(${scrollPercent})`;
        });
    }
}

// Performance optimizations
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Any additional scroll-based animations can go here
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Preload critical resources
const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

// Add any image preloading here if needed
// preloadImage('path/to/important-image.jpg');

// Error handling for failed animations
window.addEventListener('error', (e) => {
    console.warn('Animation error:', e);
    // Fallback for failed animations
    document.querySelectorAll('.loading').forEach(el => {
        el.classList.remove('loading');
        el.classList.add('loaded');
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 350px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.portfolio-item, .blog-post, .stat');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Remove the typing effect for now as it might interfere with the highlight class
        // Uncomment the line below if you want the typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Scroll to top functionality
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// Portfolio filter functionality (if needed in the future)
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Dark mode toggle (optional feature)
function createDarkModeToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '🌙';
    toggleBtn.className = 'dark-mode-toggle';
    toggleBtn.style.cssText = `
        position: fixed;
        top: 100px;
        left: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #333;
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toggleBtn);
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleBtn.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// Uncomment to enable dark mode toggle
// document.addEventListener('DOMContentLoaded', createDarkModeToggle);

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Analytics tracking (placeholder for Google Analytics or similar)
function trackEvent(eventName, eventCategory, eventLabel) {
    // Placeholder for analytics tracking
    console.log(`Event tracked: ${eventName} - ${eventCategory} - ${eventLabel}`);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, {
    //     event_category: eventCategory,
    //     event_label: eventLabel
    // });
}

// Track portfolio item clicks
document.addEventListener('DOMContentLoaded', function() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const projectName = e.target.closest('.portfolio-item').querySelector('h3').textContent;
            trackEvent('portfolio_click', 'engagement', projectName);
        });
    });
});

// Track blog post clicks
document.addEventListener('DOMContentLoaded', function() {
    const blogLinks = document.querySelectorAll('.blog-post a');
    blogLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const postTitle = e.target.textContent;
            trackEvent('blog_click', 'engagement', postTitle);
        });
    });
});

// Error handling for broken images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.log('Image failed to load:', this.src);
        });
    });
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

console.log('Portfolio website loaded successfully! 🚀');
