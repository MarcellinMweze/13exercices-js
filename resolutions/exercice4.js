let annee=prompt("Entrer une année")

if(annee%4===0 && annee%100!=0 || annee%400===0){
    console.log(" OUI, c'est une année Bissextile")
}else{
    console.log("NON, ce n'est pas une année Bissextile")
}