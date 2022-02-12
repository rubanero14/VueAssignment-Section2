const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish this Vue course!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/v2/guide/',
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random(); 
            if(randomNumber > 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');