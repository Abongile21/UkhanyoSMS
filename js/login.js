

const email = document.getElementById("username");
const password = document.getElementById('password');

document.getElementById('login').addEventListener('click', function(){
    
    fetch('http://127.0.0.1:3000/login/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })
    .then(response => {
        if(response.status === 200){
            return response.json();
        }
    })
    .then(res => {
        if(res.data === 'teacher'){
            window.location.href = 'teachers.html'
        }
        else if(res.data === 'student'){
            window.location.href = 'student.html'
        }
        
    })
    .catch(error => {
        console.log(error);
    })
});