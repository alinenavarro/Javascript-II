class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    //teste
    static dataParaTxt(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static txtParaData(txt) {

        if(!/\d{4}-\d{2}-\d{2}/.test(txt)) throw new Error('Deve estar no formato aaaa-mm-dd');
        
        return new Date(...txt.split('-').map((item, indice) => item - indice % 2));
    }
}
