async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById('user-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    console.log(username)
    console.log(password)

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
};

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    console.log(username)
    console.log(password)

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        }
    };
};

document.getElementById('login').addEventListener('submit', loginFormHandler);
document.getElementById('signup').addEventListener('submit', signupFormHandler);