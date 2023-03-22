function calcular(tipo, valor) {
    // Adicionando uma condição para o tipo Ação.
    if(tipo == 'acao') {
        // Em caso de C, o campo será zerado.
        if(valor == 'C') {
            document.getElementById('resultado').value = ''
        }
        // Em caso de operações matemáticas, vamos concatenar os valores
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        // Em caso de =, vamos adquirir o valor do id="resultado"
        if(valor === '=') {
            // eval = computa um código JavaScript representado como uma string.
            var valorCampo = eval(document.getElementById('resultado').value)
            // Por fim, vamos atribuir ao id="resultado" o valor de campo
            document.getElementById('resultado').value = valorCampo
        }
    
    // Adicionando uma condição para o tipo Ação.
    }else if(tipo == 'valor') { 
        document.getElementById('resultado').value += valor
    }
}
