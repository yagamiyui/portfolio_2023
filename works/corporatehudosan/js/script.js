/*
PIE CHART
================================================ */
var pieData = {
  labels: ['営業職', '建設担当職', '現場管理職', '事務職他'],
  series: [14, 9, 5, 6]
};

var pieOptions = {
  width: '100%',
  height: '440px'
};

new Chartist.Pie('.pie-chart', pieData, pieOptions);

/*
BAR CHART
================================================ */
var barData = {
  labels: ['2018年', '2019年', '2020年'],
  series: [[10, 16, 29]]
};

var barOptions = {
  offset: 60,
  scaleMinSpace: 50,
  labelInterpolationFnc: function(value) {
    return value + ' 人'
  },
  width: '100%',
  height: '400px'
};

new Chartist.Bar('.bar-chart', barData, barOptions);