export class Item{
    constructor(_TituloItem, _DescricaoItem, _PrioridadeItem){
        setTituloItem(_TituloItem);
        this._DescricaoItem = _DescricaoItem;
        this._PrioridadeItem = _PrioridadeItem;
        this._DataDeCriacaoItem = new Date();
    }
    editarItem(novoTituloItem, novaDescricaoItem, novaPrioridadeItem){
        setTituloItem(novoTituloItem);
        this._DescricaoItem = novaDescricaoItem;
        this._PrioridadeItem = novaPrioridadeItem;
        this._DataDeEdicaoItem = new Date();
    }

    setTituloItem(novoTituloItem){
        if(novoTituloItem != null){
            this._TituloItem = novoTituloItem;
        }
    }
    getTituloItem(){
        return this._TituloItem;
    }

    setDescricaoItem(novaDescricaoItem){
        this._Descricao = novaDescricaoItem;
    }
    getDescricaoItem(){
        return this._DescricaoItem;
    }

    setPrioridadeItem(novaPrioridadeItem){
        this._PrioridadeItem = novaPrioridadeItem;
    }
    getPrioridadeItem(){
        return this._PrioridadeItem;
    }

    getDataDeCriacaoItem(){
        return this._DataDeCriacaoItem;
    }
    getDataDeEdicaoItem(){
        return this._DataDeEdicaoItem;
    }



}