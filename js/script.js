const signinbuttonlink = document.querySelector('.signinbuttonlink');
const signupbuttonlink = document.querySelector('.signupbuttonlink');

const wrapper = document.querySelector('.login-box');

signupbuttonlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signinbuttonlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});