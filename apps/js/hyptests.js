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
        nmean: 100,
        precision: 6
    },
    computed: {
        propstat: function () {
            var stat = (this.phat - this.pnot) / (Math.sqrt(this.pnot * (1 - this.pnot) / this.nprop));
            return stat.toFixed(this.precision);
        },
        propleft: function () {
            var stat = (this.phat - this.pnot) / (Math.sqrt(this.pnot * (1 - this.pnot) / this.nprop));
            return (jStat.normal.cdf(stat, 0, 1)).toFixed(this.precision);
        },
        propright: function () {
            return (1 - this.propleft).toFixed(this.precision);
        },
        proptwo: function () {
            if (this.propleft < 0.5) {
                return (2 * this.propleft).toFixed(this.precision);
            }
            else {
                return (2*(1-this.propleft)).toFixed(this.precision);
            }

        },
        meanstat: function () {
            var stat = (this.xbar - this.munot) / (this.sd / Math.sqrt(this.nmean));
            return stat.toFixed(this.precision);
        },
        meanleft: function () {
            var stat = (this.xbar - this.munot) / (this.sd / Math.sqrt(this.nmean));
            return (jStat.studentt.cdf(stat, this.nmean - 1)).toFixed(this.precision);
        },
        meanright: function () {
            return (1 - this.meanleft).toFixed(this.precision);
        },
        meantwo: function () {
            if (this.meanleft < 0.5) {
                return (2 * this.meanleft).toFixed(this.precision);
            }
            else {
                return (2*(1-this.meanleft)).toFixed(this.precision);
            }

        }
    }
});