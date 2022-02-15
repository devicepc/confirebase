function caldataInsp(){
    let setId = document.getElementById("CatBusInsp");
    let setnum = document.getElementById("IdBUsInsp");
    valuex = setId.value;
    valuey = setnum.value;
    
     if(valuex == 0) {
        alert("Favor ingrese la categoria");
    } else if (valuey == 0){
        alert("Favor ingrese el identificador de libreta");
    }else {
        console.log("Categoria: "+valuex + " Identificador : "+ valuey);
    }
}