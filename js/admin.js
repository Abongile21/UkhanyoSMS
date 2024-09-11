
const studentModal = document.getElementById('studentModal')

function openModal() {
    studentModal.classList.remove('hidden');
}

function closeModal() {
    studentModal.classList.add('hidden');
    studentForm.reset();
   
}
