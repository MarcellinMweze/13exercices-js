let nombre=prompt("Donner un nombre")

for(let i=0;i<=nombre;i=i+2){
    if(nombre%2===0){
        console.log(i)
    }else{
        console.log(i+1)
    }
}