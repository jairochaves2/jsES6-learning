class DateHelper{
    constructor(){
        throw new Error("DateHelper não pode ser instanciada");
    }
    static textoParaData(texto){
        return new Date(...texto.split('-').map((item,indice)=>{
                if(indice==1){
                    return item-1;
                }
                return item;
            })
        )
    }
    static dataParaTexto(data){
       return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
    }
}