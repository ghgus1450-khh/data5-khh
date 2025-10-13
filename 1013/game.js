//game.js


// 전역변수 (const는 처음에 무조건 값을 넣어줘야한다)
const rsp = {1:"scissors.png", 2:"rock.png", 3:"paper.png"}; //객체 {key:value}
let comImg; // 컴퓨터 가위바위보 출력 태그(객체) 저장용
let comTurn; // 컴퓨터 가위바위보 제어용
let idx=1; // 컴퓨터 가위바위보 값

// 브라우저에 화면 출력이 모두 끝난 다음에 실행되는 함수 - onload
// window.onload는 웹 페이지가 열리고 자바스크립트에서 동작해야 되는 코드를 
// 작성하면 됩니다 (웹 페이지를 사용하는 사용자가 아무것도 안 해도 동작해야 되는 것들)

// * 자바스크립트에서는 반복문을 되도록 사용하지 않는다 (루프에 빠져서 오류가 생김)


window.onload=function(){
    // 브라우저 시작시 컴퓨터 가위바위보 이미지 띄우기

    // 1. 현재 html 문서에서 컴퓨터 가위바위보 이미지 띄울 img 태그 가져오기
    comImg = document.getElementById("comPic");
    // comImg.src = "./rock.png"; 
    // setInterval(실행할 함수 , 시간(밀리세컨드) ) : 지정된 시간마다 실행
    // setTimeout 지정된 시간 이후 실행 
    comTurn = setInterval(function(){
        comImg.src = rsp[idx.toString()]; //String(idx);
        idx++; //++는 1 증가 //idx :  컴퓨터 가위바위보 값(전역변수로 지정해둠)
        idx = idx==4 ? 1 : idx; // 3이 보자기 이므로 4는 필요없다 다시 1이 되어라
    } , 100); //0.1초에 한번씩 실행된다

    // 유저 가위바위보 클릭 이벤트 등록
    let userImgs = document.querySelectorAll(".userPic");
    // class명이 userPic 인 img 태그 세개 전부 불러오기 - 배열구조

    // userImgs[0].addEventListener('click', function(){
    //     alert('가위');
    // });

    for(i in userImgs){    // for...in : 객체속성을 순회(반복문 ? )
                            // for ~ in : 배열과 같은 구조를 순차적으로 순회하기 위한 반복문
                            // 배열의 첫번째는 0인덱스로 접근 할 수 있다
                            // 0 인덱스부터 마지막 인덱스까지 반복해준다
                            // i 이 index를 뜻하는듯

        userImgs[i].addEventListener("click" , userSelect);
    }

}

function userSelect(){
    // alert(this.dataset.user); // this 는 현재 클릭한 img태그를 의미
                                 // 클릭한 img 태그의 dataset(data-user)값 출력
    let userIdx = this.dataset.user;
    this.classList.add("select");
    // 태그에 클래스 이름 추가하는 방법 
    // .classList.add('클래스이름')
    // 삭제는 .classList.remove("클래스이름")

    // 컴퓨터 가위바위보 setInterval 멈추기
    // setInterval 가 실행될 때 나오는 번호를 알아야 종료시킬 수 있다 
    // clearInterval 
    clearInterval(comTurn); 

    // 컴퓨터의 가위바위보와 나의 가위바위보 비교하여 결과를 화면에 출력

    idx = idx == 1 ? 3 : idx; // setInterval 종료 시점에 idx가 1증가하므로
                              // 값변경이 필요하다

    // 값비교 식 만들기
    // 결과 출력 태그 가져오기
    let result = document.querySelector("#result");
    let res = parseInt(userIdx) - idx; // res = 유저값과 컴퓨터값의 뺀 값 

    if( res === 0 ){ // == 값만 비교 , === 값과 타입 비교
        result.innerHTML = '<b>비김</b>';
    }
    else if( res === -2 || res === 1 ){ //내가 이기는 경우 (나 : 가위 , 컴 : 보자기 -> 1-3)
        result.innerHTML = '<b>내가 이겼다</b>';
    }else{ // 나머지 내가 진 경우
        result.innerHTML = '<b>나의 패배...</b>';
    }

};