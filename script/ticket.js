
const kbds = document.getElementsByClassName("kbd")

for (const kbd of kbds){
  kbd.addEventListener("click" , function(event){
      const name = event.target.innerText
      const price = document.getElementById("price").innerText;
    //  console.log(name,price)
    // disable:
   
  
    



    // limit check:
    const firstCardCount = getConvertedValue("seat");
    if(firstCardCount +1 >4 ){
      alert("You can select only 4 seat.");
      
      return;
    }






    // update Seat:

    const seatCount = getConvertedValue("seat-left")
    document.getElementById("seat-left").innerText = seatCount -1;

    // seat increase:
    const seatIncrease = getConvertedValue("seat");
    document.getElementById("seat").innerText = seatIncrease +1;


      // name,economy,price:
    const selectContainer = document.getElementById("selected-seat-container");
   
    

    const div = document.createElement("div");
    div.classList.add("flex")
    div.classList.add("justify-between")


    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    
    
    p1.innerText = name;
    p2.innerText = "Economy"
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2)
    div.appendChild(p3);
    
    selectContainer.appendChild(div);

    updateTotalCost(price)
    updateGrandTotal()


  })

  


  // grand Total:
  function updateGrandTotal(status){
    const totalCost = getConvertedValue("total-cost");
    if(status==undefined){
     
      document.getElementById("grand-total").innerText=totalCost;
    }else{
      const couponCode = document.getElementById("coupon-code").value;

      if(couponCode== "New15"){
        const discountPrice = totalCost * 0.15
        document.getElementById("grand-total").innerText=totalCost - discountPrice;
        
      }else if(couponCode == "Couple20"){
        const discount = totalCost * 0.2;
        document.getElementById("grand-total").innerText=totalCost - discount;
       
      }
      else{
        alert("Please Enter a Valid Coupon Code")
      }
    }


   
  }

  // total cost:
  function updateTotalCost(value){
      
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value)
    document.getElementById("total-cost").innerText = sum;
    
    
  }
}




// price , seat, seat-left fuction:
function getConvertedValue(id){
  const price = document.getElementById(id).innerText
  const converted = parseInt(price)
  return converted;
}
