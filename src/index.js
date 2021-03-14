

export function calculateTotal (items, tax) {
    let total = 0;
    if(tax < 0){
      tax = Math.abs(tax);
    }
    if (tax > 1){
      throw error("tax must be a positive value in betweeen zero and one.");
    }


  for (var i = 0; i < items.length; i++){
    let totalItemPrice = items[i].price;

    if (items[i].taxable == true){
      totalItemPrice = totalItemPrice + (totalItemPrice * (tax));
    }

    total += totalItemPrice;
    
    }

  return total;
}
