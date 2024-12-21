document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Veri:', data);
        alert('Kullanıcı eklendi');
    })
    .catch(err => {
        console.error('Hata:', err);
        alert('Kullanıcı eklenemedi');
    });
});
