import usedCarRank from './test'

let homeOption = {
  backgroundColor: '#2c343c',
  title: {
      text: '二手车热度饼图',
      left: 'center',
      top: 20,
      textStyle: {
          color: '#ccc'
      }
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
          colorLightness: [0, 1]
      }
  },
  series : [{
    name:'车型',
    type:'pie',
    radius : '80%',
    center: ['50%', '55%'],
    data:usedCarRank.slice(0, 30).sort(function (a, b) { return a.value - b.value; }),
    roseType: 'radius',
    label: {
        normal: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        }
    },
    labelLine: {
        normal: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
        }
    },
    itemStyle: {
        normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    },
    animationType: 'scale',
    animationEasing: 'elasticOut',
    animationDelay: function (idx) {
        return Math.random() * 200;
    }
  }]
}

let pointOption = {
  title: {
    text: '汽车价格区间',
    subtext: '数据来源太平洋汽车网',
    left: 'center'
  },
  xAxis: {},
  yAxis: {},
  series: [{
    symbolSize: 10,
    data: usedCarRank.map((item) => {
      if (item.price.length === 2 && item.price[0] < 200) {
        return item.price
      }
    }),
    type: 'scatter',
    markLine:{
      animation: false,
      label: {
        normal: {
          formatter: 'y = 1.21 * x + 2',
          textStyle: {
            align: 'right'
          }
        }
      },
      lineStyle: {
        normal: {
          type: 'solid'
        }
      },
      tooltip: {
        formatter: 'y = 1.21 * x + 2'
      },
      data: [[{
        coord: [0, 2],
        symbol: 'none'
      }, {
        coord: [150, 183.5],
        symbol: 'none'
      }]]
  }
  }],
  tooltip: {
    formatter: '价格区间({c})'
  }
}

let verticalOption = {
  title: {
    text: '汽车价格占比',
    subtext: '数据来源太平洋汽车网',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: "区间占比 <br/>{b}:{d}%"
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data:['0-20万','20-50万','50-100万','100-200万','200万以上']
  },
  series: [
    {
      name:'访问来源',
      type:'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:(()=>{
        let res = [
          {name:'0-20万', value: 0},
          {name:'20-50万', value: 0},
          {name:'50-100万', value: 0},
          {name:'100-200万', value: 0},
          {name:'200万以上', value: 0},
        ]
        usedCarRank.forEach((item) => {
          if (item.price.length === 2) {
            if (item.price[1] <= 20) {
              res[0].value ++
            } else if (item.price[1] <= 50) {
              res[1].value ++
            } else if (item.price[1] <= 100) {
              res[2].value ++
            } else if (item.price[1] <= 200) {
              res[3].value ++
            } else {
              res[4].value ++
            }
          }
        })
        return res
      })()
    }
  ]
}
export {usedCarRank, homeOption, pointOption, verticalOption}