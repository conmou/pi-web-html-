 // setup 取溫溼度
 Chart.defaults.color = '#F3F3F3';

 function updateChart(){
    async function fetchData(){
        const url="http://localhost:4000/orderdata"
        const response=await fetch(url)
        const datapoints=await response.json()
    return datapoints 
}
    fetchData().then(datapoints=>{
        const date=datapoints.map(function(index){
            return index.date
        })
        const hunidity=datapoints.map(function(index){
            return index.hunidity
        })
        const temp=datapoints.map(function(index){
            return index.temp
        })
        console.log(date)
        console.log(hunidity)
        console.log(temp)

        myChart.config.data.labels=date.reverse() //取最新資料時間正序排列
        myChart.config.data.datasets[0].data=hunidity.reverse()
        myChart.config.data.datasets[1].data=temp.reverse()

        myChart.update()
    })
}



const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: '即時濕度',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: '#445364',
        borderColor: '#50647C',
        tension:0.4,
    },{
        label: '即時溫度',
        data2: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: '#D6BD90',
        borderColor: '#FFD68F',
        tension:0.4,

    }]
};

// config type 改型態
const config = {
  type: 'line',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        
        
      }

    },
    plugins: {
      legend: {
          labels: {
            // color: "white",
              // 这个更具体的字体属性会覆盖全局属性
              font: {
                  size: 14
              }
          }
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
config
);