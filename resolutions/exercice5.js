var a=prompt("Donner la valaur de a")
var b=prompt("Donner la valeur de b")
var c=prompt("Donner la valeur de c")

var d=(Math.pow(b,2)-4*a*c)
var delta=d

if(d<0){
    console.log("Cette équation n'admet pas de solution dans R; donc DELTA est inférieur à 0")
    console.log("Voici la valeur de DELTA :"+ delta)
}else if(d===0){
    let x=((-b/2)*a)
    console.log("L'équation edmet une solution est la valeur de X vaut : "+ x)
}else{
    let x1=(-b+(Math.sqrt(delta)))/(2*a)
    let x2=(-b-(Math.sqrt(delta)))/(2*a)
    console.log(delta + " est la valeur de DELTA; nous calculons la valeur de x1 et x2")
    console.log("La valeur de x1 est : "+ x1 +"  et la valeur de x2 est : "+ x2)
}