const app = Vue.createApp ({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        boxColored(box){
            if(box === 'A'){
                return this.boxASelected = !this.boxASelected;
            } else if(box === 'B') {
                return this.boxBSelected = !this.boxBSelected;
            } else {
                return this.boxCSelected = !this.boxCSelected;
            }
        }
    },
    computed: {
        boxAClasses(){
            return {
                active: this.boxASelected
            }
        }
    },
    watch: {

    }
});

app.mount('#styling');