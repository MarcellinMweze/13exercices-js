
const tableau=[];

for(let i=1;i<=20;i++){
    let nombres=prompt("Donner le nombre n° "+i)*1;
    tableau.push(nombres);
  
}
console.log(tableau);
var max=Math.max(...tableau);
console.log("Le plus grand nombre du tableau est : " + max);


    