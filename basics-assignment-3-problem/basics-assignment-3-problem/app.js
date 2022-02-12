const app = Vue.createApp ({
    data(){
        return {
            counter: 0,
        }
    },
    methods: {
        add(number){
            return this.counter+=number;
        }
    },
    computed: {
        outputstring(){
            if(this.counter>37){
                return "Too much!";
            } else if(this.counter<37){
                return "Not there yet";
            } else {
                return this.counter;
            }
        }
    },
    watch: {
        outputstring(){
            const that = this;
            setTimeout( function(){
                that.counter = 0;
            },5000);
        }
    }
});

app.mount('#assignment');