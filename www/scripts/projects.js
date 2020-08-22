var previousPopup = "";
var previousProject = "";
$(document).ready(function() {
  //provides javasrcipt for hiding and unhiding popups on the projects page
  $("#currents").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#currentsPopUp").removeClass("hidden");
    $("#currents").addClass("clicked");
    previousPopup = "#currentsPopUp";
    previousProject = "#currents";
  });
  $("#sustainableMobility").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#sustainableMobilityPopUp").removeClass("hidden");
    $("#sustainableMobility").addClass("clicked");
    previousPopup = "#sustainableMobilityPopUp";
    previousProject = "#sustainableMobility";
  });
  $("#roots").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#rootsPopUp").removeClass("hidden");
    $("#roots").addClass("clicked");
    previousPopup = "#rootsPopUp";
    previousProject = "#roots";
  });
  $("#arc").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#arcPopUp").removeClass("hidden");
    $("#arc").addClass("clicked");
    previousPopup = "#arcPopUp";
    previousProject = "#arc";
  });
  $("#sustainableEducation").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#sustainableEducationPopUp").removeClass("hidden");
    $("#sustainableEducation").addClass("clicked");
    previousPopup = "#sustainableEducationPopUp";
    previousProject = "#sustainableEducation";
  });
  $("#tinyHome").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#tinyHomePopUp").removeClass("hidden");
    $("#tinyHome").addClass("clicked");
    previousPopup = "#tinyHomePopUp";
    previousProject = "#tinyHome";
  });
  $("#solarize").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#solarizePopUp").removeClass("hidden");
    $("#solarize").addClass("clicked");
    previousPopup = "#solarizePopUp";
    previousProject = "#solarize";
  });
  $("#sweep").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#sweepPopUp").removeClass("hidden");
    $("#sweep").addClass("clicked");
    previousPopup = "#sweepPopUp";
    previousProject = "#sweep";
  });
  $("#techops").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#techOpsPopUp").removeClass("hidden");
    $("#techops").addClass("clicked")
    previousPopup = "#techOpsPopUp";
    previousProject = "#techops";
  });
  $("#marketing").click(function () {
    $(previousPopup).addClass("hidden");
    $(previousProject).removeClass("clicked");
    $("#marketingPopUp").removeClass("hidden");
    $("#marketing").addClass("clicked");
    previousPopup = "#marketingPopUp";
    previousProject = "#marketing";
  });
});
