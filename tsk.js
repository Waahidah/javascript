document.getElementById('first').addEventListener('click', function() {
    document.getElementById('unit2').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('second').addEventListener('click', function() {
    document.getElementById('unit3').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('third').addEventListener('click', function() {
    document.getElementById('unit1').scrollIntoView({
        behavior: 'smooth'
    });
});