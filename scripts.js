document.addEventListener('DOMContentLoaded', () => {
    // Scroll-Position auf den oberen Rand setzen
    window.scrollTo(0, 0);

    // Smooth Scroll für Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();  // Verhindert das normale Verlinkungsverhalten

            // Wähle das Ziel-Element, auf das der Link verweist
            const targetElement = document.querySelector(this.getAttribute('href'));

            // Scrollen zu dem Ziel-Element mit Offset für die Navigation
            targetElement.scrollIntoView({
                behavior: 'smooth', // Sanftes Scrollen
                block: 'start'  // Scrollt zu Beginn der Sektion
            });
        });
    });

    // Particle.js Initialisierung (falls du diesen Code schon vorher hattest)
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
