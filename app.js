//=======================================================
//firebase
const config = {
  apiKey: "AIzaSyCJ4aKTy_Ue0nGKbhpGwXdcC8EiFN1HRQc",
  authDomain: "timecard-group.firebaseapp.com",
  databaseURL: "https://timecard-group.firebaseio.com",
  projectId: "timecard-group",
  storageBucket: "timecard-group.appspot.com",
  messagingSenderId: "300610980754"
};
//firebase initilization
firebase.initializeApp(config);

var database = firebase.database();
//=======================================================

//create variables for
//date
//monthly rate
//employee name

$("#submit").click(function(event) {
  event.preventDefault();
  let employee = $("#emp-name").val();
  let role = $("#emp-role").val();
  let rate = $("#emp-rate").val();
  let month = $("#emp-stmonth").val();
  let day = $("#emp-stday").val();
  let year = $("#emp-styear").val();
  let start = month.toString() + "/" + day.toString() + "/" + year.toString();

  database.ref().push({
    employee: employee,
    role: role,
    startDate: start,
    monthlyRate: rate
  });
});
//setup on click of submit button to get data from form (.val())
//add prevent default
//push data recieved to database in a new object
//

//on child added
//grab data from database
//add user data to page for display
database.ref().on(
  "child_added",
  function(snapshot) {
    console.log(snapshot.val());

    // clickCounter = snapshot.val().employee;

    // $("#employee-name").text(snapshot.val().employee);
    // $("#role").text(snapshot.val().role);
    // $("#start-date").text(snapshot.val().startDate);


      $('tbody').append(`
      <tr>
          <td id="employee-name">${snapshot.val().employee}</td>
          <td id="role">${snapshot.val().role}</td>
          <td id="start-date">${snapshot.val().startDate}</td>
          <td id="monthly-rate">${snapshot.val().monthlyRate}</td>
          <hr>
      </tr>
    `)
    // (function() {
    //   return `
    //     <tr>
    //         <td id="employee-name">${snapshot.val().employee}</td>
    //         <td id="role"></td>
    //         <td id="start-date"></td>
    //         <td id="monthly-rate"></td>
    //         <td id="total-billed"></td>
    //         <hr>
    //     </tr>
    //   `;
    // })();
  },
  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
);

function newRow(movie) {
  return `
    <tr>
        <td id="employee-name"></td>
        <td id="role"></td>
        <td id="start-date"></td>
        <td id="monthly-rate"></td>
        <td id="total-billed"></td>
        <hr>
    </tr>
    `;
}
