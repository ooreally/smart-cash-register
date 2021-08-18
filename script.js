const billAmount=document.querySelector("#bill_amount");
const error=document.querySelector(".errorMsg");
const nextBtn = document.getElementById("next_btn");
const cashDiv = document.querySelector(".cashArea");
const cashGiven = document.querySelector("#cash_given");
const checkBtn = document.querySelector("#check_btn");
const changeDiv = document.querySelector(".changeArea");
const numOfNotes = document.querySelectorAll(".noOfNotes");
const notesArr = [2000,500,200,100,50,20,10,5,1];
const cashReturned = document.querySelector("#change_returned")
const showErrorMessage = ( Errmessage ) => {

    error.innerText = Errmessage;
    error.style.display= "block";
}

//handling click on next btn
nextBtn.addEventListener('click' , ()=> {

    if(Number(billAmount.value)>=1)
    {
        error.style.display="none";
        cashDiv.style.display="block";
        nextBtn.style.display="none";
    }else{
        showErrorMessage("Enter valid bill amount");
    }
} )

const calcNoOfNotes = (cash,bill) =>{

  let left=cash-bill;

  for (let i=0;i<notesArr.length;i++) 
  {
    numOfNotes[i].innerText=parseInt(left/notesArr[i]);
    left=left%notesArr[i];
  }
  
}

//handling click on check btn
checkBtn.addEventListener('click' , () => {
  
  let bill= Number(billAmount.value);
  let cash= Number(cashGiven.value);

  //changing display to default on click of check button
  error.style.display="none";
  changeDiv.style.display="none";
  
  if(bill>0 && cash>0)
  {   
    if(!Number.isInteger(cash)){
      showErrorMessage("Ener valid cash amount. Cash amount should be an integer.");
    }
     else{
       if(cash>bill)
       {
         changeDiv.style.display="block";
         cashReturned.innerText=cash-bill;
          calcNoOfNotes(cash,bill);
       }
       else if (cash === bill)
       {
        
         showErrorMessage("No Amount can be returned.\n~~~~~Thank You!~~~~~")
       }
       else
       {
         showErrorMessage("Do you wanna wash dishes?")
       }
     }
  }
  else{
    showErrorMessage("Enter valid bill and cash amount");
  }
})

