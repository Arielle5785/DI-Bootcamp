let form = document.getElementById('MyForm');
document.getElementById('volume').readOnly = true;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let radius = document.getElementById('radius').value;
    if (radius === '' || isNaN(radius) || radius <= 0){
        alert(`Enter, please, a positive number, for the radius: `);
        return;
        }   
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(2);
})