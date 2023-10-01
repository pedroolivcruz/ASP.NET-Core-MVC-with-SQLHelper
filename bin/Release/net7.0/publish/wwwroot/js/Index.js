let lstNavButtons = document.querySelectorAll('.nav-button');
const containerRelatorios = document.querySelector('.side-bar-container-relatorios');
const containerCadastros = document.querySelector('.side-bar-container-cadastros');
const containerDashboards = document.querySelector('.side-bar-container-dashboards');
const containerChecklist = document.querySelector('.side-bar-container-checklist');
const containerLoader = document.querySelector('.center-home');
document.querySelector('#btnCL').addEventListener("click", event => {
    event.preventDefault();
    containerRelatorios.classList.remove('enter');
    containerCadastros.classList.remove('enter');
    containerDashboards.classList.remove('enter');
    containerChecklist.classList.add('enter');
});
document.querySelector('#btnRL').addEventListener("click", event => {
    event.preventDefault();
    containerCadastros.classList.remove('enter');
    containerDashboards.classList.remove('enter');
    containerChecklist.classList.remove('enter');
    containerRelatorios.classList.add('enter');
});
document.querySelector('#btnCadastros').addEventListener("click", event => {
    event.preventDefault();
    containerRelatorios.classList.remove('enter');
    containerDashboards.classList.remove('enter');
    containerChecklist.classList.remove('enter');
    containerCadastros.classList.add('enter');
});
document.querySelector('#btnDashboards').addEventListener("click", event => {
    event.preventDefault();
    containerRelatorios.classList.remove('enter');
    containerCadastros.classList.remove('enter');
    containerChecklist.classList.remove('enter');
    containerDashboards.classList.add('enter');
});
document.querySelector('#exitCL').addEventListener("click", event => {
    event.preventDefault();
    containerChecklist.classList.remove('enter');
});
document.querySelector('#exitRL').addEventListener("click", event => {
    event.preventDefault();
    containerRelatorios.classList.remove('enter');
});
document.querySelector('#exitCadastros').addEventListener("click", event => {
    event.preventDefault();
    containerCadastros.classList.remove('enter');
});
document.querySelector('#exitDashboards').addEventListener("click", event => {
    event.preventDefault();
    containerDashboards.classList.remove('enter');
});
lstNavButtons.forEach((item) => {
    item.addEventListener("click", event => {
        event.preventDefault();
        containerRelatorios.classList.remove('enter');
        containerCadastros.classList.remove('enter');
        containerChecklist.classList.remove('enter');
        containerDashboards.classList.remove('enter');
        containerLoader.setAttribute("style", "visibility:visible;");
    });
});
