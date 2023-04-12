
let nombre=prompt("Donner un chiffre")  


    while(nombre< 0 || nombre>3){
        nombre=prompt("Donner un chiffre")    
        
        if(nombre<0 || nombre>3){
            console.log( nombre + " n'est pas compris entre 1 et 3")
            nombre++
        }
}
console.log(nombre +" est compris entre 1 et 3")
    

