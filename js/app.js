const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.getElementById('closebtn');

burger.addEventListener('click', () => {
    console.log('click');
    sidebar.classList.toggle('hide-sidebar');
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hide-sidebar');
})

