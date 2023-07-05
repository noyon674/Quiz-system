const Question = [
    {
        que: 'Which of the following is a linear data structure?',

        a: 'Array',
        b: 'AVL Trees',
        c: 'Binary Tree',
        d: 'Graph',
        ans: 'a'
    },
    {
        que: 'Which of the following is not the type of queue?',

        a: 'Priority queue',
        b: 'Single-ended queue',
        c: 'Circular queue',
        d: 'Ordinary queue',
        ans: 'b'
    },
    {
        que: 'How are String represented in memory in C?',

        a: 'The object of some class',
        b: 'An array of characters',
        c: 'Same as other primitive data types',
        d: 'LinkedList of characters',
        ans: 'b'
    },
    {
        que: 'Which of the following is a linear data structure?',

        a: 'Array',
        b: 'AVL Trees',
        c: 'Binary Tree',
        d: 'Graph',
        ans: 'a'
    },
    {
        que: 'Which of the following is a Divide and Conquer algorithm?',

        a: 'Bubble Sort',
        b: 'Selection Sort',
        c: 'Heap Sort',
        d: 'Merge Sort',
        ans: 'd'
    }
];

const Qstn = document.getElementById('header');
const Options = document.querySelectorAll('.optn');
let index = 0;
let right, total;
right = 0;
total = Question.length;

function questionLoader(){
    const Data = Question[index];
    Qstn.innerHTML = `${index+1}. ${Data.que}`;
    Options[0].nextElementSibling.innerHTML = Data.a;
    Options[1].nextElementSibling.innerHTML = Data.b;
    Options[2].nextElementSibling.innerHTML = Data.c;
    Options[3].nextElementSibling.innerHTML = Data.d;
    
}
function next(){
    if(index==total){
        end();
    }
    else{
        rest();
    const Data = Question[index];
    let Ans = getAnsewr();
    if(Ans === Data.ans){
        right++;
    }
    index++;
    questionLoader();
}
}
function getAnsewr(){
    let ans;
    Options.forEach(function(input){
        if(input.checked){
            ans=input.value;
        }
    });
    return ans;
}
function end(){
    document.getElementById('pp').innerHTML = `Your Scorer = ${right}`;
}
function rest(){
    Options.forEach(function(input){
       // input.checked=false;
       
    })
}
questionLoader();