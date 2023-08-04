$(function () {
  var sButton = $('.saveBtn')
  var time = dayjs().get('hour')
  // added event listener for save button
  sButton.on('click', function(){
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings().eq(1).val())
  })
//sets data for local storage and displays it in the correct area
  function get() {
    $(".description").each(function() {
      $(this).val(localStorage.getItem($(this).parent().attr('id')))
    })
  }
//changes classes to give divs the correct colour based on time
 function classChange() {
  $(".time-block").each(function(){
  var selected = $(this).attr("id")
  if(time == selected) {
    $(this).removeClass("future")
    $(this).removeClass("past")
    $(this).addClass("present")
  }else if (time < selected) {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
  }else if (time > selected) {
    $(this).removeClass("future")
    $(this).removeClass("present")
    $(this).addClass("past")
  }
})
}
// sets the time in the header
function headerChange() {
  var headerText = document.querySelector('#currentDay')
  console.log(headerText)
  if ( time > 12) {
  var currentTime = time - 12
  }
  if (time < 12) {
    var sun = "AM"
  }else{
    var sun = "PM"
  }
      headerText.textContent = "The current time is " + currentTime + sun
}

//calling all functions
  get()
  classChange()
  headerChange()
});

