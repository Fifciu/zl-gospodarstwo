new Vue({
  el: '#app',
  data: {
    current: null,
    modal: false
  },
  created: function(){
    var pathname = window.location.pathname;
    if(pathname.indexOf('en') !== -1){
      this.current = 'en';
    } else if(pathname.indexOf('ar') !== -1) {
      this.current = 'ar';
    } else {
      this.current = 'en';
    }
  },
  methods: {
    pick: function(val) {
      this.current = val;
      this.modal = false;
    }
  }
});