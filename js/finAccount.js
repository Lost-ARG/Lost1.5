function changeImg(clicked) {
    if (clicked == 'moon') {
        $('#accountImg').attr('src', '../img/帳表.png');
        $('body').addClass('bg-dark');
        alert("Here's your Story Code.");
    } else {
        $('#accountImg').attr('src', '../img/帳表NoBarCode.png');
        $('body').removeClass('bg-dark');
    }
}