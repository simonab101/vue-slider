const {createApp} = Vue;

createApp({

  data(){
    return{
      
      images:[
        'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1293268/pexels-photo-1293268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7330707/pexels-photo-7330707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
      counter:0,
      
      image:[
        'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1293268/pexels-photo-1293268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7330707/pexels-photo-7330707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    }
  },

  methods:{
    arrow(next){
      if(next) this.counter++;
      else this.counter--
      if(this.counter === this.images.length) this.counter = 0;
      if(this.counter < 0) this.counter = this.images.length -1;
      console.log(this.counter)
    }
  },

  mounted(){
    setInterval(() => {
      this.arrow(true);
    }, 3000);
  },
}).mount('#app')