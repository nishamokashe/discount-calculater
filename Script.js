
const bill = document.querySelector(`#bill`)
const discount = document.querySelector(`#discount`)
const calculator = document.querySelector(`#calculator`)
const total = document.querySelector(`#total`)

calculator.addEventListener(`click`, ()=>{
    //validation
    const billValue = bill.value;
    const discountValue = discount.value;

    const valid = inValid(discountValue);
    if(valid){
    const discountAmount = billValue - (billValue*discountValue)/100;
    console.log(discountAmount);
    total.innerHTML = `Total amount to pay is: ${discountAmount}`  
  }
  else{
    alert(`Entered Discount is not correct: ${discountValue}`)
  }

});
function inValid(discount) {
    if (discount<0 || discount>100) {
        return false;
    }
        return true;  
}
