$(document).ready(function () {
    // Exibe o formulário quando o botão do cabeçalho for clicado
    $('header button').click(function () {
        $('form').slideDown();
    });

    // Oculta o formulário quando o botão de cancelar for clicado
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    });

    // Adiciona nova imagem à galeria ao enviar o formulário
    $('form').on('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém o endereço da nova imagem digitada no input
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();

        // Cria um novo item da lista (<li>) inicialmente oculto
        const novoItem = $('<li>', { style: 'display: none;' });

        // Cria a tag <img> com o endereço da nova imagem e adiciona ao novo item
        $('<img>', { src: enderecoDaNovaImagem, alt: 'Nova imagem' })
            .appendTo(novoItem);

        // Cria o overlay com o link para visualizar a imagem em tamanho real
        const overlay = 
        $(`
            <div class="overlay-image-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            </div>
        `);

        // Adiciona o overlay ao novo item
        overlay.appendTo(novoItem);

        // Adiciona o novo item à galeria e exibe com um efeito fade-in
        novoItem.appendTo('ul').fadeIn(1300);

        // Limpa o valor do input após a inserção da nova imagem
        $('#endereco-imagem-nova').val('');
    });
});
