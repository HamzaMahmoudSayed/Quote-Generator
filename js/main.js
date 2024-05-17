let quotes = [
    {
        author: "― Oscar Wilde",
        quote: "“Be yourself; everyone else is already taken.”",
    },
    {
        author: "― Mae West",
        quote: "“You only live once, but if you do it right, once is enough.”",
    },
    {
        author: "― Dr. Seuss",
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    },
    {
        author: "― Robert Frost",
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”"
    },
    {
        author: "― Mark Twain",
        quote: "“If you tell the truth, you don't have to remember anything.”"
    },
    {
        author: "― Elbert Hubbard",
        quote: "“A friend is someone who knows all about you and still loves you.”"
    },
]

function addNewQuote() {
    let random = Math.floor(Math.random() * quotes.length + 1)
    document.getElementById("quote").innerHTML = quotes[random].quote
    document.getElementById("author").innerHTML = quotes[random].author
}