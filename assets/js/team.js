$(function() {
    $("#matchSchedule").on("click", ".can-toggle", function() {
        $(this).closest(".dspEvntLine").toggleClass("collapsed");
    });
    $("#teamCoaches, #teamRoster").on("click", ".dspPlyr-exp", function() {
        $(this).closest(".dspPlyr-card-grid").toggleClass("collapsed");
    });

});