const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: '',
    };
  },
  watch: {
    // name(value){
    //   this.fullname = value !== '' ? value + ' '+ this.lastName : ''; 
    // },
    // lastName(value){
    //   this.fullname = value !== '' ? this.name + ' '+ value : ''; 
    // },
    counter(value){
      value > 0 ? this.counter=value : this.counter=0;
    },
  },
  computed: {
    fullname(){
      return (this.name !== '' && this.lastName !== '') ? this.name + ' ' + this.lastName : '';
    }
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Hi')
    },
    setName(event, lastName){
      this.name = event.target.value;
    },
    add(number){
      this.counter+=number;
    },
    reduce(number){
      this.counter-=number;
    },
    resetInput(){
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
