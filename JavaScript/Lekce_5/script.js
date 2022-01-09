$(".tlacitko").click(function(){
    $(".tlacitko").css('color','red');
    $(".tlacitko").animate({left: '250px'}, 4000);
});
function animaceDivu(){
    let objevujici = $('.objevujici');
    let vyska_okna = window.innerHeight;
    let objevujic_pole = Array();
    let vyska;
    let vyska_elementu;
    let pozice_elementu;
    objevujici.each(function(){
        vyska_elementu = $(this).height();
        pozice_elementu = $(this).position().top;
        objevujic_pole.push(pozice_elementu);
        if(vyska_okna <  pozice_elementu){
            $(this).css('left', '-100vw');
        }
    });
    //console.log(objevujic_pole);
    
    objevujici.css('opacity', 0);
    
    setTimeout(function(){
        objevujici.animate({'opacity': 1}, 5000);
    }, 3000);
    $(document).scroll(function(){
        vyska = $('html').scrollTop();
        
        for(let i=0; i < objevujic_pole.length; i++){
            objevujici.each(function(){
                if(vyska =>  objevujic_pole[i]){
                    //console.log(vyska + ' - ' + objevujic_pole[i]);
                    $(this).css('left', '0vw');
                    
                }
            });
        }
        
        
    });
}
function menu(){
    $('#menu ul ul').addClass('skryt');
    $('#menu > ul > li > a').click(function(){
        $(this).siblings('ul').toggleClass('skryt');
        return false;
    });
}
function menu2(){
    $('menu > ul ul').hide();
    $('menu > ul > li').mouseenter(function(){
        $(this).children('ul').show();
    });
    $('menu > ul > li').mouseleave(function(){
        let tento = $(this);
        let casovani = setTimeout(function(){ 
            tento.children('ul').hide(1000);
        }, 900);
        $('menu > ul > li').mouseleave(function(){
            clearTimeout(casovani);
        });
        
        
    });
}
function formular(){
    $('#formular1').submit(function(){
        let hodnota_inputu = $('input[name="jmeno"]').val();
        var x = /^[a-zA-Z]{2,10}$/;
        if( !x.test(hodnota_inputu) ){
            alert('Nesplnili jste podmínku');
            return false;
        }
    });
    
}
$(document).ready(function(){
    animaceDivu();
    menu();
    menu2();
    formular();
});

/*
 * Vytvorime novou funkci
 * Vytvorime posluchac udalosti na formulari
 * Najdete prvek formulare a zjistite jeho obsah
 * Pominka IF(){}
 * Zjisteni poctu znaku .length
 * Pokud nebude splnena podminka min. poctu znaku, tak zastavime odeslani formulare + informujeme navstevnika
 */

