const app = Vue.createApp({
    data(){
        return {
            myName: 'Rajaruban Chettiar',
            myAge: 36,
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/750px-NewTux.svg.png',
        };
    },
    methods: {
        ageInFive(){
           return this.myAge+5;
        },
        favNum(){
            return Math.random();
        },
    }
});
app.mount('#assignment');