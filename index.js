const animateTags = document.querySelectorAll(".texts2, .image2")
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
            delay += 0.1;
        }else{
            tag.style.animation = "0"
            console.log("hide")
        }
    })
})

window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

$(document).ready(function () {
  $(window).on("scroll", function () {
      var output = ""; // 출력 내용 저장

      // 윈도우 스크롤 X 위치
      output += "윈도우 스크롤 X 위치 = " + window.pageXOffset;
      output += "<br>윈도우 스크롤 Y 위치 = " + window.pageYOffset;

      $("#info").html(output);
  });

  $("#top").click(function () {
      window.scrollTo(0, 2000); // x,y 좌표에 지정한 위치로 스크롤
      
      // 현재 위치에서 위로 100px 스크롤
      // window.scrollTo(0, -100); 
  });
});