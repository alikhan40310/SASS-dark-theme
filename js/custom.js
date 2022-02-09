new Vue({
  el: "#app",
  data: function() {
  	return {
    	darkTheme: false
    }
  },
  methods: {
  	toggleTheme: function() {
    	this.darkTheme = !this.darkTheme;
    }
  }
})