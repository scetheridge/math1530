var app = new Vue({
  el: "#binomial",
  data: {
    nmax: 30,
    n: 10,
    p: 0.1,
    precision: 6,
    sx: ""
  },
  methods:{
    prob: function(i){
      return jStat.binomial.pdf(i,this.n,this.p).toFixed(this.precision);
    },
    pxorless: function(i){
     return jStat.binomial.cdf(i,this.n,this.p).toFixed(this.precision);
    },
    pxormore: function(i){
      let ptdens= jStat.binomial.pdf(i,this.n,this.p);
      let rightarea = 1-jStat.binomial.cdf(i,this.n,this.p);
      return (ptdens+rightarea).toFixed(this.precision);
    }
  }
});