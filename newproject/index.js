// Add event listener to login form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    // TO DO: implement login logic here
    console.log(`Username: ${username}, Password: ${password}`);
});