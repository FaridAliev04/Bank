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
const yyError=document.querySelector(".yy_error")
const yyCard=document.querySelector(".il")
const cvc=document.querySelector("#cvc")
const cvcError=document.querySelector(".cvc_error")
const cvcCard=document.querySelector(".card_cvc-number")
const submitBtn=document.querySelector(".form_button")

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
        cardNumber.textContent="0000 0000 0000 0000 "
    }else if(numberValue.length>15 && numberValue.length<17){
        numberError.style.opacity="0"
        number.style.borderColor="grey"
        cardNumber.textContent=numberValue.match(new RegExp('.{1,4}', 'g')).join(" ")
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
    const mmValue=dateMonth.value
    if(mmValue===""){
        mmError.style.opacity="1"
        mmCard.textContent="00"
        dateMonth.style.borderColor="red"
    }
     if(mmValue>0 && mmValue<13){
        mmError.style.opacity="0"
        mmCard.textContent=mmValue
        dateMonth.style.borderColor="grey"
    }else{
        mmError.style.opacity="1"
        mmCard.textContent="00"
        dateMonth.style.borderColor="red"
    } 
}
dateMonth.addEventListener("keyup",function(){
    mmFunc()
})

const yyFunc=function(){
    const yyValue=dateYear.value.trim()
    if(yyValue===""){
        yyError.style.opacity="1"
        dateYear.style.borderColor="red"
        yyCard.textContent="00"
    } else if(yyValue>22&&yyValue<30){
        yyError.style.opacity="0"
        dateYear.style.borderColor="grey"
        yyCard.textContent=yyValue
    }else{
        yyError.style.opacity="1"
        dateYear.style.borderColor="red"
        yyCard.textContent="00"
    }
   
}
dateYear.addEventListener("keyup",function(){
    yyFunc()
})

const cvcFunc=function(){
    const cvcValue=cvc.value.trim()
    if(cvcValue===""){
        cvc.style.borderColor="red"
        cvcError.style.opacity="1"
        cvcCard.textContent="000"
    }else if(cvcValue>100 && cvcValue<1000){
        cvc.style.borderColor="grey"
        cvcError.style.opacity="0"
        cvcCard.textContent=cvcValue
    }else{
        cvc.style.borderColor="red"
        cvcError.style.opacity="1"
        cvcCard.textContent="000"
    }
}

cvc.addEventListener("keyup",function(){
    cvcFunc()
})

submitBtn.addEventListener("click",function(){
    mmFunc()
    yyFunc()
    cvcFunc()
    nameFunc()
    numberFunc()
})