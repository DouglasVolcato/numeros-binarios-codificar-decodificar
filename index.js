const prompt = require ("prompt-sync")()
let acao = 0
let numeroLength = 0
function mostrarNumero(arrNum, ref = 0){
    if (ref == arrNum.length) {
        return []
    } else {
        return(arrNum[ref] + mostrarNumero(arrNum, ref += 1))
    }
}
function numParaBinario(num,ref = 20){
    const potencia = Math.pow(2,ref)
    const subtracao = num - potencia
    if (ref < 0) {
        return [0]
    }
     else if (subtracao < 0) {
        const arr = numParaBinario(num,ref - 1)
        arr.unshift(0)
        return arr
    } else if (subtracao >= 0) {
        const arr = numParaBinario(subtracao,ref - 1)
        arr.unshift(1)
        return arr
    }
}
function codificador(num){
    const arr = numParaBinario(num)
    const numeroBinario = []
    let var1 = 0
    arr.pop()
    for(let i of arr) {
        if (i == 1){
            var1 = arr.indexOf(i)
            break
        }
    }
    for (let i = var1; i < arr.length; i++) {
        numeroBinario.push(arr[i])
    }
    return (mostrarNumero(numeroBinario))
}
function mostrarArr(arr, ref = 0) {
    if (ref == arr.length) {
        return []
    } else {
        return (arr[ref] + mostrarArr(arr,ref+1))
    }
}
function retirarUltimo(palavra) {
    const arr = []
    for (let i of palavra){
        arr.push(i)
    }
    arr.pop()
    return mostrarArr(arr)
}
function numLength(num){
    const numero = num.toString()
    return numero.length
}
function decodificador1(numBinario, ref = 0){
    const numero = numBinario.toString()
    const var1 = numero[numero.length-1]
    const resultado = var1 == '0' ? 0 : Math.pow(2,ref)
    const pop = retirarUltimo(numero)
    if (ref == numeroLength) {
        return []
    } else {
        const arr = decodificador1(pop,ref += 1)
        arr.push(resultado)
        return arr
    }
}
function decodificador2(arr){
    const somarArr = (a,b) => a + b
    return arr.reduce(somarArr)
}
function verificarBinario(num){
    let count = 0
    const numero = num.toString()
    for (let i of numero) {
        if (i != '1' && i != 0){
            count++
        }
    }
    if (count > 0) {return false}
    else {return true}
}
inicio: while(true) {
    console.clear()
    console.log("===| NÚMEROS BINÁRIOS |===\n")
    console.log("[1]CODIFICAR \n[2]DECODIFICAR \n[3]APRENDER \n[4]SAIR")
    acao = +prompt("Resposta: ")
    codificar: while(acao == 1) {
        console.clear()
        let numero = +prompt("Número: ")
        numeroLength = numLength(numero)
        console.log(`Número binário: `, codificador(numero))
        console.log("\nGostaria de codificar mais um número? [1]SIM [2]NÃO")
        let continuar = +prompt("Resposta: ")
        while (continuar != 1 && continuar != 2) {
            console.log("\nDIGITE APENAS 1 OU 2.")
            continuar = +prompt("Resposta: ")
        }
        if (continuar == 1) {
            continue codificar
        } else {break}
    }
    decodificar: while(acao == 2) {
        console.clear()
        let numero = +prompt("Número binário: ")
        if (verificarBinario(numero) == true) {
            numeroLength = numLength(numero)
            console.log(`Número: `,decodificador2(decodificador1(numero)))
        } else {
            console.log("O NÚMERO DIGITADO NÃO É BINÁRIO!")
        }
        console.log("\nGostaria de decodificar mais um número? [1]SIM [2]NÃO")
        let continuar = +prompt("Resposta: ")
        while (continuar != 1 && continuar != 2) {
            console.log("\nDIGITE APENAS 1 OU 2.")
            continuar = +prompt("Resposta: ")
        }
        if (continuar == 1) {
            continue decodificar
        } else {break}
    }
    aprender: while(acao == 3) {
        console.clear()
        const conversao = [
            {Decimal: 0, Binário: 0},
            {Decimal: 1, Binário: 1},
            {Decimal: 2, Binário: 10},
            {Decimal: 3, Binário: 11},
            {Decimal: 5, Binário: 101},
            {Decimal: 10, Binário: 1010},
            {Decimal: 15, Binário: 1111},
            {Decimal: 27, Binário: 11011},
            {Decimal: 53, Binário: 110101},
            {Decimal: 72, Binário: 1001000}
        ]
        console.log("\nEXEMPLOS:")
        console.table(conversao)
        prompt("[ENTER]")
        break
    }
    if(acao == 4) {
        break inicio
    }
}
