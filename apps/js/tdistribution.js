// APP Start

var app = new Vue({
  el: "#app",
  data: {
    title: "Student-t Distribution",
    df: 29,
    area: 0.05,
    df2: 28,
    area2: 0.025,
    precision: 6
  },
  computed: {
    tcv: function () {
      return jStat.studentt.inv(this.area, this.df).toFixed(this.precision);
    },
    tcv2: function () {
      return jStat.studentt.inv(this.area2, this.df2).toFixed(this.precision);
    }
  },
  methods: {
  updategraph1: function () {
    let p = jStat.studentt.inv(this.area, this.df);
    setExpress(p, 4);
  },
  updategraph2: function () {
    let p = jStat.studentt.inv(this.area2, this.df2);
    setExpress(p, -p);
  }
}
});

//Graph start
let x1b = -2;
let x2b = 1.5;


//bell
var elt = document.getElementById('bell');

var tcalc = Desmos.Calculator(elt, {
  zoomButtons: false,
  expressions: true,
  settingsMenu: false,
  expressionsCollapsed: true,
  lockViewport: true,
  expressionsTopbar: true,
  singleVariableSolutions: true,
  pointsOfInterest: true,

});


function setExpress(x1b, x2b) {
  tcalc.setExpressions([
    //don't change the id, but change the latex formula
    {
      id: 'graph1',
      latex: `f\\left(x\\right)= \\frac{1}{\\sqrt{v}\\int _0^1t^{-.5}\\left(1-t\\right)^{\\left(\\frac{v}{2}-1\\right)}dt}\\left(1+\\frac{x^2}{v}\\right)^{\\left(\\frac{\\left(-v-1\\right)}{2}\\right)}`

    }, {
      id: 'slider1',
      latex: 'v=30',
      sliderBounds: {
        min: 0,
        max: 100,
        step: 5
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
      latex: '0<y \\le f \\left( x \\right) \\left\\{x_1>x\\right\\}',
      color: '#8064A2'
    },{
      id: 'graph5',
      latex: '0<y \\le f \\left( x \\right) \\left\\{x>x_2\\right\\}',
      color: '#8064A2'
    }, {
      id: 'graph6',
      latex: 'x=' + x2b + '\\left\\{0<y\\le f\\left(x\\right)\\right\\}',
      color: 'red'
    }, {
      id: 'graph7',
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
tcalc.setMathBounds({
  //change below to change graph bounds
  left: -3,
  right: 3,
  bottom: -.05,
  top: 0.5
});
tcalc.updateSettings({
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