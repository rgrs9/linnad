
const tervitus1 = (nimi) => {
    return 'Tervitus ' + nimi
}

const tervitus2 = nimi => 'Suur tere ' + nimi;

const tervitus3 = (nimi) => {
    return 'Tere Tere ' + nimi
}
console.log(tervitus1('Nipitiri'))
console.log(tervitus2('Nipitiri'))

const nimed = [
    'Kati',
    'Mati',
    'Rebase Rein'
]
for (let i=0; i<nimed.length; i++) {
    console.log(nimed[i]);
}

nimed.forEach(tervitus3)

const tervitused = nimed.map(nimi => 'Salutations - ' + nimi)

console.log(tervitused)