class NegociacaoController {

constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQtd = $('#quantidade');
    this._inputValor = $('#valor');

}

    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.txtParaData(this._inputData.value),
            this._inputQtd.value,
            this._inputValor.value
        );

        console.log(DateHelper.dataParaTxt(negociacao.data));
    }

}