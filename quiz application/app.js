

const questions=[{
    'que':'which one the markub language',
    'a':'javaskript',
    'b':'html',
    'c':'css',
    'd':'php',
    'correct':'a'
},
{
    'que':'what where the javaskript was launched',
    'a':'1901',
    'b':'1903',
    'c':'1904',
    'd':'1907',
    'correct':'b'
},
{
    'que':'who is the primeminister of pakistan',
    'a':'imran khan',
    'b':'asif ali zardari',
    'c':'benazir bhutto',
    'd':'nawaz shareef',
    'correct':'c'
},
{
    'que':'when was the pakistan was came into being',
    'a':'1943',
    'b':'1967',
    'c':'1967',
    'd':'1947',
    'correct':'d'
}]


 let index=0;
 let total=questions.length
 let right=0,
    wrong=0;
 const quebox=document.getElementById('quebox')
 const optioninputs=document.querySelectorAll(".option")
 const loadquestion=()=>{
    if (index===total){
        return endquiz()
    }
    reset()
const data=questions[index]
quebox.innerHTML=`${index+1}) ${data.que}`;
optioninputs[0].nextElementSibling.innerText=data.a
optioninputs[1].nextElementSibling.innerText=data.b
optioninputs[2].nextElementSibling.innerText=data.c
optioninputs[3].nextElementSibling.innerText=data.d
}



const submitquiz=()=>{
    const data=questions[index]
    const ans=getanswer()
    if(ans===data.correct){
        right++
    }
    else{
        wrong++
    }
    index++
    loadquestion();
    return;
}


const getanswer = () => {
    let ans;
    optioninputs.forEach(
        (input) => {
            if (input.checked) {
                ans= input.value;
                
            }
        }
    )
    return ans
    
}
const reset =()=>{
    optioninputs.forEach(
        (input) => {input.checked=false}
)}



const endquiz=()=>{
    document.getElementById('box').innerHTML=`<div  style="text-align:center ; font-size: 50px" >
    <h3>thankyou for playing</h3>
    <h2>${right}/${total} are correct</h2>
    </div>`

}
loadquestion()
