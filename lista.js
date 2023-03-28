export class Lista{
    constructor(_TituloLista, _DescricaoLista, _CorLista){
        this._TituloLista = _TituloLista;
        this._DescricaoLista = _DescricaoLista;
        this._CorLista = _CorLista;
        this._ArrayLista = [];
    }
    addItem(item){
        this._ArrayLista.push(item);
    }
    removeItem(item){
        const index = this._ArrayLista.indexOf(item);
        index !== -1? this._ArrayLista.splice(index, 1): console.log("Não foi possível remover o Item, o item não está contido na lista");
    }

    setTituloLista(novoTituloLista){
        novoTituloLista == null? console.log('É necessário colocar um título'):this._TituloLista = novoTituloLista;
    }
    getTituloLista(){
        return this._TituloLista;
    }

    setDescricaoLista(novaDescricaoLista){
        this._DescricaoLista = novaDescricaoLista;
    }
    getDescricaoLista(){
        return this._DescricaoLista;
    }

    
}