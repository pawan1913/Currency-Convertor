let  input= document.querySelector('input')
let  option1= document.querySelector('#option1')
let  option2= document.querySelector('#option2')
let button = document.querySelector('button')
let  outputarea= document.querySelector('.outputarea')

console.log(outputarea);

async function fetchdata() {
    debugger
    
    if(input.value.length != 0){
        try {
            let response = await fetch('https://v6.exchangerate-api.com/v6/a629498372e5c74596a9d202/latest/USD')
            let data =   await response.json() 
            let fromExchangeRate= data.conversion_rates[option1.value]
            let toExchangeRate  = data.conversion_rates[option2.value]
            let result = (input.value / fromExchangeRate) * toExchangeRate
           console.log(result);
            outputarea.innerHTML = `<p>${input.value} ${option1.value} = ${result} ${option2.value} </p>`
           input.value = " "
           // console.log(data);
           // return data
    } catch (error) {
        console.error('Error in data Fetching') , error;
        throw error
    }
}
else{
    alert("Please Enter the Value")
}
}


currencies.forEach(currency => {
   let option = document.createElement('option')
   option.value = currency
   option.textContent = currency
   option1.appendChild(option)
});



currencies.reverse().forEach(currency => {

    let option1 = document.createElement('option')
    option1.value = currency
    option1.textContent = currency
    option2.appendChild(option1)
 });

 option1.value = "USD";
option2.value = "INR";



button.addEventListener('click',() =>  {
    fetchdata()
})