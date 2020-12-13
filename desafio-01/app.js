new Vue({
    el:'#desafio',
    data:{
        titulo: 'Usando JS!',
        Nome: 'Marcos Junio',
        Idade: '27',
        ResultadoRandomico:'0',
    },
    methods:{
        saudacao: function(){
            return 'Boa Semana!'
        },
        methods: {
            this.ResultadoRandomico= Math.random()
            return this.ResultadoRandomico
            
        }

    }
})