
//*cont que faz a formatacao e envia para o terceiro passo = Bruno Melo=*//
const formato = {
    phone(value){
        return value
        .replace(/\D/g,'')

        .replace(/(\d{2})(\d)/,'($1)$2')

        .replace(/(\d{4})(\d)/,'$1-$2')

        .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')

        .replace(/(-\d{4})\d+?$/,'$1')
    }
}

//*identifica tods os campos input e pecore com o For*//
document.querySelectorAll('input').forEach(($input)=>{

//*Armazena e formata o valo recebido paa pegar o que esta dentro de data-js*//
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        //*Enviar o valor ja formatado para o input atualizado em cada interacao*//
        e.target.value = formato[field](e.target.value)
    },false)

})


   
function questao(){
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        }); 
                   
};
