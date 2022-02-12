const app = Vue.createApp({
    data(){
        return {
           inputClass:'',
           isVisible: true,
           inputBgColor: ''
        };
    },
    methods: {
        toggleVisiblity(){
            this.isVisible = !this.isVisible
         }
    },
    computed: {
        userTheme(){
           return {
               user1: this.inputClass === 'user1',
               user2: this.inputClass === 'user2',
               visible: this.isVisible,
               hidden: !this.isVisible,
           } 
        },
    },
    watch: {

    }
});

app.mount('#assignment');