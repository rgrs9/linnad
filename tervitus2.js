const sober = {
    nimi: 'Nipitiri',
    aadress: 'Metsatuka 5'
}

console.log(sober.nimi) // väljastab nipitiri

const {nimi} = sober;

console.log(nimi) // nipitiri

const tervitus = [
    'Tige kala',
    (nimi) => 'Tere ' + nimi
]

console.log(tervitus[1]('Karu Kati'));