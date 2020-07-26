$(document).ready(function(){
  $('.parallax').parallax();

  $(document).on('change', '.checkInput', function(event){
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    if(name !== '' && email !== ''){
      $('#submit').attr('disabled', false);
    }
    else if(name === '' || email === ''){
      $('#submit').attr('disabled', true);        
    }
  });

  $(document).on('click', '#submit', function(event){
    event.preventDefault();
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    
    $.post('https://ng911-emailer.herokuapp.com/sendEmail', {
      name: name,
      email: email,
      message: message
    }).done((data)=>{
      console.log(data);
      if(data.success){
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        Materialize.toast('Email is on its way!', 8000);
      }
    });
  });
});