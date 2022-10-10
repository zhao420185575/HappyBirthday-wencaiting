$(document).ready(function (){
    $('.envelope').click(function (){
        if(flag != false){
            flag = false
            $('.top').css('transition','.5s all')
            $('.top').css('transition-delay','1s')
            $('.top').css('transform','rotateX(180deg) translateY(-2px) scaleY(1.5)')
            // $('.envelope-after').remove()

            setTimeout(function (){
                $('.envelope-before').css('opacity', '0')
            },1000)

            setTimeout(function (){
                // $('.card').css('transition', 'show .8s 1.5s ease-out')
                // $('.card').css('animation-fill-mode', 'forwards')
                // $('.card').css('z-index', '9')
                // $('.content').css('animation', 'showContent 2.5s 1s ease-out forwards')
                $('.card').css('transform', 'scaleY(1) translateY(-80px)')
                $('.card').css('opacity', '1')
                $('.envelope-after').css('z-index', '10')
            }, 2000)
            document.querySelector('#music').play()

            confetti({
                particleCount: 450,
                gravity: 0.5,
                scalar: 1.5
            });



            setTimeout(function (){
                let str = `花开花谢,此消彼长,云卷云舒,又是一年。愿时间更替带给你美丽心情,温彩婷祝你${age}岁生日快乐!`
                let str_ = ''
                start()
                function start(){
                    let i = 0
                    let content = document.querySelector('.content')
                    let timer = setInterval(()=>{
                        if(str_.length<str.length){
                            str_ += str[i++]
                            content.innerHTML = ''+str_+'_'
                        }else{
                            clearInterval(timer)
                            content.innerHTML = ''+str_+''
                        }
                    },200)
                }
            }, 4000)
        }

    })
})