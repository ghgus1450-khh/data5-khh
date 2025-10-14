// 구현 해야하는 것들
// - 지출이냐 수입이냐 버튼 클릭에 따라 설정
// - 저장하기 클릭 이벤트
// - 입력내용 테이블에 출력하기

// 구현 해야 되는 기능에 필요한 전역변수는?
// 지출 수입 선택 값 저장 변수
// 저장하기 버튼 태그 저장 변수



let selectTab; // 지출수입 버튼 클릭 값 저장
const saveBt = document.querySelector("#save");


// 기능 구현 (함수 정의)
document.querySelector("#incomeBt").onclick= function(){
    this.style.background="#ed646f";
    this.nextElementSibling.style.background="#fff";
    selectTab=1;
};

document.querySelector("#expenseBt").onclick= function(){
    this.style.background="#6484edff";
    this.previousElementSibling.style.background="#fff";
    selectTab=2;
};

saveBt.onclick = () => {
    let date = document.querySelector(".date").value;
    let expense = document.querySelector(".expense").value;
    let income = document.querySelector(".income").value;
    let datailCol = document.querySelector(".datail-col").value;
    let categoryCol = document.querySelector(".category-col").value;
    let paymentCol = document.querySelector(".payment-col").value;

    
};



// 부모 태그에서 자식 태그를 선택하려면 child를 통해 접근이 가능
// => 부모태그.childNodes (childNodes는 배열이다)
// => 부모태그.childNodes[0] 는 첫번쨰 자식

// 자식에서 부모태그를 선택하려면 parent를 통해 접근이 가능
// => 자식태그.parentNode 

// 형제 선택 previousSibling , nextSilbling
// => 태그.nextSibling 








