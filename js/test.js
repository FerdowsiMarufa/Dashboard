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

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");
//     console.log("active");
//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

var acc = document.getElementsByClassName("accordion");
console.log("button", acc);
// acc.addEventListener("click", function () {
//   /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//   console.log("hiiiiiii");
//   var panel = document.getElementsByClassName("panel");
//   if (panel.style.display === "block") {
//     panel.style.display = "none";
//   } else {
//     panel.style.display = "block";
//   }
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
      obj.menu_ID = item.menu_ID;
      obj.menu_Name = item.menu_Name;
      obj.paren_tID = item.parent_ID;
      obj.page_Name = item.page_Name;

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
  let sidebarContent = document.querySelector(".sidebar-content");

  for (let j = 0; j <= dataArray.length; j++) {
    if (dataArray[j].menuID == dataArray[j].parentID) {
      let ps = document.createElement("p");
      let button = document.createElement("button");
      let i_parent = document.createElement("i");
      let i_down = document.createElement("i");
      let spanparent = document.createElement("span");
      let a_tag = document.createElement("a");

      spanparent.classList = "menu-approval";
      button.className = "accordion";

      ps.appendChild(i_parent);
      ps.appendChild(spanparent);
      button.appendChild(ps);
      button.appendChild(i_down);
      spanparent.innerHTML = dataArray[j].menu_Name;
      sidebarContent.appendChild(button);

      let parentName = dataArray[j].menu_Name;
      //   console.log(parentName);
    }

    let div = document.createElement("div");

    if (dataArray[j].menu_ID != dataArray[j].parent_ID) {
      for (let i = 0; i <= dataArray.length; i++) {
        if (dataArray[j].parent_ID == dataArray[i].menu_ID) {
          console.log(dataArray[i].menu_Name);
          let para = document.createElement("p");
          div.className = dataArray[i].menu_Name + "panel";
          //   para.innerText = dataArray[j].menuName;
          console.log((para.innerText = dataArray[j].menu_Name));
          div.appendChild(para);
          sidebarContent.appendChild(div);
        }
      }
    }
  }
}

// <button class="accordion">
//         <span
//           ><i class="fa-solid fa-check-to-slot icon-accordion"></i
//           ><span class="menu-approval test-menu0">Approval</span></span
//         ><i class="fa-solid fa-angle-down icon-down"></i>
//       </button>
//       <div class="panel approval-panel">
//           <p><a href="">Approval 1</a></p>
//         <p><a href="">Approval 2</a></p>
//         <p><a href="">Approval 3</a></p>
//       </div>

//       <button class="accordion">
//         <span
//           ><i class="fa-solid fa-file icon-accordion"></i>
//           <span class="report-menu test-menu3"></span></span
//         ><i class="fa-solid fa-angle-down icon-down"></i>
//       </button>
//       <div class="panel report-panel">
//         <p></p>
//       </div>

// for (let j = 0; j <= dataArray.length; j++) {
//   if (j < 3) {
//     if (dataArray[j].menuId != dataArray[j].parentID) {
//       let sp = document.createElement("p");
//       sp.innerText = dataArray[j].menuName;
//       console.log(sp.innerText);
//       approvalPanel.appendChild(sp);
//     }
//   } else {
//     if (dataArray[j].menuId != dataArray[j].parentID) {
//       let sp = document.createElement("p");
//       sp.innerText = dataArray[j].menuName;
//       console.log(sp.innerText);
//       reportPanel.appendChild(sp);
//     }
//   }
//   if (dataArray[j].menuId == dataArray[j].parentID)
//     document.querySelector(".test-menu" + j).innerText =
//       dataArray[j].menuName;
// }
// document.querySelector(".menu-approval").innerText = dataArray[0].menuName;
// document.querySelector(".report-menu").innerHTML = dataArray[3].menuName;

//test

//   for (let j = 0; j <= dataArray.length; j++) {
// if (j < 3) {
//   if (dataArray[j].menuId != dataArray[j].parentID) {
//     let sp = document.createElement("p");
//     sp.innerText = dataArray[j].menuName;
//     console.log(sp.innerText);
//     approvalPanel.appendChild(sp);
//   }
// } else {
//   if (dataArray[j].menuId != dataArray[j].parentID) {
//     let sp = document.createElement("p");
//     sp.innerText = dataArray[j].menuName;
//     console.log(sp.innerText);
//     reportPanel.appendChild(sp);
//   }
// }
// if (dataArray[j].menuId == dataArray[j].parentID) {
//   var parentName = dataArray[j].menuName;
//   console.log;
//   console.log(
//     (document.querySelector(parentName).innerText = dataArray[j].menuName)
//   );
//   var id = dataArray[j].menuId;
// while (id == dataArray[j].parentID && id != dataArray[j].menuId) {
//   let sp = document.createElement("p");
//   sp.innerText = dataArray[j].menuName;
//   console.log(sp.innerText);
//   Panel.appendChild(sp);
// }
//     }
//   }
// }

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
