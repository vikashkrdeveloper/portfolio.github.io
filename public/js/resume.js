//copy wright year 
let year = document.getElementById('copy-right-year');
let date = new Date();
year.innerHTML = date.getFullYear();

//header properties
let logoImage=document.getElementById('logo-img');
let logoText=document.getElementById('logo-text');
let logourl="/";
logoImage.addEventListener('click',()=>{
    window.location.assign(logourl);
})
logoText.addEventListener('click',()=>{
    window.location.assign(logourl);
})
let home = document.getElementById('home');
let about = document.getElementById('about');
let skills = document.getElementById('skills');
let projects = document.getElementById('project');
let education = document.getElementById('education');
let contact = document.getElementById('contact');
function homefun() {
    let homeurl="../../index.html";
    window.location.assign(homeurl);
    window.scroll(0, 0);
}
function aboutfun() {
    let abouturl="../../index.html";
    window.location.assign(abouturl);
    window.scroll(0, 650);
}
function skillsfun() {
    let skillsurl="../../index.html";
    window.location.assign(skillsurl);
    window.scroll(0, 1390);
}
function projectsfun() {
    let projectsurl="../../index.html";
    window.location.assign(projectsurl);
    window.scroll(0, 2780);
}

function educationfun() {
    let educationurl="../../index.html";
    window.location.assign(educationurl);
    window.scroll(0, 2140);
}
function contactfun() {
    let contacturl="../../index.html";
    window.location.assign(contacturl);
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
let footerHome=document.getElementById('footer-home');
let footerAbout=document.getElementById('footer-about');
let footerSkils=document.getElementById('footer-skils');
let footerProjects=document.getElementById('footer-projects');
let footerEducation=document.getElementById('footer-education');
let footerContact=document.getElementById('footer-contact');
footerHome.addEventListener('click',()=>{
    homefun();
})
footerAbout.addEventListener('click',()=>{
    aboutfun();
})
footerSkils.addEventListener('click',()=>{
    skillsfun();
})
footerProjects.addEventListener('click',()=>{
    projectsfun();
})
footerEducation.addEventListener('click',()=>{
    educationfun();
})
footerContact.addEventListener('click',()=>{
    contactfun();
})
