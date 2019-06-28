class ListaNegociacoes{
    constructor(armadilha){
        this._negociacoes=[]
        this._armadilha=armadilha;
    }
    adiciona(negociacoes){
        this._negociacoes.push(negociacoes);
        this._armadilha(this);
        
        // Reflect.apply(this._armadilha,this.contexto,[this]);//(função_que_será_executada,contexto,parametros passados para a função_que_será_executada)

    }
    get negociacoes(){
        return [].concat(this._negociacoes);
    }
    esvazia(){
        this._negociacoes=[];
        this._armadilha(this);
        //Reflect.apply(this._armadilha,this.contexto,[this]);//(função_que_será_executada,contexto,parametros passados para a função_que_será_executada)

    }
}