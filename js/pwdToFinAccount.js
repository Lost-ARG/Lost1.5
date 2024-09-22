var hint = ['Looking carefully to find the hint.', 'You should focus on what you are typing.', 'Keep trying!', 'Keep taping!'];
function _getHint() {
    alert(hint[Math.floor(Math.random()*4)]);
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var password = document.getElementById('password').value;

    var correctPassword = 'Y3.KIEP4.S';

    if (password === correctPassword) {
        window.location.href = './finAccount.html';
    } else {
        alert('Incorrect password, please try again.'); 
    }
});