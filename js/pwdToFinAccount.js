var hint = ['Looking carefully to find the hint.', 'You should focus on what you are typing.', 'Keep trying!', 'Keep taping!'];
function _getHint() {
    alert(hint[Math.floor(Math.random()*4)]);
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var password = document.getElementById('password').value;

    var correctPassword = 'Y3.KIEP4.S';

    if (password === correctPassword) {
        alert('Password is correct!'); // 密碼正確，彈出提示
        window.location.href = './caesar.html'; // 跳轉到指定頁面
    } else {
        alert('Incorrect password, please try again.'); // 密碼錯誤
    }
});