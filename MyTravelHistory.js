/*
callTextData()와 addTextData()에서 접근 가능하도록 전역변수로 배열과 imageNum 선언
*/
var imageNum;
var title = new Array();
var text = new Array();
title[0] = "<h2>제주도</h2>"
title[1] = "<h2>제주도</h2>"
title[2] = "<h2>제주도</h2>"
title[3] = "<h2>일본-도쿄</h2>"
title[4] = "<h2>일본-도쿄</h2>"
title[5] = "<h2>일본-도쿄</h2>"
title[6] = "<h2>일본-오사카</h2>"
title[7] = "<h2>일본-오사카</h2>"
title[8] = "<h2>일본-오사카</h2>"
text[0] = "<p>애월 방향의 사진 명소</p>"
text[1] = "<p>절물 자연휴양림</p>"
text[2] = "<p>톳짜장면으로 유명한 마라도</p>"
text[3] = "<p>도쿄 오다이바 관람차</p>"
text[4] = "<p>신주쿠 공원</p>"
text[5] = "<p>많은 사람들이 오가던 도쿄역</p>"
text[6] = "<p>중앙에 강이 흐르는 도톤보리</p>"
text[7] = "<p>많이 컸던 오사카 성</p>"
text[8] = "<p>오사카 유니버셜 스튜디오</p>"
/*
웹사이트 로딩이 끝나고 난 뒤 조건에 따라 다음 명령을 실행

라이트박스 검정 공간을 클릭시 라이트박스 종료
이미지 클릭 시 클릭한 태그의 이미지와 이미지별로 지정된 텍스트 데이터를 불러와 라이트박스에 추가

텍스트 추가 이벤트 발생시 input태그의 내용을 arrray text[imageNum]에 html 방식으로 작성해 저장
*/
$(document).ready(function() {
    $('.lightbox-shadow').click(function(){
        closeLightBox();
    });

    $('.body-picture img').click(function(){
        var src = $(this).attr("src");
        imageNum = $(this).attr("alt");
        showLightBox();
        callImageData(src);
        callTextData(imageNum);
    });

    $('.lightbox-context-input button').click(function(){
        addTextData();
        callTextData(imageNum);
    });
});

function callImageData(imgsrc){
    $('.lightbox-image img').attr("src", imgsrc)
}

function callTextData(imageNum) {
    $('.lightbox-title-area h2').html(title[imageNum])
    $('.lightbox-context-area p').html(text[imageNum])
}
function addTextData() {
    var valueById = $('#input').val();
    text[imageNum] += valueById + "<br>"
}
function closeLightBox() {
    $('.lightbox-shadow').hide();
    $('.lightbox-wrapper').hide();
}

function showLightBox() {
    $('.lightbox-wrapper').css({display: 'flex'});
    $('.lightbox-shadow').show();
    $('.lightbox-wrapper').show();
}
