// // Define cardList array with card content
// $(document).ready(function(){
//   $('.materialboxed').materialbox();
//   $('#formSubmit').click(()=>{  
//  submitForm();
//   })
//   getProjects();
//   $('.modal').modal();
  
// const closeButton = document.querySelector('.close');

// // Add click event listener to close the form
// closeButton.addEventListener('click', function() {
//   document.getElementById('modalForm').style.display = 'none'; // Hide the form
// });


// // Add event listener to show form button
// document.getElementById('showFormBtn').addEventListener('click', function() {
//   document.getElementById('modalForm').style.display = 'block'; // Show the form
// });

// // Add event listener to submit form
// document.getElementById('form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   console.log('Submitted Form Data:', Object.fromEntries(formData.entries()));
// });
// });
// const getcards = () => {
//   $.get('/api/cards',(response) => {
//   if(response.statusCode==200){
//   addCards(response.data);
//   }
//   })};


$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#formSubmit').click(() => {  
    submitForm();
  });
  getProjects();
  $('.modal').modal();

  // Add event listener to show form button
  $('#showFormBtn').click(function() {
    $('#modalForm').css('display', 'block'); // Show the form
  });

  // Add event listener to submit form
  $('#form').submit(function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log('Submitted Form Data:', Object.fromEntries(formData.entries()));
    // You might want to send this data to the server using AJAX or some other method
  });
});

// Close button
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
  document.getElementById('modalForm').style.display = 'none'; // Hide the form
});

const getcards = () => {
  $.get('/api/cards', function(response) {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};
