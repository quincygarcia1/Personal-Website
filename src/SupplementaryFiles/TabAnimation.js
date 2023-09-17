/*
const elements = {
    aboutText1: document.getElementById("aboutText1"),
    aboutText2: document.getElementById("aboutText2"),
    projectsText1: document.getElementById("projectsText1"),
    projectsText2: document.getElementById("projectsText2"),
    contactText1: document.getElementById("contactText1"),
    contactText2: document.getElementById("contactText2")
};

const aboutTexts = [
    "About me",
    "What I'm up to",
    "My resumé"
];

const projectsTexts = [
    "My projects",
    "HTML",
    "Django",
    "Flutter",
    "SQL",
    "React"
];

const contactTexts = [
    "Contacts",
    "LinkedIn",
    "Email"
];

const morphTime = 1;
const cooldownTime = 0.25;

let aboutIndex = aboutTexts.length - 1;
let projectIndex = projectsTexts.length - 1;
let contactIndex = contactTexts.length - 1;

elements.aboutText1.textContent = aboutTexts[aboutIndex % aboutTexts.length];
elements.aboutText2.textContent = aboutTexts[(aboutIndex + 1) % aboutTexts.length];
elements.projectsText1.textContent = projectsTexts[projectIndex % projectsTexts.length];
elements.projectsText2.textContent = projectsTexts[(projectIndex + 1) % projectsTexts.length];
elements.contactText1.textContent = contactTexts[contactIndex % contactTexts.length];
elements.contactText2.textContent = contactTexts[(contactIndex + 1) % contactTexts.length];

let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

function doMorph(index) {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction, index);
}

function setMorph(fraction, index) {
    let el;
    let elIndex;
    let texts = [aboutTexts, projectsTexts, contactTexts];
    switch(index){
        case 1:
            el = [elements.aboutText1, elements.aboutText2];
            elIndex = aboutIndex;
            break;
        case 2:
            el = [elements.projectsText1, elements.projectsText2];
            elIndex = projectIndex;
            break;
        case 3:
            el = [elements.contactText1, elements.contactText2];
            elIndex = contactIndex;
            break;
        default:
            break;
    }

    el[1].style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    el[1].style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    el[0].style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	el[0].style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    el[0].textContent = texts[index - 1][elIndex % texts[index - 1].length];
    el[1].textContent = texts[index - 1][(elIndex + 1) % texts[index - 1].length];
}

function doCooldown(index) {
    morph = 0;

    switch(index){
        case 1:
            elements.aboutText2.style.filter = "";
            elements.aboutText2.style.opacity = "100%";

            elements.aboutText1.style.filter = "";
            elements.aboutText1.style.opacity = "0%";
            break;
        case 2:
            elements.projectsText2.style.filter = "";
            elements.projectsText2.style.opacity = "100%";

            elements.projectsText1.style.filter = "";
            elements.projectsText1.style.opacity = "0%";
            break;
        case 3:
            elements.contactText2.style.filter = "";
            elements.contactText2.style.opacity = "100%";

            elements.contactText1.style.filter = "";
            elements.contactText1.style.opacity = "0%";
            break;
        default:
            break;
    }
}

export function animate(index) {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let incremetationIndexVal = cooldown > 0;
    let timeDiff = (newTime - time) / 1000;
    time = newTime;

    cooldown -= timeDiff;

    if (cooldown <= 0) {
        if (incremetationIndexVal){
            switch(index){
                case 1:
                    aboutIndex ++;
                    break;
                case 2:
                    projectIndex ++;
                    break;
                case 3:
                    contactIndex ++;
                    break;
                default:
                    break;
            }
            doMorph(index);
            
        }
    } else {
        doCooldown(index);
    }
}

*/
