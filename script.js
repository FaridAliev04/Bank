const form=document.querySelector("form")
const fullName=document.querySelector("#name")
const nameError=document.querySelector(".name_error")
const cardName=document.querySelector(".card_infos-name")
const number=document.querySelector("#number")
const numberError=document.querySelector(".number_error")
const cardNumber=document.querySelector(".card_info-number")
const dateMonth=document.querySelector("#mm")
const mmError=document.querySelector(".mm_error")
const mmCard=document.querySelector(".ay")
const dateYear=document.querySelector("#yy")
const cvc=document.querySelector("#cvc")

form.addEventListener("submit",function(e){
    e.preventDefault()
})

const nameFunc=function(){
    const nameValue= fullName.value.trim()
    if(nameValue===""){
        nameError.style.opacity="1";
        fullName.style.borderColor = "red"
    }else if(nameValue===nameValue.charAt(0).toUpperCase()+nameValue.slice(1)){
        nameError.style.opacity="0";
        fullName.style.borderColor = "grey"
        cardName.textContent=nameValue
    }else{
        nameError.style.opacity="1";
        fullName.style.borderColor = "red"
        cardName.textContent="Jane Appleseed"
    }
}
fullName.addEventListener("keyup",function(){
    nameFunc()
})

const numberFunc=function(){
    const numberValue=number.value
    if(numberValue===""){
        numberError.style.opacity="1"
        number.style.borderColor="red"
    }else if(numberValue.length>11 && numberValue.length<13){
        numberError.style.opacity="0"
        number.style.borderColor="grey"
        cardNumber.textContent=numberValue
    }else{
        numberError.style.opacity="1"
        number.style.borderColor="red"  
        cardNumber.textContent="0000 0000 0000 0000 "
    }
}
number.addEventListener("keyup",function(){
    numberFunc()
})

const mmFunc=function(){
    const mmValue=dateMonth.value.trim()
    if(mmValue===""){
        mmError.style.opacity="1"
        mmCard.textContent="00"
    }else if(mmValue.length>0 && mmValue.length<13){
        mmError.style.opacity="0"
        mmCard.textContent=mmValue
    }else{
        mmError.style.opacity="1"
        mmCard.textContent="00"
    }
}

dateMonth.addEventListener("keyup",function(){
    mmFunc()
})