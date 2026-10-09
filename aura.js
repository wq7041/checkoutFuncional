function pagamento(metodo) {
    // 1. Busca os valores dos inputs e converte para número
    let preco = Number(document.getElementById("preco").value);
    let frete = Number(document.getElementById("frete").value);
    let valorAPagar;

    // 2. Calcula o valor com base no método de pagamento escolhido
    if (metodo == 'Pix') {
        valorAPagar = (preco * 0.90) + frete;
    }
    if (metodo == 'Dinheiro') {
        valorAPagar = (preco * 0.95) + frete;
    }
    if (metodo == 'Cartao') {
        valorAPagar = preco + frete;
    }
    if (metodo == 'Parcelado') {
        valorAPagar = (preco * 1.1) + frete;
    }

    // 3. Formata o valor para exibir sempre com duas casas decimais (R\$ 0,00)
    let valorFormatado = valorAPagar.toFixed(2);

    // 4. Captura os elementos HTML da tela
    let resultado = document.getElementById('resultado'); // Corrigido: aspas simples padrão
    let forma = document.getElementById('forma');         // Corrigido: aspas simples e fechamento correto

    // 5. Atualiza o texto na tela
    forma.innerText = `Forma: ${metodo}`;
    resultado.innerText = `Total: R$ ${valorFormatado}`;
}
