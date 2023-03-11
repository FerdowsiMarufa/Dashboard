// display  user data

// …
const pendingData = [];
pending();
function pending() {
  document.getElementById("new-page").style.display = "block";
  document.getElementById("approved-page").style.display = "none";
  document.getElementById("reject-page").style.display = "none";
  console.log("check");
  fetch("http://localhost:85/api/HrmLeave/GetAllPending")
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
        obj.ApplicationId = item.applicationId;
        pendingData.push(obj);
      });
      console.log(pendingData);
      displayPendingData();
    });

  // display data in new page
  function displayPendingData() {
    newApprovalContainer = document.querySelector(".new-containner");
    // console.log(newApprovalContainer);
    for (let i = 0; i < pendingData.length; i++) {
      newApprovalContainer.innerHTML +=
        `<div class="row text-center">
<div class="col-1">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
 
    onclick="checkFunction(\'' + pendingData[i].ApplicationId + '\')"
    id="flexCheckDefault"
  />
</div>
<div class="col">` +
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
<i class="fa-solid fa-xmark cross"></i>
<i class="fa-solid fa-check select"></i>
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
  fetch("http://localhost:85/api/HrmLeave/GetAllApproved")
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
  fetch("http://localhost:85/api/HrmLeave/GetAllDisApproved")
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

// // onclick function of check box
const clickedID = [];

function checkFunction() {
  console.log(pendingData[i].ApplicationId);
  clickedID.push(pendingData[i].ApplicationId);
}

// approve all button
function approveAll() {
  if (clickedID.length) {
    console.log(clickedID);
    for (let i = 0; i < clickedID.length; i++) {
      var data = {
        id: clickedID[i],
        value: "Approved",
      };
      fetch("http://localhost:85/api/UpdateStatus/{id}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Data posted successfully");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }
}
