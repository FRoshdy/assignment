//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {

        'quote': 'Be yourself; everyone else is already taken.”',
        'author': "Oscar Wilde"
    },
    {

        'quote': 'So many books, so little time”',
        'author': "Frank Zappa"
    },
    {

        'quote': 'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind”',
        'author': " Bernard M. Baruch"
    }
];


var q = document.getElementById("theq")
var qauther = document.getElementById("theau")
var qbtn = document.getElementById("btnqu")
var nquote = document.getElementById("quote")

qbtn.onclick = function () {
    generateQuotes()
}

var num = []
function generateQuotes() {
   
    var randomNumber = Math.floor(Math.random() * arrayOfQuotes.length)

    if (num.includes(randomNumber)) {

        var box = ''
        box += `<div>
    <p id="theq">"Try again to Get a New Quote"</p>
    </div>`
        console.log(box)
        nquote.innerHTML = box

    }
    else {
        num.push(randomNumber);
        console.log(num)
        var box = ''
        box += `<div>
    <p id="theq">"${arrayOfQuotes[randomNumber].quote}"</p>
        <p id="theau">--"${arrayOfQuotes[randomNumber].author}"</p>
    </div>`
        console.log(box)
        nquote.innerHTML = box


    }
}
