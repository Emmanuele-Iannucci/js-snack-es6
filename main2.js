/* Creo un array di oggetti che rappresentano squadre di calcio.

Ogni squadra ha:
nome (inserito manualmente)
puntiFatti e falliSubiti che inizializzo a 0
Genero valori randomici per punti e falli.
Creo un nuovo array con solo nome e falli subiti.

Stampo tutto in console. */

// Creo un array di oggetti che rappresentano squadre di calcio
// Ogni squadra ha un nome, punti fatti e falli subiti (inizializzati a 0)

const teams = [
  {
    id: 1,
    nome: 'Juventus',
    punti: 0,
    falli: 0
  },
  {
    id: 2,
    nome: 'Inter',
    punti: 0,
    falli: 0
  },
  {
    id: 3,
    nome: 'Milan',
    punti: 0,
    falli: 0
  },
  {
    id: 4,
    nome: 'Roma',
    punti: 0,
    falli: 0
  },
  {
    id: 5,
    nome: 'Napoli',
    punti: 0,
    falli: 0
  }
];

// Funzione per generare numeri random

function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


