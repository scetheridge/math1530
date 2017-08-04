var app = new Vue({
  el: "#binomial",
  data: {
    nmax: 30,
    n: 10,
    p: 0.1,
    sx: ""
  },
  methods:{
    prob: function(i){
      return jStat.binomial.pdf(i,this.n,this.p).toFixed(6);
    },
    pxorless: function(i){
     return jStat.binomial.cdf(i,this.n,this.p).toFixed(6);
    },
    pxormore: function(i){
      let ptdens= jStat.binomial.pdf(i,this.n,this.p);
      let rightarea = 1-jStat.binomial.cdf(i,this.n,this.p);
      return (ptdens+rightarea).toFixed(6);
    }
  }
});