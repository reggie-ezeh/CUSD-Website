$(document).ready(function() {
  var images = [
    "assets/images/story1-alex.jpg",
    "assets/images/story2-brandon.jpg",
    "assets/images/story3-erika.jpg"
  ];

  var captionIDs = [
    "#alex",
    "#brandon",
    "#erika"
  ];

  var previousIndex;
  var currentIndex = 0;

  // next slide
  $("#slideshowNext").click(function () {
    if(currentIndex == 2) {
      previousIndex = 2
      currentIndex = 0;
    } else {
      previousIndex = currentIndex;
      currentIndex++;
    }


    $('#slideshowImage').attr('src', images[currentIndex]);
    $(captionIDs[previousIndex]).addClass("hidden");
    $(captionIDs[currentIndex]).removeClass("hidden");
  });

  // previous slide
  $("#slideshowPrev").click(function () {
    if(currentIndex == 0) {
      previousIndex = 0;
      currentIndex = 2;
    } else {
      previousIndex = currentIndex;
      currentIndex--;
    }
    $('#slideshowImage').attr('src', images[currentIndex]);
    $(captionIDs[previousIndex]).addClass("hidden");
    $(captionIDs[currentIndex]).removeClass("hidden");
  });

  // Pi - sidenav BEGIN
  //sidenav button interactivity on mouseover ** WIP **

  //if mouse is hovered over sidenav link:
  //  hide image icon - by adding class .hidden to #joinImg
  //  remove class .hidden to #joinText
  //  add styling class .expand-sidenav to #joinButton

  // else if mouse is not hovered over sidenav link:
  //  remove class .hidden from #joinImg
  //  add class .hidden to #joinText
  //  remove styling class .expand-sidenav to #joinButton

  // Join
  joinElement = document.getElementById('joinButton');

  joinElement.addEventListener("mouseover",function(){
    $("#joinImg").addClass("hidden");
    $("#joinText").removeClass("hidden");
    $("#joinText").addClass("expand-sidenav");
  });


  joinElement.addEventListener("mouseout",function(){
    $("#joinImg").removeClass("hidden");
    $("#joinText").addClass("hidden");
    $("#joinText").removeClass("expand-sidenav");
  });

  // Partner
  partnerElement = document.getElementById('partnerButton');

  partnerElement.addEventListener("mouseover",function(){
    $("#partnerImg").addClass("hidden");
    $("#partnerText").removeClass("hidden");
    $("#partnerText").addClass("expand-sidenav");
  });

  partnerElement.addEventListener("mouseout",function(){
    $("#partnerImg").removeClass("hidden");
    $("#partnerText").addClass("hidden");
    $("#partnerText").removeClass("expand-sidenav");
  });

  // Donate
  donateElement = document.getElementById('donateButton');

  donateElement.addEventListener("mouseover",function(){
    $("#donateImg").addClass("hidden");
    $("#donateText").removeClass("hidden");
    $("#donateText").addClass("expand-sidenav");
  });

  donateElement.addEventListener("mouseout",function(){
    $("#donateImg").removeClass("hidden");
    $("#donateText").addClass("hidden");
    $("#donateText").removeClass("expand-sidenav");
  });
  // Pi - sidenav ENDS

  // Pi - mobile nav BEGINS
  //displays nav links when hamburg icon is clicked
  hamburgMenu = document.getElementById('hamburg');
  hamburgMenu.addEventListener("click",function(){
      $("#mobile-nav").removeClass("hidden");
  });

  //hides nav links when closeButton is clicked
  $("#closeButton").click(function () {
      $("#mobile-nav").addClass("hidden");
  });
  // Pi - mobile nav ENDS
});
