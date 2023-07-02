let typed = new Typed('.auto-type', {
    strings: ["I'm From Madhubani (Bihar),", " I am first year student of Bihar Engineering University Patna B.Tech CSE (IOT) branch.", "My hobby is coding.", "I am a fresher and ", "I have made a good pucker on 10 programming languages", "​Like React, Java, Javascript, HTML,  CSS, Nodejs ", "Expressjs, C, PHP, Python ", "​And database in SQL or NO SQL Like Mongodb or My SQL so many programming languages", "And we can do something in that programming language", "And if I don't know anything then I will try to learn it and I will increase my skill.", "  Thank you for visiting my portfolio website. Feel free to reach out to me for any inquiries or collaboration opportunities.", "I'm From Madhubani (Bihar), I am first year student of Bihar Engineering University Patna B.Tech CSE (IOT) branch.My hobby is coding.I am a fresher and I have made a good pucker on 10 programming languages ​Like React, Java, Javascript, HTML, CSS, Nodejs Expressjs, C, PHP, Python ​And database in SQL or NO SQL Like Mongodb or My SQL so many programming languages And we can do something in that programming language And if I don't know anything then I will try to learn it and I will increase my skill.  Thank you for visiting my portfolio website. Feel free to reach out to me for any inquiries or collaboration opportunities."],
    typedSpeed: 1500,
    backSpeed: 60,
    backDelay: 1200,
    loop: true

})
//copy wright year 
let year = document.getElementById('copy-right-year');
let date = new Date();
year.innerHTML = date.getFullYear();

//  Header properties 
let logoImage = document.getElementById('logo-img');
let logoText = document.getElementById('logo-text');
let logourl = "/";
logoImage.addEventListener('click', () => {
    window.location.assign(logourl);
})
logoText.addEventListener('click', () => {
    window.location.assign(logourl);
})
let home = document.getElementById('home');
let about = document.getElementById('about');
let skills = document.getElementById('skills');
let projects = document.getElementById('project');
let education = document.getElementById('education');
let contact = document.getElementById('contact');
function noneproperties() {
    home.style.textDecoration = "none";
    home.style.color = "black";
    about.style.textDecoration = "none";
    about.style.color = "black";
    skills.style.textDecoration = "none";
    skills.style.color = "black";
    projects.style.textDecoration = "none";
    projects.style.color = "black";
    education.style.textDecoration = "none";
    education.style.color = "black";
    contact.style.textDecoration = "none";
    contact.style.color = "black";
}
function homeapllyproperties() {
    home.style.textDecoration = "underline";
    home.style.color = "blue";
}
function aboutapllyproperties() {
    about.style.textDecoration = "underline";
    about.style.color = "blue";
}
function skillsapllyproperties() {
    skills.style.textDecoration = "underline";
    skills.style.color = "blue";
}
function projectsapllyproperties() {
    projects.style.textDecoration = "underline";
    projects.style.color = "blue";
}
function educationapllyproperties() {
    education.style.textDecoration = "underline";
    education.style.color = "blue";
}
function contactapllyproperties() {
    contact.style.textDecoration = "underline";
    contact.style.color = "blue";
}
function homefun() {
    noneproperties();
    homeapllyproperties();
    window.scroll(0, 0);

}
function aboutfun() {
    noneproperties();
    aboutapllyproperties();
    window.scroll(0, 650);

}
function skillsfun() {
    noneproperties();
    skillsapllyproperties();
    window.scroll(0, 1390);
}
function projectsfun() {
    noneproperties();
    projectsapllyproperties();
    window.scroll(0, 2780);
}

function educationfun() {
    noneproperties();
    educationapllyproperties();
    window.scroll(0, 2140);
}
function contactfun() {
    noneproperties();
    contactapllyproperties();
    window.scroll(0, 3470);
}
home.addEventListener('click', () => {
    homefun();
})
about.addEventListener('click', () => {
    aboutfun();
})
skills.addEventListener('click', () => {
    skillsfun();
})
projects.addEventListener('click', () => {
    projectsfun();
})
education.addEventListener('click', () => {
    educationfun();
})
contact.addEventListener('click', () => {
    contactfun();
})

//footer properties
let footerHome = document.getElementById('footer-home');
let footerAbout = document.getElementById('footer-about');
let footerSkils = document.getElementById('footer-skils');
let footerProjects = document.getElementById('footer-projects');
let footerEducation = document.getElementById('footer-education');
let footerContact = document.getElementById('footer-contact');
footerHome.addEventListener('click', () => {
    homefun();
})
footerAbout.addEventListener('click', () => {
    aboutfun();
})
footerSkils.addEventListener('click', () => {
    skillsfun();
})
footerProjects.addEventListener('click', () => {
    projectsfun();
})
footerEducation.addEventListener('click', () => {
    educationfun();
})
footerContact.addEventListener('click', () => {
    contactfun();
})

//about page properties
let resume = document.getElementById('resume');
resume.addEventListener('click', () => {
    let resumeurl = "/portfolio.github.io/src/resume.html";
    window.location.assign(resumeurl);

})
let buttonabout = document.getElementById('btn-about');
buttonabout.addEventListener('click', () => {
    aboutfun();
})