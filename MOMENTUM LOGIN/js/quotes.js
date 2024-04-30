const quotes = [
    {
        quote: "해봤어?",
        author: "정주영"
    },
    {
        quote: "포기하지 말고 길게 보고 투자하자.",
        author: "구본무"

    },
    {
        quote: "노력한 만큼 거둔다.",
        author: "이용경"

    },
    {
        quote: "모든 사람에게 배울 점이 있다.",
        author: "박지영"

    },
    {
        quote: "남에게 얕보이지 마라",
        author: "dk"

    },
    {
        quote: "하면 된다.",
        author: "김태연"

    },
    {
        quote: "이득은 적당히 탐해야 한다.",
        author: "이성희"

    },
    {
        quote: "충분히 생각하고 단호히 실행하라.",
        author: "김영수"

    },
    {
        quote: "자신이 하고자 하는 일이 있다면 끝까지 완수하자.",
        author: "최수부"

    },
    {
        quote: "일에 대한 확신으로 때를 기다려야 한다.",
        author: "황정민"

    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;