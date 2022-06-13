const animateTags = document.querySelectorAll("h2, h3, h4, .content p, .content2 p, section img, a.button, .texts a, .card")
animateTags.forEach(tag => {
    tag.style.opacity = 0;
})

document.addEventListener("scroll",function(){
    let delay = 0.25;
    animateTags.forEach(tag =>{
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;
        
        if(tagTop<window.innerHeight && tagBottom>0){
            tag.style.animation = `fadeIn 1s ${delay}s both`;
            console.log("appear");
            delay += 0.25;
        }else{
            tag.style.animation = "0"
            console.log("hide")
        }
    })
})


function scrollWin() {

    window.scrollTo(0, 200);
  
  }

  const scrollMove = (event) => {
        if (event.target.dataset.direction === 'scrollTo1'){
            window.scrollTo(0, 800);
        }
        else if (event.target.dataset.direction === 'scrollTo2')
        window.scrollBy(0, 1600);
        else if (event.target.dataset.direction === 'scrollTo3')
        window.scrollBy(0, 2400);
        else if (event.target.dataset.direction === 'scrollTo4')
        window.scrollBy(0, 3600);
  }
// $(secondnav).scroll(  
//     function(){  
//         //스크롤의 위치가 상단에서 450보다 크면  
//         if($(secondnav).scrollTop() > 1200){  
//         /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */  
//             $('엘리먼트').addClass("fix");  
//             //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
//         }else{  
//             $('엘리먼트').removeClass("fix");  
//             //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함  
//         }  
//     }  
// ); 