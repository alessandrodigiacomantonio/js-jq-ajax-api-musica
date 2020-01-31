$(document).ready(function() {

getAllDiscs();

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
