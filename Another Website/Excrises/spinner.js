const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//object that stores vaule of minimun and maxium angle for a
const rotationValues = [
    {minDegree:0,maxDegree:30, value:2 },
    {minDegree:31,maxDegree:90, value:1 },
    {minDegree:91,maxDegree:150, value:6},
    {minDegree:151,maxDegree:210, value:5},
    {minDegree:211,maxDegree:270, value:4},
    {minDegree:271,maxDegree:330, value:3},
    {minDegree:331,maxDegree:360, value:2},
];
//size of each piece
const data = [16, 16, 16, 16, 16, 16, ];
//background color for each piece
var pieColors = ["#8b35bc", "#b163da", "#8b35bc", "#b163da", "#8b35bc", "#b163da",];
//create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: ['Trippie',' CUCO', '  Weeknd', 'iann', 'Ne-Yo', 'b.p' ],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display vaule based on the randomAngle
const valueGenerator = (angleValue) => {
    for (let i of rotationValues){
        //if the angleValue is between min and max then display it
        if(angleValue >= i.minDegree && angleValue <= i.maxDegree){
            finalValue.innerHTML = `<p>Value: ${i.value} </p>`;
            spinBtn.disabled = false;
            break;
        }
    }
};

//spinner count
let count = 0;
//100 roations for animation and last rotation for result
let resultValue = 101;
//start spinning
spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    //empty final value
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    //generate random degrees to stop at 
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    //interval for rotation animation
    let rotationInterval = window.setInterval(() => {
        //set rotation for piechart
        myChart.options.rotation = myChart.options.rotation + resultValue;
        //update chart with new values;
        myChart.update();
        //if rotation 360 reset it back to 0
        if (myChart.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            myChart.options.rotation = 0;
        } else if(count > 15 && myChart.options.rotation == randomDegree){
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count= 0;
            resultValue = 101;
        }
    }, 10); 
});