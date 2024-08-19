function searchData() {
    const name = document.getElementById('search-name').value;

    if (!name) {
        alert('Please enter a name.');
        return;
    }

    const url = `https://script.google.com/macros/s/AKfycbxEMKlaX2mIIl6yXWe4rE2d-3wAfZJpg3v3Ir8MLvfrD0TSnmsigqErWFcmREM4O7Ow/exec?name=${name}`; // ضع هنا عنوان URL الخاص بك

    fetch(url)
    .then(response => response.text())
    .then(result => {
        document.getElementById('search-result').innerText = result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('search-result').innerText = 'An error occurred.';
    });
}
