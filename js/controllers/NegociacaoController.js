class NegociacaoController{
    constructor(){
        let $=document.querySelector.bind(document);
        this._inputData=$("#data");
        this._inputQuantidade=$("#quantidade");
        this._inputValor=$("#valor");
    }


    adiciona(event){
        event.preventDefault();
        
        let negociacao=new Negociacao(
            new Date(...this._inputData.value
                .split('-')
                .map(function(item,indice){
                    if(indice==1){
                        return item-1;
                    }
                    return item;
                })
            ),
            this._inputQuantidade.value,
            this._inputValor.value  
        );
        console.log(negociacao);

    }
}