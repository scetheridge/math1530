

(function (exports) {

  // Complementary error function
  // From Numerical Recipes in C 2e p221
  var erfc = function (x) {
    var z = Math.abs(x);
    var t = 1 / (1 + z / 2);
    var r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 +
      t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 +
        t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 +
          t * (-0.82215223 + t * 0.17087277)))))))))
    return x >= 0 ? r : 2 - r;
  };

  // Inverse complementary error function
  // From Numerical Recipes 3e p265
  var ierfc = function (x) {
    if (x >= 2) { return -100; }
    if (x <= 0) { return 100; }

    var xx = (x < 1) ? x : 2 - x;
    var t = Math.sqrt(-2 * Math.log(xx / 2));

    var r = -0.70711 * ((2.30753 + t * 0.27061) /
      (1 + t * (0.99229 + t * 0.04481)) - t);

    for (var j = 0; j < 2; j++) {
      var err = erfc(r) - xx;
      r += err / (1.12837916709551257 * Math.exp(-(r * r)) - r * err);
    }

    return (x < 1) ? r : -r;
  };

  // Models the normal distribution
  var Gaussian = function (mean, variance) {
    if (variance <= 0) {
      throw new Error('Variance must be > 0 (but was ' + variance + ')');
    }
    this.mean = mean;
    this.variance = variance;
    this.standardDeviation = Math.sqrt(variance);
  }

  // Probability density function
  Gaussian.prototype.pdf = function (x) {
    var m = this.standardDeviation * Math.sqrt(2 * Math.PI);
    var e = Math.exp(-Math.pow(x - this.mean, 2) / (2 * this.variance));
    return e / m;
  };

  // Cumulative density function
  Gaussian.prototype.cdf = function (x) {
    return 0.5 * erfc(-(x - this.mean) / (this.standardDeviation * Math.sqrt(2)));
  };

  // Percent point function
  Gaussian.prototype.ppf = function (x) {
    return this.mean - this.standardDeviation * Math.sqrt(2) * ierfc(2 * x);
  };

  // Product distribution of this and d (scale for constant)
  Gaussian.prototype.mul = function (d) {
    if (typeof (d) === "number") {
      return this.scale(d);
    }
    var precision = 1 / this.variance;
    var dprecision = 1 / d.variance;
    return fromPrecisionMean(
      precision + dprecision,
      precision * this.mean + dprecision * d.mean);
  };

  // Quotient distribution of this and d (scale for constant)
  Gaussian.prototype.div = function (d) {
    if (typeof (d) === "number") {
      return this.scale(1 / d);
    }
    var precision = 1 / this.variance;
    var dprecision = 1 / d.variance;
    return fromPrecisionMean(
      precision - dprecision,
      precision * this.mean - dprecision * d.mean);
  };

  // Addition of this and d
  Gaussian.prototype.add = function (d) {
    return gaussian(this.mean + d.mean, this.variance + d.variance);
  };

  // Subtraction of this and d
  Gaussian.prototype.sub = function (d) {
    return gaussian(this.mean - d.mean, this.variance + d.variance);
  };

  // Scale this by constant c
  Gaussian.prototype.scale = function (c) {
    return gaussian(this.mean * c, this.variance * c * c);
  };

  var gaussian = function (mean, variance) {
    return new Gaussian(mean, variance);
  };

  var fromPrecisionMean = function (precision, precisionmean) {
    return gaussian(precisionmean / precision, 1 / precision);
  };

  exports(gaussian);
})
  (typeof (exports) !== "undefined"
    ? function (e) { module.exports = e; }
    : function (e) { this["gaussian"] = e; });
//end of stats math object

// APP Start

var app = new Vue({
  el: "#app-prob",
  data: {
    title: "Normal Distribution",
    znot: 2,
    dist: gaussian(0, 1),
    zleft: -1,
    zright: 1,
    area: 0.05
  },
  computed: {
    percentile: function () {
      return jStat.normal.inv(this.area, 0, 1)
    }
  },
  methods: {
    prob1func: function () {
      this.prob1 = (this.znot + 10);
    },
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    updategraph1: function () {
      let p = this.znot;
      setExpress(-4, p);
    },
    updategraph2: function () {
      // let p = this.znot;
      setExpress(this.zleft, this.zright);
    },
    updategraph3: function () {
      let z = jStat.normal.inv(this.area, 0, 1);
      setExpress(-4, z);
    }
  }
});


//Graph start
let x1b = -2;
let x2b = 1.5;


//bell
var elt = document.getElementById('bell');

var calculator123 = Desmos.Calculator(elt, {
  zoomButtons: false,
  expressions: true,
  settingsMenu: false,
  expressionsCollapsed: true,
  lockViewport: true,
  expressionsTopbar: true,
  solutions: true

});


function setExpress(x1b, x2b) {
  calculator123.setExpressions([
    //don't change the id, but change the latex formula
    {
      id: 'graph1',
      latex: 'f(x)=\\frac{1}{2\\pi} e^{(-{(x-a)^2}/{b})}'
    }, {
      id: 'slider1',
      latex: 'a=0',
      sliderBounds: {
        min: 0,
        max: 0,
        step: 1
      }
    }, {
      id: 'slider2',
      latex: 'b=1',
      sliderBounds: {
        min: .01,
        max: 10,
        step: .01
      }
    }, {
      id: 'graph4',
      latex: '0<y \\le f \\left( x \\right) \\left\\{x_1<x<x_2\\right\\}',
      color: '#8064A2'
    }, {
      id: 'graph5',
      latex: 'x=' + x2b + '\\left\\{0<y\\le f\\left(x\\right)\\right\\}',
      color: 'red'
    }, {
      id: 'graph6',
      latex: 'x=' + x1b + '\\left\\{0<y\\le f\\left(x\\right)\\right\\}',
      color: 'red'
    }, {
      id: 'slider3',
      latex: ('x_1=' + x1b),
      sliderBounds: {
        min: -6.5,
        max: 6.5,
        step: .01
      }
    }, {
      id: 'slider4',
      latex: 'x_2=' + x2b,
      sliderBounds: {
        min: -6.5,
        max: 6.5,
        step: .01
      }
    }

  ]);

}
calculator123.setMathBounds({
  //change below to change graph bounds
  left: -3,
  right: 3,
  bottom: -.05,
  top: 0.25
});
calculator123.setGraphSettings({
  //change values below to set axis scale or labels - set to 0 for auto
  xAxisLabel: '', //set this to 2 single quotes for nothing ''
  yAxisLabel: '',
  xAxisStep: '', // x axis count step
  yAxisStep: '',
  showGrid: false,
  projectorMode: true
}); //end the graph itemsssdf

setExpress(-3, 3);

//graph end