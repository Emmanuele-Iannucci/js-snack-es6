// Creiamo un array di oggetti, ognuno rappresenta una bici da corsa
// Ogni oggetto ha un nome e un peso

const RoadBike = [
  {
    id: 1,
    nome: 'Bianchi',
    peso: 7
  },
  {
    id: 2,
    nome: 'Pinarello',
    peso: 6.5
  },
  {
    id: 3,
    nome: 'Colnago',
    peso: 7.2
  },
  {
    id: 4,
    nome: 'Cannondale',
    peso: 6.8
  },
  {
    id: 5,
    nome: 'Trek',
    peso: 6.3
  }
];

// Inizializziamo la variabile LightBike con il primo elemento dell'array
let LightBike = RoadBike[0];

// Scorriamo tutte le bici per trovare quella con il peso minore
for (let i = 1; i < RoadBike.length; i++) {
  const bike = RoadBike[i];

// Se troviamo una bici con peso inferiore, la salviamo
  if (bike.peso < LightBike.peso) {
    LightBike = bike;
  }
}

// Stampiamo in console la bici più leggera
console.log('La bici più leggera è:');
console.log(LightBike);