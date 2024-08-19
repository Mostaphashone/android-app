function saveData() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (!name || !dob) {
        alert('Please enter both name and date of birth.');
        return;
    }

    const url = 'https://script.google.com/macros/s/AKfycbxEMKlaX2mIIl6yXWe4rE2d-3wAfZJpg3v3Ir8MLvfrD0TSnmsigqErWFcmREM4O7Ow/exec'; // ضع هنا عنوان URL الخاص بك
    const data = new URLSearchParams({ name: name, dob: dob });

    fetch(url, {
        method: 'POST',
        body: data,
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('result').innerText = result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred.';
    });
}
