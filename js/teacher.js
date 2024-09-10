const tableBody = document.getElementById('tableBody');



function buildRow(user){
    return `<tr>
                <td class="px-6 py-4 whitespace-nowrap">${user.name}</td>
                <td class="px-6 py-4 whitespace-nowrap">Matric Second Chance</td>
                <td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span></td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900" value=${user._id}>Edit</a>
                    <a href="#" class="text-red-600 hover:text-red-900 ml-4" value=${user._id}>Delete</a>
                </td>
            </tr>`
}

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
        for (const element of res.data) {
            const row = buildRow(element);
            tableBody.insertAdjacentHTML('beforeend', row);
        }
    })
    .catch(error => {
        console.log(error);
    })
    
});