
var ctx = document.getElementById("myChart").getContext("2d");
// var label=
var data_unique_plays = [];
var data_total_plays = [];
var table = document.getElementById("table");
var total_plays_value1 = (table.rows[1].cells[3]).innerHTML;
console.log("total plays is "+total_plays_value1);
var total_plays_value2 = (table.rows[2].cells[3]).innerHTML;
var total_plays_value3 = (table.rows[3].cells[3]).innerHTML;
var total_plays_value4 = (table.rows[4].cells[3]).innerHTML;
var total_plays_value5 = (table.rows[5].cells[3]).innerHTML;
var total_plays_value6 = (table.rows[6].cells[3]).innerHTML;
var total_plays_value7 = (table.rows[7].cells[3]).innerHTML;

var unique_plays_value1 = (table.rows[1].cells[2]).innerHTML;
console.log("unique plays is "+unique_plays_value1);
var unique_plays_value2 = (table.rows[2].cells[2]).innerHTML;
var unique_plays_value3 = (table.rows[3].cells[2]).innerHTML;
var unique_plays_value4 = (table.rows[4].cells[2]).innerHTML;
var unique_plays_value5 = (table.rows[5].cells[2]).innerHTML;
var unique_plays_value6 = (table.rows[6].cells[2]).innerHTML;
var unique_plays_value7 = (table.rows[7].cells[2]).innerHTML;

data_unique_plays.push(unique_plays_value1);
data_unique_plays.push(unique_plays_value2);
data_unique_plays.push(unique_plays_value3);
data_unique_plays.push(unique_plays_value4);
data_unique_plays.push(unique_plays_value5);
data_unique_plays.push(unique_plays_value6);
data_unique_plays.push(unique_plays_value7);

data_total_plays.push(total_plays_value1);
data_total_plays.push(total_plays_value2);
data_total_plays.push(total_plays_value3);
data_total_plays.push(total_plays_value4);
data_total_plays.push(total_plays_value5);
data_total_plays.push(total_plays_value6);
data_total_plays.push(total_plays_value7);

var myChart = new Chart(ctx, {
    type:"bar",
    data:{
        labels: ["tom-1","tom-2","tom-3","tom-4","snare","crash","kick"],
        datasets:[
            {
                data:data_unique_plays,
                label:"Unique plays",
                backgroundColor: 'rgba(99, 132, 0, 0.6)',
                borderColor: 'rgba(99, 132, 0, 1)',

            },
            {
                label:"Total plays",
                data:data_total_plays,
                backgroundColor: 'rgba(0, 99, 132, 0.6)',
                borderColor: 'rgba(0, 99, 132, 1)',
            }
        ]
    }
})

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}



// var densityCanvas = document.getElementById("myChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

// var densityData = {
//   label: 'Total_plays',
//   data: data_total_plays,
//   backgroundColor: 'rgba(0, 99, 132, 0.6)',
//   borderColor: 'rgba(0, 99, 132, 1)',
//   yAxisID: "y-axis-density"
// };
 
// var gravityData = {
//   label: 'unique_Plays',
//   data: data_unique_plays,
//   backgroundColor: 'rgba(99, 132, 0, 0.6)',
//   borderColor: 'rgba(99, 132, 0, 1)',
//   yAxisID: "y-axis-gravity"
// };
 
// var planetData = {
//   labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
//   datasets: [densityData, gravityData]
// };
 
// var chartOptions = {
//   scales: {
//     xAxes: [{
//       barPercentage: 1,
//       categoryPercentage: 0.6
//     }],
//     yAxes: [{
//       id: "y-axis-density"
//     }, {
//       id: "y-axis-gravity"
//     }]
//   }
// };
 
// var barChart = new Chart(densityCanvas, {
//   type: 'bar',
//   data: planetData,
//   options: chartOptions
// });
