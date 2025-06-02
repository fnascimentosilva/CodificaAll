let serie = {
    nome: 'High School Musical',
    dataLancamento: 2007,
    atores:['Zac Efron', 'Clint EastWood', 'Artur Morgan'],
    status: 'finalizada',
    classificacao: 18,
    nrTemporada: {
        temp:12,
        temp:2,
        temp:0
    },

    mostrarCaracteristicas: function(){
        return `O nome da série é ${this.nome} a classificacão é para maiores de ${this.classificacao} anos e ela está ${this.status}`
    }
}

/* console.log(serie.mostrarCaracteristicas()); */

function anime(nome, personagemForte, personagemFraco, nota){

    this.nome = nome
    this.personagemForte = personagemForte
    this.personagemFraco = personagemFraco
    this.nota = nota

    this.mostrarAnime = function(){
        return`
        nome:${this.nome},
        maisForte:${this.personagemForte},
        maisFraco:${this.personagemFraco},
        nota:${this.nota}
        `
    }

}

let naruto = new anime('Naruto', 'Guy Sensei', 'Picollo', 7)

console.log(naruto.mostrarAnime())
