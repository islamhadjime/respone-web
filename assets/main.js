const ctx1 = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChartasd').getContext('2d');
Chart.defaults.font.size = 9;
Chart.defaults.font.weight = '600';
Chart.defaults.color = "#02f7f2";
let options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display:false
    }
  },
  scales: {
    x: {
      grid: {
        display:false
      }
    }

  },

}
function rebderData() {
  let labels_title = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  let data_count = [12, 19, 3, 5, 2, 3]
  let data = {
    labels:labels_title,
    datasets:[{
      data:data_count,
      backgroundColor: 'rgba(0, 255, 252, 1)',
      borderColor:'rgba(0, 255, 252, 0.3)',
      borderWidth: 1
    }]
  }
  return data
}
function renderChart(elemnt,bar,data) {
    return new Chart(elemnt,{
      type: `${bar}`,
      data: data,
      options
    })
}
renderChart(ctx1,'line',rebderData())
renderChart(ctx2,'bar',rebderData())
