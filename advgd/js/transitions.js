$(".productitem").hover(function(e) {
    alert("aaa");
    var vdata = $(this).data("id");
    $(".overlay").slideDrawer({
        04
        showDrawer:true,// The drawer is hidden by default.
        05
        slideTimeout:true,// Sets the drawer to slide down after set count if set to true.
        06
        slideSpeed: 600,// Slide drawer speed.
        07
        slideTimeoutCount: 3000,// How long to wait before sliding drawer slides down.
        08
        });
        
});