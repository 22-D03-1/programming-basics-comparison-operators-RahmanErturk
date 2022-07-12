const äpfel = 20;
const oranges = 30;
const mangoes = 5;
const istÄpfelGleichOranges = äpfel === oranges;

// Frage 1
const frage1 = äpfel === oranges;
console.log({istÄpfelGleichOranges});
console.log({frage1})

// Frage 2
const frage2 = äpfel !== oranges;
console.log({frage2});

// Frage 3
const frage3 = äpfel > oranges;
console.log({frage3});

// Frage 4
const frage4 = äpfel <= oranges;
console.log({frage4});

// Frage 5
const frage5 = oranges > äpfel
console.log({frage5});


// Frage 6
const mangoesMalÄpfel = mangoes * äpfel;
const mangoesPlusOranges = mangoes + oranges;
const frage6 = mangoesMalÄpfel > mangoesPlusOranges;
console.log({frage6});


// Frage 7
const äpfelMinusMangoes = äpfel - mangoes;
const orangesGeteiltDurchManges = oranges / mangoes;
const frage7 = äpfelMinusMangoes < orangesGeteiltDurchManges;
console.log({frage7});


// Frage 8
const frage8 = mangoes === äpfel && mangoes === oranges;
console.log({frage8})


// Frage 9
const restÄpfelGeteiltDurchMangoes = äpfel % mangoes;
const restOrangesGeteiltDurchMangoes = oranges % mangoes;
const frage9 = restÄpfelGeteiltDurchMangoes === restOrangesGeteiltDurchMangoes;
console.log({frage9});


// Frage 10
const äpfelPlusMangoes = äpfel + mangoes;
const orangesMinusMangoes = oranges - mangoes;
const frage10 = äpfelPlusMangoes > orangesMinusMangoes;
const frage10Teil2 = äpfelPlusMangoes === orangesMinusMangoes;

console.log({frage10});
console.log({frage10Teil2});



