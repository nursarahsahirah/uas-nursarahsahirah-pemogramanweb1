function openBookingForm() {
    document.getElementById('bookingModal').style.display = 'block';
}

function closeBookingForm() {
    document.getElementById('bookingModal').style.display = 'none';
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let formData = new FormData(this);
    let formDataJSON = {};

    formData.forEach(function(value, key) {
        formDataJSON[key] = value;
    });

    console.log(formDataJSON);
    closeBookingForm();
    alert('Form submitted successfully!');
});
