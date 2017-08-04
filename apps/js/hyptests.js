        // APP Start

        var app = new Vue({
            el: "#app",
            data: {
                title: "Hypothesis Testing",
                pnot: 0.3,
                phat: 0.5,
                nprop: 100,
                munot: 12,
                xbar: 11.5,
                sd: 5,
                nmean: 100
            },
            computed: {
                propstat: function () {
                    var stat = (this.phat - this.pnot) / (Math.sqrt(this.pnot * (1 - this.pnot) / this.nprop));
                    return stat
                },
                propleft: function () {
                    var stat = (this.phat - this.pnot) / (Math.sqrt(this.pnot * (1 - this.pnot) / this.nprop));
                    return jStat.normal.cdf(stat, 0, 1)
                },
                meanstat: function () {
                    var stat = (this.xbar - this.munot) / (this.sd / Math.sqrt(this.nmean));
                    return stat
                },
                meanleft: function () {
                    var stat = (this.xbar - this.munot) / (this.sd / Math.sqrt(this.nmean));
                    return jStat.studentt.cdf(stat, this.nmean - 1)
                }
            }
        });