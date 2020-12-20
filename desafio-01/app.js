new Vue({
    el:'#desafio',
    data:{
        titulo: 'Usando JS!',
        Nome: 'Marcos Junio',
        Idade: 28,
        ResultadoRandomico:'0',
    },
    methods:{
        saudacao: function(){
            return 'Boa Semana!'
        },
        randomico:function() { 
                return Math.random()
        }

    }
})