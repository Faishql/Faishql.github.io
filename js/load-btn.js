jQuery(document).ready(function ($) {
    $(function () {
        $("#collections .collection .collection-img").slice(0, 4).show();
        $("body").on("click touchstart", "#collections .load-btn", function (e) {
            e.preventDefault();
            $("#collections .collection .collection-img:hidden").slice(0, 4).fadeIn();
            if ($("#collections .collection .collection-img:hidden").length == 0) {
                $("#collections .load-btn").css("visibility", "hidden");
            }
            // $("html,body").animate(
            //     {
            //         scrollTop: $(this).offset().top,
            //     },
            //     1000
            // );
        });
    });
});
