        // APP Start

        var app = new Vue({
            el: "#app",
            data: {
                title: "Estimating Population Parameters",
                phat: 0.5,
                nprop: 100,
                clevelp: 0.95,
                xbar: 10,
                sd: 2,
                nmean: 100,
                clevelm: 0.95,
                b: 0,
                precision: 6
            },
            computed: {
                properr: function () {
                    var alp1 = (1 - this.clevelp) / 2;
                    var marg = Math.sqrt(this.phat*(1-this.phat) / this.nprop);
                    this.b = (marg*jStat.normal.inv(1-alp1,0,1)).toFixed(this.precision);
                    return this.b;
                },
                meanerr: function() {
                    var alp = (1 - this.clevelm) / 2;
                    var marg2 = this.sd / Math.sqrt(this.nmean);
                    return (marg2*(jStat.studentt.inv(1-alp, this.nmean))).toFixed(this.precision);
                }
            }
            // updated: function() {
            //     var math = MathJax.Hub.getAllJax("test123")[0];
            //     MathJax.Hub.Queue(["Text",math,this.b]);
            //     // MathJax.Hub.Typeset();
            //     // var math = MfathJax.Hub.getallJax
            //     // MathJax.Hub.Queue(["Typeset",MathJax.Hub, "test123"]);
            // }
        });