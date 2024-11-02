function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}

function printHost() {
    let hostName = 'OS_0000001@earth:~$';
    $('.container').append('<br /><span class="host col-12 m-0 p-0">' + hostName + '&nbsp;</span>');
}

var sleep = (ms = 0) => {
    return new Promise(r => setTimeout(r, ms));
}

async function printText(word) {

    $('.container .host').last().append('<span class="console"></span>');
    for (var i in word) {
        $('.container .host span').last().append(word[i]);
        await sleep(30);
    }
}

async function checkInput(input_data) {
    if (input_data == '王翰同') {
        let endText = ['Ch.7 - Forget and lost.',
                '「嗶嗶嗶嗶！嗶嗶嗶嗶！」',
                '早上 8:30 ，王翰同的手機鬧鐘大聲地響了起來，王翰同睡眼惺忪的從桌上爬起，看了看四周，竟是在社辦。', 
                '「欸王翰同你也太誇張了吧！居然在社辦過夜！」社長走進社辦，對智商尚未上線的王翰同說道。', 
                '「蛤…我怎麼會在這裡啊…」王翰同扶著昏沉的腦袋，努力地想回想起自己會在社辦想來的理由。', 
                '「你是睡到 ㄎㄧㄤ 逆，還不知道自己為什麼會在這裡」社長一邊收拾著文件一邊說「今天晚上開會你能到嗎？看你現在的樣子，你行嗎？」', 
                '「昨天…」王翰同對於社長說的話感到一片茫然，他不記得社團什麼時候要開會，也不記得自己到底為什麼出現在這裡，或者昨天他到底在做什麼，他只覺得，自己彷彿度過了一段十分痛苦黑暗的時間。', 
                '「看你累到失去智商，你還是回宿舍去睡吧，我要去上課了，掰。」社長說完後便帶著剛收拾好的文件走了，留下王翰同一人。', 
                '王翰同四處張望，試圖清醒腦袋，並尋找靈感，忽然，王翰同面前的筆電閃爍了幾下，把他嚇得站了起來。', 
                '「奇怪我幹嘛這麼緊張啊？」王翰同對自己的行為感到不解，心中有種忘卻什麼重要的事的感覺。', 
                '「算了，先回宿舍好了。」王翰同開始收拾自己的東西，才注意到，自己的手機、學生證、以及其他證件都被整齊的擺在電腦旁邊。', 
                '當王翰同拿起學生證時，他發現學生證的背面，有一個 0 發出微弱的光，王翰同以為是沾了什麼會反光的東西，正打算用手去擦，沒想到，當他的手指碰到那個 0 的瞬間…。', 
                '「啊!真是又長又累的一場夢。」王翰同說，看似語氣平淡，卻掩飾不住他內心的激動。', 
                '王翰同走出社辦，朝著宿舍前進，忽然一陣強風吹過，呼嘯中，他彷彿聽見了耳語 : Better to forget, or lost again.',
                '',
                '恭喜你完成了預熱ARG解謎活動「Lost 1 」，成功的拯救了即將被世界給遺忘的「王翰同」，如果你想回顧劇情，請輸入「replay」。'
            ];
        for (var i in endText) {
            printHost();
            await printText(endText[i]);
            await sleep(300);
        }
        printHost();
        // 看要改哪裡
        // location.href = 'https://www.facebook.com';
        return true;
    }
    else if (input_data == 'replay'){
        let check = confirm('即將回顧劇情，你準備好了嗎？');
        if(check) {
            location.replace('https://lost-arg.github.io/RE-Lost-1/pages/replay.html');
        } 
        return true
    }
    return false;
}

async function user_input() {
    printHost();

    $('.container .host').last().append('<input type="text" id="id_and_code" name="id_and_code" class="col-4 col-md-6 col-lg-8 m-0 p-0">');
    $('#id_and_code').focus();
    $('#id_and_code').keypress(async function (event) {
        if (event.keyCode == 13) {
            $('#id_and_code').prop('disabled', true);
            Ch = await checkInput($('#id_and_code').val());
            $('#id_and_code').removeAttr('id');
            if (!Ch) {
                printHost();
                await printText('輸入錯誤, 請重新輸入');
            }
            await user_input();
        }
    });
}
var verInfo = `Welcome to WorldSimulation 2019.05 LTS (GNU/Linux 4.4.0-139-generic x86_64)

<br/><br/><br/> &nbsp;* Documentation:  https://help.WorldSimulation.com
<br/> &nbsp;* Management:     https://landscape.WorldSimulation.com
<br/> &nbsp;* Support:        https://WorldSimulation.com/advantage
<br/><br/><br/> 79 packages can be updated.
<br/> 0 updates are security updates.


<br/><br/><br/> *** System restart required ***
<br/> Last login: Sun Apr 21 01:52:42 2019 from 101.12.8.172 <br />`;
let text = ['你好', '歡迎來到終端', '能走到這表示你已經找到失去的存在了吧', '那麼，告訴我你的名字吧'];

async function main() {
    $('.container').append(verInfo);
    for (let i = 0; i < text.length; i++) {
        printHost();
        await printText(text[i]);
        await sleep(300);
    }
    await user_input();
}
main();
pageScroll();