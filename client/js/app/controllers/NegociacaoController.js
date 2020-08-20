class NegociacaoController {

constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQtd = $('#quantidade');
    this._inputValor = $('#valor');

}

    adiciona(event) {
        event.preventDefault();

        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        //let data = new Date(this._inputData.value.split('-');
        
        // testando data com paradigma funcional:
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
            
        );

        let negociacao = new Negociacao(
            data,
            this._inputQtd.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }

}