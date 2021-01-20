async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log(email, password);
    
    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.getElementById('loginform').addEventListener('submit', loginFormHandler);
