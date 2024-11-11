const overeniHesla = heslo => {
    return heslo.letgth > 10 ? true : false
}

const registrace = (jmeno, heslo, overeni) => {
    if(!overeni(heslo)){
        return `<p>Uzivatel ${jmeno}nebyl uspesne registrovan! Heslo je prilis kratke</p>`
    }

    return `<p>Uzivatel ${jmeno} s heslem: '${heslo}' je uspesne registrovan!</p>`
}

const jmeno = prompt("Zadej jmeno")
const heslo = prompt("Zadej heslo")

document.body.innerHTML = registrace (jmeno, heslo, overeniHesla)

const kalkulacka = (cislo1, cislo2, op) => {
    if(op === "+") {
        return cislo1 + cislo2
    } else if(op === "-") {
        return cislo1 - cislo2
    } else if(op === "*") {
        return cislo1 * cislo2
    } else if(op === "/") {
        if(cislo2 === 0) {
            return "ERROR: nelze delit nulou"
        } else {
            return cislo1 / cislo2
        }
    } else {
        return null
    }
}

const plus = (cislo1, cislo2) => {
    return cislo1 + cislo2
}

const minus = (cislo1, cislo2) => {
    return cislo1 - cislo2
}

const kalkulacka2 = (cislo1, op, cislo2) => {
    return op(cislo1, cislo2)
}

console.log(kalkulacka2(10, plus, 5))
console.log(kalkulacka2(10, minus, 5))