function 열기(something){
    document.getElementById(something).classList.add('pop');
}
function 닫기(something){
    document.getElementById(something).classList.remove('pop');
}
// 서치 클릭하면 팝업 나오게하기
document.getElementById('search_bt').addEventListener('click', ()=> {
    열기('pricepop');
    열기('bg');
});
// close를 누르면 닫히기
document.getElementById('close').addEventListener('click', () => {
    닫기('pricepop');
    닫기('bg');
});
// 배경을 눌러도 팝업창을 끌 수 있도록 하기
document.getElementById('bg').addEventListener('click', () => {
    닫기('pricepop');
    닫기('bg');
    닫기('login');
    document.querySelector('table').classList.remove('pop');
});
// 로그인 버튼 누르면 팝업
document.getElementById('login_bt').addEventListener('click', ()=> {
    열기('login');
    열기('bg');
});
// 당첨 금액 팝업
document.getElementById('lottery_bt').addEventListener('click', ()=> {
    document.querySelector('table').classList.add('pop');
    열기('bg');
});

// 할당


