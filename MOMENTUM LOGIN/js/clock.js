const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock(); // 없으면 00:00:00 보여주고 1초뒤에 시작(한번 실행하고 함수 작동하게 해줌)
setInterval(getClock, 1000);