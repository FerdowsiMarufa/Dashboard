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
fetch("http://localhost:81/GetAllMenuList")
  .then((response) => response.json())
  .then((data) => {
    // Initialize the array
    console.log(data);
    // Loop through the data and create objects
    data.forEach((item) => {
      const obj = {};
      obj.menuId = item.menu_ID;
      obj.menuName = item.menu_Name;
      obj.parentID = item.parent_ID;
      obj.pageName = item.page_Name;

      dataArray.push(obj);
    });
    // done();
    displaydata();
    // document.querySelector(".menu-approval").innerHTML = dataArray[0].menuName;
    // document.querySelector(".report-menu").innerHTML = dataArray[3].menuName;
  });
// let sp = document.createElement("p");
let approvalPanel = document.querySelector(".approval-panel");
let reportPanel = document.querySelector(".report-panel");
function displaydata() {
  for (let j = 0; j <= dataArray.length; j++) {
    if (j < 3) {
      if (dataArray[j].menuId != dataArray[j].parentID) {
        let sp = document.createElement("p");
        sp.innerText = dataArray[j].menuName;
        console.log(sp.innerText);
        approvalPanel.appendChild(sp);
      }
    } else {
      if (dataArray[j].menuId != dataArray[j].parentID) {
        let sp = document.createElement("p");
        sp.innerText = dataArray[j].menuName;
        console.log(sp.innerText);
        reportPanel.appendChild(sp);
      }
    }
    if (dataArray[j].menuId == dataArray[j].parentID)
      document.querySelector(".test-menu" + j).innerText =
        dataArray[j].menuName;
  }
  document.querySelector(".menu-approval").innerText = dataArray[0].menuName;
  document.querySelector(".report-menu").innerHTML = dataArray[3].menuName;
}

function done() {
  for (let i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i].pageName);
  }
}

// document.querySelector(".menu-approval").innerHTML = dataArray[0].pageName;

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
      console.log("NONE");
      panel.style.display = "none";
    } else {
      console.log("block");
      panel.style.display = "block";
    }
  });
}
