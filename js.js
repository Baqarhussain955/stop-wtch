let hours=document.getElementById('hours')
let sec=document.getElementById('sec')
let mili=document.getElementById('mili')
let list=document.getElementById('plist')
let milli=0
let hour=0
let second=0
let inter;
let lit;

document.getElementById('Start').addEventListener('click',()=>{
    inter=setInterval(() => {
        milli++
        mili.innerHTML=milli
        if (milli==60){
            milli=0
            second++
            sec.innerHTML=second
            if(second==60){
                second=0
                hour++
                hours.innerHTML=hour
            }
        }
        
    },10);
})

document.getElementById('Stop').addEventListener('click',()=>{
    clearInterval(inter)
    lit=document.createElement('li')
    lit.innerHTML = `${hour}:${second}:${milli}`;
    console.log(lit);
    list.appendChild(lit)

})

document.getElementById('Restart').addEventListener('click',()=>{
    milli=0
    hour=0
    second=0
    mili.innerText='00'
    hour.innerHTML='00'
    sec.innerHTML='00'
    



})






