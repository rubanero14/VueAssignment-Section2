Vue.createApp({
    data(){
        return {
            someText: '',
            someText1: ''

        }
    },
    methods: {
        showAlert(){
            alert('Hi');
        },
        updateText(event){
            this.someText = event.target.value;
        },
        updateText1(event){
            this.someText1 = event.target.value;
        }
    }
}).mount("#assignment");