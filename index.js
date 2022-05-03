const lists=document.querySelectorAll(".container2 option");
const btn=document.querySelector(".btn")
const btn2=document.querySelector(".btn2")
const output=document.querySelector(".output")
const amount=document.querySelector(".container input")
const one =document.querySelector(".one")
const two =document.querySelector(".two")

 

for(let option of lists  ){
    option.textContent=option.value
    one.value="USD"
    two.value="NPR"
  

}


function getExchangeRate(){

let amountVal=amount.value


const url=`https://v6.exchangerate-api.com/v6/56c5b117a53a081af0887eba/latest/${one.value}`
fetch(url).then((response)=>{
    return response.json()
}).then((data)=>{
   let  rate=data.conversion_rates[two.value]
    console.log(rate)
    let exchangerate=(amountVal*rate).toFixed(2)
    console.log(exchangerate)
output.textContent=`${amountVal}${one.value}=${exchangerate}${two.value}`

})
}

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    getExchangeRate()
})
btn2.addEventListener("click",()=>{
    amount.value=0;
    one.value="USD"
    two.value="NPR"
    output.textContent="0USD=0.000NPR"
})


const btn1=document.querySelector("button")
btn1.addEventListener("click",()=>{
    let from=one.value
    one.value=two.value
    two.value=from
    getExchangeRate()
})