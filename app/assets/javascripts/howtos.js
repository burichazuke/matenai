$(function() {
  $('#open-modal').on('click', function(){
    $('#overlay,#modal-window').fadeIn();
  })



  locateCenter();  
  $(window).resize(locateCenter); 


  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    
    let cw = $('#modal-window').outerWidth();
    let ch = $('#modal-window').outerHeight();
   
    $('#modal-window').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });

    $('#modal-edit').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });
  }

  // $('#close-modal').on('click', function(){
  //   $('#overlay,#modal-window').fadeOut();
  // })

  $('#new_howto').on('submit',function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(howto) {
      console.log(howto.content)
      var html = `<li data-id="${howto.id}">
                    <p>${howto.content}</p>
                    <i id="delete-howto" class="fa fa-trash"></i>
                  </li>`
      
      // `<li class="howto">
      //               ${howto.content}
      //             <i id="delete-howto" class="fa fa-trash"></i>
      //             </li>`
      if(howto.content !== ""){
        $('#howtos').append(html);
      }
            
      $('#send').attr('disabled', false);
      $('#new_howto')[0].reset();
      $('#overlay,#modal-window').fadeOut();
    })
    .fail(function() {
      $('#send').attr('disabled', false);
      alert('作り方を入力してください')
    })
  })
});


$(function() {
  $(document).on("click", '.fa-trash', function(){
    var target = $(this).parent();
    var id = $(target).data('id')
    console.log(id)
    var reg =location.href.match(/\/recipes\/\d+\/howtos/)
    var url = reg + "/" + id
    console.log(url);
    $.ajax({
      url: url,
      type: 'DELETE',
      data: {id: id},
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function() {
      target.remove();
    })
    .fail(function() {
      alert('エラー')
    })

  })
});
