const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const resumeBtns = document.querySelectorAll('.resume-btn');

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right')
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left')

const navLinks = document.querySelectorAll('header nav a');
const LogoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const MenuIcon = document.querySelector('#menu-icon');
const NavaBar = document.querySelector('header nav');

MenuIcon.addEventListener('click', (e) => {
    MenuIcon.classList.toggle('bx-x');
    NavaBar.classList.toggle('active');
})

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    },1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    },1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });
    MenuIcon.classList.remove('bx-x');
    NavaBar.classList.remove('active');
}
navLinks.forEach((link,idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            },1100);
        }
    });
});

LogoLinks.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        },1100);
    }
})

const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = htmlElement.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
        btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}
arrowRight.addEventListener('click', () => {
    if (index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});
arrowLeft.addEventListener('click', () => {
    if (index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});

function updateTextBasedOnSize() {
    const spans = document.querySelectorAll("h2 span");

    const isMobile =  (368 >= window.innerWidth <= 468 &&  480 >= window.innerHeight <= 642);

    console.log("Taille de l'écran : ", window.innerWidth, "x", window.innerHeight, " | Mode Mobile :", isMobile);

    spans.forEach(span => {
        if (isMobile) {
            if (span.getAttribute("data-text") === "Elève ingénieur en informatique") {
                span.setAttribute("data-text", "Élève ingénieur IT");
                span.textContent = "Élève ingénieur IT";
            } else if (span.getAttribute("data-text") === "Développeur Web junior") {
                span.setAttribute("data-text", "Dév. Web jr");
                span.textContent = "Dév. Web jr";
            } else if (span.getAttribute("data-text") === "Développeur Mobile junior") {
                span.setAttribute("data-text", "Dév. Mobile jr");
                span.textContent = "Dév. Mobile jr";
            }
        } else {
            if (span.getAttribute("data-text") === "Élève ingénieur IT") {
                span.setAttribute("data-text", "Elève ingénieur en informatique");
                span.textContent = "Elève ingénieur en informatique";
            } else if (span.getAttribute("data-text") === "Développeur Web jr") {
                span.setAttribute("data-text", "Développeur Web junior");
                span.textContent = "Développeur Web junior";
            } else if (span.getAttribute("data-text") === "Développeur Mobile jr") {
                span.setAttribute("data-text", "Développeur Mobile junior");
                span.textContent = "Développeur Mobile junior";
            }
        }
    });
}

window.addEventListener("load", updateTextBasedOnSize);
window.addEventListener("resize", updateTextBasedOnSize);

document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("download-cv");

    if (downloadButton) {
        downloadButton.addEventListener("click", function (event) {
            const cvFile = "assets/CV_Alain_Datouo.pdf";

            fetch(cvFile)
                .then(response => {
                    console.log("Statut de la réponse :", response.status);
                    if (!response.ok) {
                        alert("⚠️ Le fichier CV n'est pas disponible. Vérifiez le chemin : " + cvFile);
                        event.preventDefault();
                    }
                })
                .catch(error => {
                    console.error("Erreur de téléchargement :", error);
                    alert("Une erreur s'est produite lors du téléchargement.");
                    event.preventDefault();
                });
        });
    } else {
        console.error("❌ Erreur : Le bouton 'Télécharger mon CV' n'existe pas.");
    }
});

document.getElementById("rar-download").addEventListener("click", function (event) {
    const back_to_the_past = "images/Back_to_the_past.rar";

    fetch(back_to_the_past)
        .then(response => {
            if (!response.ok) {
                alert("Le fichier est introuvable");
                event.preventDefault();
            }
        })
        .catch(error => {
            console.error("Erreur s'est introuvable:", error);
            alert("Une erreur est arriver");
            event.preventDefault();
        })
})

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formMessage = document.createElement("p");
            formMessage.id = "form-message";
            this.appendChild(formMessage);

            const formData = new FormData(this);

            fetch("https://formspree.io/f/xvgzdjad", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }).then(response => {
                if (response.ok) {
                    formMessage.textContent = "✅ Message envoyé avec succès !";
                    formMessage.style.color = "green";
                    contactForm.reset();
                } else {
                    formMessage.textContent = "❌ Une erreur s'est produite. Réessayez.";
                    formMessage.style.color = "red";
                }
            }).catch(error => {
                console.error("Erreur de soumission :", error);
                formMessage.textContent = "⚠️ Erreur réseau. Vérifiez votre connexion.";
                formMessage.style.color = "red";
            });
        });
    } else {
        console.error("❌ Erreur : Le formulaire 'contact-form' n'existe pas.");
    }
});

