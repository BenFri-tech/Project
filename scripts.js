document.addEventListener('DOMContentLoaded', () => {
    // Scroll-Position auf den oberen Rand setzen
    window.scrollTo(0, 0);

    // Smooth Scroll für Navigation Links mit langsamerer Geschwindigkeit
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();  // Verhindert das normale Verlinkungsverhalten

            // Wähle das Ziel-Element, auf das der Link verweist
            const targetElement = document.querySelector(this.getAttribute('href'));

            // Langsame Scroll-Funktion
            smoothScrollTo(targetElement);
        });
    });

    // Partikel-Animationen initialisieren (wie zuvor)
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00bcd4'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00bcd4',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});

// Langsame Scroll-Funktion mit `requestAnimationFrame`
function smoothScrollTo(target) {
    const startPosition = window.scrollY || window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 3500; // Dauer der Animation in Millisekunden (langsamer)
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Ease-In-Out-Function für eine sanfte Animation
function easeInOutCubic(t, b, c, d) {
    let ts = (t /= d) * t;
    let tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

document.addEventListener('DOMContentLoaded', () => {
    // Parallax-Effekt
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });

    // Smooth Scroll mit Animation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Intersection Observer für Scroll-Animationen
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.content-box').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(box);
});

// Verbesserte Partikel-Konfiguration
particlesJS('particles-js', {
    particles: {
        number: { value: 100 },
        color: { value: ['#00bcd4', '#3f51b5', '#e91e63'] },
        shape: { type: 'circle' },
        opacity: {
            value: 0.6,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});
