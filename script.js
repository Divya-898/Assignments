//toggle bar
  $('.menu-icon').click(function(e) {
    e.preventDefault();
    $('nav').toggleClass('open');
  });

// get the jquery index page
function getDog() {
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breeds/image/random',
    dataType : 'json',
    success: function (data) {
      $('.json pre').html(JSON.stringify(data, null, 4));
      $('.image-wrapper').html('<img src='+ data.message +'>');
    },
  });
}
$('.get-dog').click(function () {
  getDog();
});
// browse the all list
function getAllDog() {
  var selectedDog = $('.dog-selector').val();
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breed/'+selectedDog+'/images/random',
    success : function (data) {
      $('.demo-image').html('<img src=' + data.message + '>');
    },
  });
}
function loadDogs() {
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breeds/list/all',
    success : function (data) {
      var breeds = data.message;
      var fidog = Object.keys(breeds)[0];
      $.each(breeds, function (dog) {
        if (breeds[dog].length < 1) {
          $('.dog-selector').append(
            '<option value='+dog+'>'+ dog +'</option>'
          );
        }
      });
      $.ajax({
        type : 'GET',
        url : 'https://dog.ceo/api/breed/' + fidog + '/images/random',
        success : function (data) {
          $('.demo-image').append('<img src=' + data.message + '>');
        },
      });
    },
  });
}
$('.dog-selector').on('change', function () {
  getAllDog();
});
$('.get-alldog').on('click', function () {
  getAllDog();
});
loadDogs();
// by breed
function getHound() {
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breed/hound/images/random',
   success: function (data) {
      $('.hound-random pre').html(JSON.stringify(data, null, 4));
      $('.hound-random .image-random').html('<img src=' + data.message + '>');
    },
  });
}
function getMultiple() {
  $('.image-random-multiple').empty();
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breed/hound/images/random/3',
    success : function (data) {
      $('.hound-random-multiple pre').html(JSON.stringify(data, null, 4));
      $.each(data.message, function (index, item) {
        $('.image-random-multiple').append('<img src=' + item + '>');
      });
    },
  });
}
$('.get-hound').click(function () {
  getHound();
});
$('.get-hound-multiple').click(function () {
  getMultiple();
});
//document page
 function data(){
   $.ajax({
      type : 'GET',
      url : 'https://dog.ceo/api/breeds/list/all',
      dataType : 'json',
      success : function (str) {
        $('.all-listdog pre').html(JSON.stringify(str.message));
      },
    });
  }
  $('#getDataBtn').on('click', function () {
     data();
  });
// random page
function getMulDog() {
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breeds/image/random',
    dataType : 'json',
    success: function (data) {
      $('.breeds-image pre').html(JSON.stringify(data, null, 5));
      $('.image-content').html('<img src=' + data.message + '>');
    },
  });
}
function getMultipleDogs() {
  $('.image-content-multiple').empty();
  $.ajax({
    type : 'GET',
    dataType : 'json',
    url : 'https://dog.ceo/api/breeds/image/random/3',
    success: function (data) {
      $('.breeds-image-multiple pre').html(JSON.stringify(data, null, 4));
      $.each(data.message, function (index, item) {
        $('.image-content-multiple').append('<img src=' + item + '>');
      });
    },
  });
}
$('.get-muldog').click(function () {
  getMulDog();
});

$('.get-dog-multiple').click(function () {
  getMultipleDogs();
});
//sub breeds page
function getAfghanHound() {
  $.getJSON(
    'https://dog.ceo/api/breed/hound/afghan/images/random',
    function (data) {
      $('.hound-random pre').html(JSON.stringify(data, null, 4));
      $('.hound-random .random-content').html('<img src=' + data.message + '>');
    }
  );
}
function getDogMultiple() {
  $('.random-content-multiple').empty();
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breed/hound/afghan/images/random/3',
    success : function (data) {
      $('.hound-random-collection pre').html(JSON.stringify(data, null, 4));
      $.each(data.message, function (index, item) {
        $('.random-content-multiple').append('<img src=' + item + '>');
      });
    },
  });
}
$('.get-afghan-hound').click(function () {
  getAfghanHound();
});

$('.get-hound-multiple').click(function () {
  getDogMultiple();
});
$(document).ready(function () {
  getDog();
  getHound();
  getMulDog();
  getMultipleDogs();
  getMultiple();
  getAfghanHound();
  getDogMultiple();
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breed/hound/images',
    success: function (data) {
      $('.hound-all pre').html(JSON.stringify(data, null, 4));
    },
  });
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breed/hound/list',
    success : function (data) {
      $('.hound-list pre').html(JSON.stringify(data, null, 4));
    },
  });
  $.ajax({
    type : 'GET',
    url : 'https://dog.ceo/api/breed/hound/afghan/images',
    success : function (data) {
      $('.hound-list-all pre').html(JSON.stringify(data, null, 4));
    },
  });
});
