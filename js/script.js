$(document).ready(function() {

  getAllDiscs();
  $('.main__genre').on('focus',
  function() {
    $('.main__genre').on('keyup',
    function() {
      var input = $('.main__genre').val().toLowerCase();
      $('.album-list__item').each(
        function() {
          if ( input == $(this).attr('data-genre').toLowerCase() && $(this).attr('data-genre') != " ") {
            $('.album-list__item').addClass('dis-none');
            $(this).removeClass('dis-none');
          } else if ( input == " " || input.length == 0 ) {
            $('.album-list__item').removeClass('dis-none');
            }
        }
      );
    });
  });
});

function getAllDiscs() {
  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function(response) {
        var source = $('#album_template').html();
        var album_template =  Handlebars.compile(source);
        for (var i = 0; i < response.response.length; i++) {
          var disc = response.response[i];
          var showDisc = album_template(disc);
          $('#main__albums-list').append(showDisc);
        }
      },
      "error": function(request, state, errors){
        alert("Qualquadra non ha cosato..!"+errors);
      },
    },
  );
}
