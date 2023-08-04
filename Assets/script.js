// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var sButton = $('.saveBtn')
  var time = dayjs().get('hour')
  sButton.on('click', function(){
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings().eq(1).val())
  })

  function get() {
    $(".description").each(function() {
      $(this).val(localStorage.getItem($(this).parent().attr('id')))
    })
  }

  // var timeBlock = document.querySelectorAll("#9, #10, #11, #12, #13, #14, #15, #16, #17")
 function classChange() {
  $(".time-block").each(function(){
  var selected = $(this).attr("id")
  // console.log(selected)
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
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  get()
  classChange()
  headerChange()
});

