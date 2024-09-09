
document.getElementById('gradebook').addEventListener('click', function(){
    
    fetch('http://127.0.0.1:3000/students/', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('sms-token')}`
        }
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        console.log(res);
    })
    
});