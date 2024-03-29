
var form = document.getElementById('form');
form.addEventListener('submit',function(event)
{
    event.preventDefault(); // Prevent the form from submitting
   
   var name = document.getElementById('name').value;
   var EmpId = document.getElementById ('EmpId').value;
   var number = document.getElementById ('number').value;
   var dob = document.getElementById ('dob').value;
   var department = document.getElementById ('department').value;
   


   var tableBody = document.getElementById ('dataBody');
   var newRow = tableBody.insertRow();
   newRow.innerHTML = `
    <td>${name}</td>
    <td>${EmpId}</td>
    <td>${number}</td>
    <td>${dob}</td>
   <td>${department}</td>
  `;

  form.reset();

 // window.location.href = 'EmpDetail.html';



});

//Reset



// Add tabledata dynamically










