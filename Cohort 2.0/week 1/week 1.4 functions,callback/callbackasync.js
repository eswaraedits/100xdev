function OrderFood(eat){
    setTimeout(eat,3000)
    console.log("order is ready")
  }
  function eat(){
    console.log("food is delicious")
  }

OrderFood(eat)