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
function decodificador1(numBinario, numeroLength, ref = 0){
    const numero = numBinario.toString()
    const var1 = numero[numero.length-1]
    const resultado = var1 == '0' ? 0 : Math.pow(2,ref)
    const pop = retirarUltimo(numero)
    if (ref == numeroLength) {
        return []
    } else {
        const arr = decodificador1(pop,numeroLength,ref += 1)
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

function codificarInput(){
    const inputCodificar = document.getElementById("inputCodificar");
    const pCodificar = document.getElementById("pCodificar");
    const numeroLength = numLength(inputCodificar.value)

    pCodificar.innerText = (codificador(inputCodificar.value));
    inputCodificar.value = "";
}

function decodificarInput(){
    const inputDecodificar = document.getElementById("inputDecodificar");
    const pDecodificar = document.getElementById("pDecodificar");

    if (verificarBinario(inputDecodificar.value) == true) {
        const numeroLength = numLength(inputDecodificar.value);
        pDecodificar.innerText = (decodificador2(decodificador1(inputDecodificar.value,numeroLength)));
    } else {
        pDecodificar.innerText = ("O NÚMERO DIGITADO NÃO É BINÁRIO!");
    }
    inputDecodificar.value = "";
}