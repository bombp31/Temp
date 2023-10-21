let CelciusInPut= document.querySelector('#Celcius>input')
let FahrenheitInPut= document.querySelector('#Fahrenheit>input')
let KelvinInPut= document.querySelector('#Kelvin>input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}


CelciusInPut.addEventListener('input',function(){
    let cTemp= parseFloat(CelciusInPut.value)
    let fTemp= (cTemp*(9/5))+32
    let kTemp=  cTemp+273.15

    FahrenheitInPut.value = roundNumber(fTemp)
    KelvinInPut.value= roundNumber(kTemp)

})


FahrenheitInPut.addEventListener('input',function(){
    let functionTemp= parseFloat(FahrenheitInPut.value)
    let cTemp= (fTemp-32)*(5/9)
    let kTemp=  (fTemp-32)*(5/9)+273.15

    FahrenheitInPut.value = roundNumber(cTemp)
    KelvinInPut.value= roundNumber(kTemp)

})

KelvinInPut.addEventListener('input',function(){
    let kTemp= parseFloat(KelvinInPut.value)
    let cTemp= kTemp-273.15
    let fTemp=  (kTemp-273.15)*(9/5)+32

    FahrenheitInPut.value = roundNumber(cTemp)
    KelvinInPut.value= roundNumber(fTemp)

})

btn.addEventListener('click',()=>{
    CelciusInPut.value=""
    FahrenheitInPut.value=""
    KelvinInPut.value=""
})