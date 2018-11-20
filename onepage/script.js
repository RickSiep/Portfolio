let modaal = document.querySelector('#modaalAchtergrond');
let modaalVenster = document.querySelector('#modaalVenster');
let modaalInhoud = document.querySelector('#modaalInhoud');
let triggers = document.querySelectorAll('.trigger');
let sluitKnop = document.getElementById('sluitKnop');
let modaleInhouden = new Object();
// modaleInhouden['rocket1'] = rocket1;
// modaleInhouden['rocket2'] = rocket2;
// modaleInhouden['rocket3'] = rocket3;

const sluitModaal = () => {
  modaal.parentNode.removeChild(modaal);
  modaalVenster.innerHTML = '';
}

modaalVenster.addEventListener('click', (e) => {
  e.stopPropagation();
})

sluitKnop.addEventListener('click', sluitModaal);
modaal.addEventListener('click',sluitModaal);

for(let i=0; i<triggers.length; i++){
  let item = triggers[i].hash.substr(1);
  modaleInhouden[item] = document.getElementById(item);
  // een eventieuze klik toevoegen
  triggers[i].addEventListener('click', (e)=> {
    e.preventDefault();
    modaalVenster.appendChild(sluitKnop);
    modaalVenster.appendChild(modaleInhouden[item]);
    document.body.appendChild(modaal);

  })
}

for(elem in modaleInhouden){
  modaleInhouden[elem].parentNode.removeChild(modaleInhouden[elem]);
}

// modaalVenster.appendChild(rocket1);
// document.body.appendChild(modaal);
sluitModaal();
