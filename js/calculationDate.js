
getLunar()
function GetDigitalDate(m,d,byear){
    let y = new Date().getFullYear()
    var lunarJson = calendar.lunar2solar(y,m,d)
    if(new Date().getMonth() + 1 > m && new Date().getDate() > d){
        y = y + 1
        lunarJson = calendar.lunar2solar(y,m,d)
    }
    age = y - byear
    countDownFn(y,lunarJson.cMonth,lunarJson.cDay)
}
// 倒计时函数
function countDownFn(ly,lm,ld) {
    // 获取当前时间
    var date = new Date();
    // var tgt = new Date(`${ly}-${lm}-${ld} ${new Date().getHours()+1}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
    var tgt = new Date(`${ly}-${lm}-${ld} 00:00:00`);
    // 获取时间差
    var distance = tgt - date;
    // 计算剩余时间
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance / (1000 * 60 * 60)) % 24);
    var m = Math.floor((distance / (1000 * 60)) % 60);
    var s = Math.floor(distance / 1000) % 60
    var time =
        d.toString().padStart(2, "0") +
        "天" +
        h.toString().padStart(2, "0") +
        "时" +
        m.toString().padStart(2, "0") +
        "分" +
        s.toString().padStart(2, "0") +
        "秒"
    rendering(time)
}

function rendering(time){
    document.querySelector('.time').innerHTML = `距离你的农历生日还有<br>${time}`
}

setInterval(function (){
    getLunar()
},1000)