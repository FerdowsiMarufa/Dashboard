const dataArray = [];
fetch("http://localhost:82/GetAllMenuList")
  .then((response) => response.json())
  .then((data) => {
    // Initialize the array
    // console.log(data);
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
  });

function displaydata() {
  let side_parent = document.getElementById("side-parent");
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].menuId == dataArray[i].parentID) {
      let btn = document.createElement("button");
      btn.className = "accordion";
      let fspan = document.createElement("span");
      let ficon = document.createElement("i");
      ficon.className = "fa-solid fa-check-to-slot icon-accordion";
      let sspan = document.createElement("span");
      sspan.className = "menu-approval test-menu0";
      sspan.innerText = dataArray[i].menuName;
      let drop_icon = document.createElement("i");
      drop_icon.className = "fa-solid fa-angle-down icon-down";

      fspan.appendChild(ficon);
      fspan.appendChild(sspan);

      btn.appendChild(fspan);
      btn.appendChild(drop_icon);

      side_parent.appendChild(btn);

      //  for child
      let child_div = document.createElement("div");
      child_div.className = "panel";

      for (let j = i + 1; j < dataArray.length; j++) {
        if (dataArray[j].parentID == dataArray[i].menuId) {
          let p = document.createElement("p");

          // let a = document.createElement("a");
          // a.innerText = dataArray[j].menuName;
          // p.appendChild(a);
          p.innerText = dataArray[j].menuName;
          // p.addEventListener("click", testfunction);
          p.onclick = testfunction;
          // p.onclick = testfunction();
          child_div.appendChild(p);
        }
      }
      side_parent.appendChild(child_div);
    }
  }

  // console.log(side_parent);
  var acc = document.getElementsByClassName("accordion");
  var i;
  console.log(acc.length);

  for (i = 0; i < acc.length; i++) {
    // console.log(i);
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
}
function testfunction() {
  document.querySelector(".home-page").style.display = "none";
  document.querySelector(".menu-page-header").style.display = "block";
}

// display  user data
//pending();
// function pending() {
//   const pendingData = [];
//   fetch("http://localhost:82/api/HrmLeave/GetAllPending")
//     .then((response) => response.json())
//     .then((data) => {
//       // Initialize the array
//       // Loop through the data and create objects
//       data.forEach((item) => {
//         const obj = {};
//         obj.employeeId = item.employeeId;
//         obj.leaveTypeCode = item.leaveTypeCode;
//         obj.leaveApplyDate = item.leaveApplyDate;
//         obj.leaveFromDate = item.leaveFromDate;
//         obj.leaveProcessStatus = item.leaveProcessStatus;
//         obj.leaveToDate = item.leaveToDate;
//         obj.leaveDaysNo = item.leaveDaysNo;
//         pendingData.push(obj);
//       });
//       console.log(pendingData);
//       displayPendingData();
//     });
//   // display data in new page
//   function displayPendingData() {
//     document.getElementById("new-page").style.display = "block";
//     document.getElementById("approved-page").style.display = "none";
//     document.getElementById("reject-page").style.display = "none";
//     newApprovalContainer = document.querySelector(".new-containner");
//     console.log(newApprovalContainer);
//     for (let i = 0; i < pendingData.length; i++) {
//       newApprovalContainer.innerHTML +=
//         `<div class="row text-center">
// <div class="col-1">
//   <input
//     class="form-check-input"
//     type="checkbox"
//     value=""
//     onclick=
//     id="flexCheckDefault"
//   />
// </div>
// <div class="col">` +
//         pendingData[i].employeeId +
//         `</div>
// <div class="col">` +
//         pendingData[i].leaveTypeCode +
//         `</div>
// <div class="col">` +
//         pendingData[i].leaveApplyDate +
//         `</div>
// <div class="col">` +
//         pendingData[i].leaveFromDate +
//         `</div>
// <div class="col">` +
//         pendingData[i].leaveToDate +
//         `</div>
// <div class="col">` +
//         pendingData[i].leaveDaysNo +
//         `</div>
// <div class="col individual-select-item">
// <i class="fa-solid fa-xmark cross"></i>
// <i class="fa-solid fa-check select"></i>
// </div>
// </div>
// `;
//     }
//   }
// }

// const pendingData = [];
// fetch("http://localhost:85/api/HrmLeave/GetAllPending")
//   .then((response) => response.json())
//   .then((data) => {
//     // Initialize the array
//     console.log(data);
//     // Loop through the data and create objects
//     data.forEach((item) => {
//       const obj = {};
//       obj.employeeId = item.employeeId;
//       obj.leaveTypeCode = item.leaveTypeCode;
//       obj.leaveApplyDate = item.leaveApplyDate;
//       obj.leaveFromDate = item.leaveFromDate;
//       obj.leaveProcessStatus = item.leaveProcessStatus;
//       obj.leaveToDate = item.leaveToDate;
//       obj.leaveDaysNo = item.leaveDaysNo;
//       obj.ApplicationId = item.applicationId;
//       console.log(item.applicationId);
//       pendingData.push(obj);
//     });
//     console.log(pendingData);
//     displayPendingData();
//   });

// // display data in new page

// function displayPendingData() {
//   newApprovalContainer = document.querySelector(".new-containner");
//   // console.log(newApprovalContainer);
//   for (let i = 0; i < pendingData.length; i++) {
//     newApprovalContainer.innerHTML +=
//       `<div class="row text-center">
// <div class="col-1">
//   <input
//     class="form-check-input check-box"
//     type="checkbox"
//     name="box"
//     value=""
//     onclick="checkFunction(\'' + pendingData[i].ApplicationId + '\')"
//     id="flexCheckDefault"
//   />
// </div>
// <div class="col">` +
//       pendingData[i].employeeId +
//       `</div>
// <div class="col">` +
//       pendingData[i].leaveTypeCode +
//       `</div>
// <div class="col">` +
//       pendingData[i].leaveApplyDate +
//       `</div>
// <div class="col">` +
//       pendingData[i].leaveFromDate +
//       `</div>
// <div class="col">` +
//       pendingData[i].leaveToDate +
//       `</div>
// <div class="col">` +
//       pendingData[i].leaveDaysNo +
//       `</div>
// <div class="col individual-select-item">
//   <i class="fa-solid fa-xmark cross"></i>
//   <i class="fa-solid fa-check select"></i>
// </div>
// </div>
// `;
//   }
// }

// // onclick function of check box
// const clickedID = [];
// function checkFunction() {
//   console.log(pendingData[i].ApplicationId);
// }

//chart data
var chartjson = {
  title: "Acivitics of the employee",
  data: [
    {
      name: "Kerry",
      score: 20,
    },
    {
      name: "Teegan",
      score: 73,
    },
    {
      name: "Jamalia",
      score: 20,
    },
    {
      name: "Quincy",
      score: 89,
    },
    {
      name: "Darryl",
      score: 24,
    },
    {
      name: "Jescie",
      score: 86,
    },
    {
      name: "Quemby",
      score: 46,
    },
    {
      name: "McKenzie",
      score: 71,
    },
  ],
  xtitle: "Secured Marks",
  ytitle: "Marks",
  ymax: 100,
  ykey: "score",
  xkey: "name",
  prefix: "%",
};

//chart colors
var colors = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
];

//constants
var TROW = "tr",
  TDATA = "td";

var chart = document.createElement("div");
//create the chart canvas
var barchart = document.createElement("table");
//create the title row
var titlerow = document.createElement(TROW);
//create the title data
var titledata = document.createElement(TDATA);
//make the colspan to number of records
titledata.setAttribute("colspan", chartjson.data.length + 1);
titledata.setAttribute("class", "charttitle");
titledata.innerText = chartjson.title;
titlerow.appendChild(titledata);
barchart.appendChild(titlerow);
chart.appendChild(barchart);

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (var i = 0; i < chartjson.data.length; i++) {
  barrow.setAttribute("class", "bars");
  var prefix = chartjson.prefix || "";
  //create the bar data
  var bardata = document.createElement(TDATA);
  var bar = document.createElement("div");
  bar.setAttribute("class", colors[i]);
  bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.appendChild(bar);
  barrow.appendChild(bardata);
}

//create legends
var legendrow = document.createElement(TROW);
var legend = document.createElement(TDATA);
legend.setAttribute("class", "legend");
legend.setAttribute("colspan", chartjson.data.length);

//add legend data
for (var i = 0; i < chartjson.data.length; i++) {
  var legbox = document.createElement("span");
  legbox.setAttribute("class", "legbox");
  var barname = document.createElement("span");
  barname.setAttribute("class", colors[i] + " xaxisname");
  var bartext = document.createElement("span");
  bartext.innerText = chartjson.data[i][chartjson.xkey];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById("chart").innerHTML = chart.outerHTML;

//chart
// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 18];
// var barColors = ["#C9BBCF", "#B4E4FF", "#FFADAD", "#FFE9AE", "#7DB9B6"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,

//     datasets: [
//       {
//         backgroundColor: barColors,
//         data: yValues,
//       },
//     ],
//   },
//   options: {
//     legend: { display: false },
//     title: {
//       display: true,
//       text: "World Wine Production 2018",
//     },
//   },
// });

//on click button
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  console.log(i);
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

// [
//   {
//     "employeeId": 971,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "12/26/2016 5:48:22 PM",
//     "leaveFromDate": "12/22/2016 12:00:00 AM",
//     "leaveToDate": "12/22/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 55,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "10/10/2016 12:21:50 PM",
//     "leaveFromDate": "10/3/2016 12:00:00 AM",
//     "leaveToDate": "10/3/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "DisApproved"
//   },
//   {
//     "employeeId": 55,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "12/26/2016 5:48:22 PM",
//     "leaveFromDate": "12/22/2016 12:00:00 AM",
//     "leaveToDate": "12/22/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "DisApproved"
//   },
//   {
//     "employeeId": 957,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "10/10/2016 12:22:03 PM",
//     "leaveFromDate": "10/6/2016 12:00:00 AM",
//     "leaveToDate": "10/6/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 987,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "12/26/2016 5:48:22 PM",
//     "leaveFromDate": "12/22/2016 12:00:00 AM",
//     "leaveToDate": "12/22/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 889,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "10/10/2016 12:22:15 PM",
//     "leaveFromDate": "10/9/2016 12:00:00 AM",
//     "leaveToDate": "10/9/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 844,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "11/9/2016 11:21:53 AM",
//     "leaveFromDate": "10/10/2016 12:00:00 AM",
//     "leaveToDate": "10/12/2016 12:00:00 AM",
//     "leaveDaysNo": 3,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 189,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "12/26/2016 5:48:22 PM",
//     "leaveFromDate": "12/22/2016 12:00:00 AM",
//     "leaveToDate": "12/22/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 988,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "12/26/2016 5:48:51 PM",
//     "leaveFromDate": "12/20/2016 12:00:00 AM",
//     "leaveToDate": "12/20/2016 12:00:00 AM",
//     "leaveDaysNo": 1,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 957,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "10/19/2016 5:32:13 PM",
//     "leaveFromDate": "10/13/2016 12:00:00 AM",
//     "leaveToDate": "10/13/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 39,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "10/19/2016 5:32:19 PM",
//     "leaveFromDate": "10/15/2016 12:00:00 AM",
//     "leaveToDate": "10/15/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Pending"
//   },
//   {
//     "employeeId": 989,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "12/26/2016 5:48:51 PM",
//     "leaveFromDate": "12/20/2016 12:00:00 AM",
//     "leaveToDate": "12/20/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 990,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "12/26/2016 5:48:51 PM",
//     "leaveFromDate": "12/20/2016 12:00:00 AM",
//     "leaveToDate": "12/20/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 46,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "10/25/2016 1:56:12 PM",
//     "leaveFromDate": "10/6/2016 12:00:00 AM",
//     "leaveToDate": "10/6/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 38,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "11/2/2016 4:49:35 PM",
//     "leaveFromDate": "10/31/2016 12:00:00 AM",
//     "leaveToDate": "10/31/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 951,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "11/3/2016 10:07:43 AM",
//     "leaveFromDate": "10/27/2016 12:00:00 AM",
//     "leaveToDate": "10/27/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 959,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "11/3/2016 10:07:43 AM",
//     "leaveFromDate": "10/27/2016 12:00:00 AM",
//     "leaveToDate": "10/27/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 887,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "11/3/2016 10:07:48 AM",
//     "leaveFromDate": "10/29/2016 12:00:00 AM",
//     "leaveToDate": "10/29/2016 12:00:00 AM",
//     "leaveDaysNo": 1,
//     "leaveProcessStatus": "Approved"
//   },
//   {
//     "employeeId": 39,
//     "leaveTypeCode": "LT-0001",
//     "leaveApplyDate": "11/7/2016 9:26:15 AM",
//     "leaveFromDate": "10/24/2016 12:00:00 AM",
//     "leaveToDate": "10/24/2016 12:00:00 AM",
//     "leaveDaysNo": 0.5,
//     "leaveProcessStatus": "Pending"
//   },
