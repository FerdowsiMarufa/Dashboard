// const x = [1, 2, 3, 4, 5];
// print(x);
// function print(x) {
//   console.log(x);
//   x = [];
//   console.log(x);
// }

// display  user data
// …

let selectedAllData = [];
pending();
function pending() {
  let pendingData = [];

  document.getElementById("new-page").style.display = "block";
  document.getElementById("approved-page").style.display = "none";
  document.getElementById("reject-page").style.display = "none";
  fetch("http://localhost:82/api/HrmLeave/GetAllPending")
    .then((response) => response.json())
    .then((data) => {
      // Initialize the array
      // Loop through the data and create objects
      data.forEach((item) => {
        const obj = {};
        const selectAll = {};
        obj.employeeId = item.employeeId;
        obj.leaveTypeCode = item.leaveTypeCode;
        obj.leaveApplyDate = item.leaveApplyDate;
        obj.leaveFromDate = item.leaveFromDate;
        obj.leaveProcessStatus = item.leaveProcessStatus;
        obj.leaveToDate = item.leaveToDate;
        obj.leaveDaysNo = item.leaveDaysNo;
        obj.ApplicationId = item.applicationId;
        selectAll.ApplicationId = item.applicationId;
        pendingData.push(obj);
        selectedAllData.push(selectAll);
      });
      console.log(selectedAllData);
      displayPendingData();
    });
  // display data in new page
  function displayPendingData() {
    newApprovalContainer = document.querySelector(".new-containner");
    // console.log(newApprovalContainer);
    newApprovalContainer.innerHTML = `
    <div class="row row-1st  "style="position: fixed; width: 76.5%" >
    <div class="col-1 fw-bold"> <button type="button" onclick="SelectAllFunction()" class="selectall-button  ">SelectAll</button></div>
    <div class="col-auto fw-bold">Employee Id</div>
    <div class="col fw-bold">Leave type Code</div>
    <div class="col fw-bold">Leave apply date</div>
    <div class="col fw-bold">Leave from Date</div>
    <div class="col fw-bold">Leave to Date</div>
    <div class="col-auto fw-bold">Leaves Day Number</div>
    <div class="col fw-bold">Action</div>
  </div>
    `;
    for (let i = 0; i < pendingData.length; i++) {
      newApprovalContainer.innerHTML +=
        `
        <div class="row text-center"  >
<div class="col-1">
  <input
    class="form-check-input"
    type="checkbox"
    name="box"
    onclick="checkFunction(${pendingData[i].ApplicationId})"
    id="flexCheckDefault"
  />
</div>
<div class="col-1">` +
        pendingData[i].employeeId +
        `</div>
<div class="col">` +
        pendingData[i].leaveTypeCode +
        `</div>
<div class="col">` +
        pendingData[i].leaveApplyDate +
        `</div>
<div class="col">` +
        pendingData[i].leaveFromDate +
        `</div>
<div class="col">` +
        pendingData[i].leaveToDate +
        `</div>
<div class="col">` +
        pendingData[i].leaveDaysNo +
        `</div>
<div class="col individual-select-item">
<i class="fa-solid fa-xmark cross"
onclick="crossFunction(${pendingData[i].ApplicationId})"></i>
<i class="fa-solid fa-check select"onclick="selectFunction(${pendingData[i].ApplicationId})"></i>
</div>
</div>
`;
    }
  }
}
// onclick function of check box
// display data in Approved Page
function Approved() {
  document.getElementById("new-page").style.display = "none";
  document.getElementById("approved-page").style.display = "block";
  document.getElementById("reject-page").style.display = "none";
  // data load from Api
  const ApprovedData = [];
  fetch("http://localhost:82/api/HrmLeave/GetAllApproved")
    .then((response) => response.json())
    .then((data) => {
      // Initialize the array
      // Loop through the data and create objects
      data.forEach((item) => {
        const obj = {};
        obj.employeeId = item.employeeId;
        obj.leaveTypeCode = item.leaveTypeCode;
        obj.leaveApplyDate = item.leaveApplyDate;
        obj.leaveFromDate = item.leaveFromDate;
        obj.leaveProcessStatus = item.leaveProcessStatus;
        obj.leaveToDate = item.leaveToDate;
        obj.leaveDaysNo = item.leaveDaysNo;
        ApprovedData.push(obj);
      });
      displayApprovedData(ApprovedData);
    });
  // Approval function call
  // display data in new page
  function displayApprovedData() {
    // document.getElementById("approved-page").style.display='block';
    ApprovedContainer = document.querySelector(".approve-containner");

    ApprovedContainer.innerHTML = `
      <div class="row row-1st  "style="position: fixed; width: 76.5%" >
      <div class="col fw-bold">Employee Id</div>
      <div class="col fw-bold">Leave type Code</div>
      <div class="col fw-bold">Leave apply date</div>
      <div class="col fw-bold">Leave from Date</div>
      <div class="col-auto fw-bold">Leave to Date</div>
      <div class="col fw-bold">Leaves Day Number</div>
    </div>
      `;
    for (let i = 0; i < ApprovedData.length; i++) {
      ApprovedContainer.innerHTML +=
        `<div class="row text-center">
<div class="col">` +
        ApprovedData[i].employeeId +
        `</div>
<div class="col">` +
        ApprovedData[i].leaveTypeCode +
        `</div>
<div class="col">` +
        ApprovedData[i].leaveApplyDate +
        `</div>
<div class="col">` +
        ApprovedData[i].leaveFromDate +
        `</div>
<div class="col">` +
        ApprovedData[i].leaveToDate +
        `</div>
<div class="col">` +
        ApprovedData[i].leaveDaysNo +
        `</div>
</div>
`;
    }
  }
}
// display Rejected Page
function Rejected() {
  document.getElementById("new-page").style.display = "none";
  document.getElementById("approved-page").style.display = "none";
  document.getElementById("reject-page").style.display = "block";
  // data load from Api
  const DisApprovedData = [];
  fetch("http://localhost:82/api/HrmLeave/GetAllDisApproved")
    .then((response) => response.json())
    .then((data) => {
      // Initialize the array
      // Loop through the data and create objects
      data.forEach((item) => {
        const obj = {};
        obj.employeeId = item.employeeId;
        obj.leaveTypeCode = item.leaveTypeCode;
        obj.leaveApplyDate = item.leaveApplyDate;
        obj.leaveFromDate = item.leaveFromDate;
        obj.leaveProcessStatus = item.leaveProcessStatus;
        obj.leaveToDate = item.leaveToDate;
        obj.leaveDaysNo = item.leaveDaysNo;
        DisApprovedData.push(obj);
      });
      displayDisApprovedData(DisApprovedData);
    });
  // Approval function call
  // display data in new page
  function displayDisApprovedData() {
    // document.getElementById("approved-page").style.display='block';
    DisApprovedContainer = document.querySelector(".Disapprove-containner");
    DisApprovedContainer.innerHTML = `
    <div class="row row-1st  "style="position: fixed; width: 76.5%" >
    <div class="col fw-bold">Employee Id</div>
    <div class="col fw-bold">Leave type Code</div>
    <div class="col fw-bold">Leave apply date</div>
    <div class="col fw-bold">Leave from Date</div>
    <div class="col fw-bold">Leave to Date</div>
    <div class="col fw-bold">Leaves Day Number</div>
  </div>
    `;
    for (let i = 0; i < DisApprovedData.length; i++) {
      DisApprovedContainer.innerHTML +=
        `<div class="row text-center">
<div class="col">` +
        DisApprovedData[i].employeeId +
        `</div>
<div class="col">` +
        DisApprovedData[i].leaveTypeCode +
        `</div>
<div class="col">` +
        DisApprovedData[i].leaveApplyDate +
        `</div>
<div class="col">` +
        DisApprovedData[i].leaveFromDate +
        `</div>
<div class="col">` +
        DisApprovedData[i].leaveToDate +
        `</div>
<div class="col">` +
        DisApprovedData[i].leaveDaysNo +
        `</div>
</div>
`;
    }
  }
}
//onclick on allselect button

function SelectAllFunction() {
  var ele = document.getElementsByName("box");
  // console.log(ele.length);
  console.log(selectedAllData);
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].type == "checkbox") {
      ele[i].checked = true;
    }
  }

  for (let i = 0; i < selectedAllData.length; i++) {
    var x = selectedAllData[i].ApplicationId;
    console.log("XXX:", x);
    clickedID.push(x);
  }
  selectedAllData = [];
  console.log("e :", selectedAllData);
}

// // onclick function of check box
let clickedID = [];
function checkFunction(value) {
  clickedID.push(value);
}
function crossFunction(value) {
  clickedID.push(value);
  rejectAll();
}

function selectFunction(value) {
  clickedID.push(value);
  approveAll();
}
function rejectAll() {
  if (clickedID.length) {
    console.log(clickedID);
    for (let i = 0; i < clickedID.length; i++) {
      const id = clickedID[i]; // Replace with the ID of the resource you want to update
      const value = "DisApproved"; // Replace with the value you want to set for the LeaveProcessStatus
      fetch(`http://localhost:82/api/HrmLeave/UpdateStatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    clickedID.length = 0;
    location.reload();
  }
}
// approve all button
function approveAll() {
  // console.log(clickedID.length);
  if (clickedID.length) {
    console.log(clickedID);
    for (let i = 0; i < clickedID.length; i++) {
      const id = clickedID[i]; // Replace with the ID of the resource you want to update
      const value = "Approved"; // Replace with the value you want to set for the LeaveProcessStatus
      fetch(`http://localhost:82/api/HrmLeave/UpdateStatus/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    clickedID.length = 0;
    location.reload();
  }
}
