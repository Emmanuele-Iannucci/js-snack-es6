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

// Funzione per generare numeri random (funzione utility)

function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Scopo della funzione
Questa funzione serve a generare un numero intero casuale compreso tra un valore minimo (min)
e uno massimo (max), inclusi.

Spiegazione riga per riga

1. Math.random()
Restituisce un numero decimale casuale tra 0 (incluso) e 1 (escluso)
Esempi possibili: 0.234, 0.873, 0.0004, ecc.

2. Math.random() * (max - min + 1)
Moltiplica il numero casuale per la lunghezza dell’intervallo.

max - min + 1 garantisce che il valore massimo sia incluso nel risultato.

Ad esempio, se min = 5 e max = 10,
max - min + 1 = 6
→ così Math.random() può generare numeri da 0 fino a 5.999...

3. Math.floor(...)
Arrotonda per difetto il numero casuale ottenuto (toglie i decimali).

Esempio: Math.floor(5.8) → 5

Quindi otteniamo un numero intero casuale da 0 a 5

4. + min
Aggiungiamo min per spostare il numero generato nell’intervallo desiderato.

Continuando con l’esempio min = 5:
Otteniamo un numero da 0 a 5, che sommato a 5 diventa da 5 a 10.


*/

// Generiamo numeri casuali per punti e falli
for (let i = 0; i < teams.length; i++) {
  const squadra = teams[i];
  squadra.punti = generaNumeroCasuale(0, 100);
  squadra.falli = generaNumeroCasuale(0, 50);
}
