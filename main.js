$(document).ready(()=>{
    $('form').on('submit', (e)=> {
        e.preventDefault();
        const inputValor = $('#tarefa').val();
        const novaLista = $('<li></li>')
        $(`<p>${inputValor}</p>`).appendTo(novaLista);
        $(novaLista).appendTo('ul');
        $('input').val('')
        $(document).on('click', 'li', function() {
            $(this).toggleClass('riscado');
        });
    })
})