// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   },
// });

const dataArray = [];
fetch("https://localhost:7160/GetAllMenuList")
  .then((response) => response.json())
  .then((data) => {
    // Initialize the array
    console.log(data);
    // Loop through the data and create objects
    // data.forEach((item) => {
    //   const obj = {};
    //   obj.name = item.name;
    //   obj.value = item.value;
    //   obj.color = item.color;

    //   dataArray.push(obj);
    // });

    // Print the array
    // console.log(dataArray);
    // done();
    // [{name: "John", age: 30, city: "New York"}, {name: "Jane", age: 25, city: "San Francisco"}]
  });

function done() {
  console.log("marufa2");
  for (let i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i].name);
  }
}

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 18];
var barColors = ["#C9BBCF", "#B4E4FF", "#FFADAD", "#FFE9AE", "#7DB9B6"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,

    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "World Wine Production 2018",
    },
  },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
