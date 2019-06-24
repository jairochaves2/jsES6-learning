class NegociacaoController{
    constructor(){
        let $=document.querySelector.bind(document);
        this._inputData=$("#data");
        this._inputQuantidade=$("#quantidade");
        this._inputValor=$("#valor");
    }


    adiciona(event){
        event.preventDefault();
        let dataCadastro=new DateHelper().textoParaData(this._inputData.value);
        let negociacao=new Negociacao(
            dataCadastro,
            this._inputQuantidade.value,
            this._inputValor.value  
        );
        console.log(negociacao);
        console.log(new DateHelper().dataParaTexto(negociacao.data));

    }
}