jQuery(document).ready(function ($) {
    $(function () {
        $("#collections .collection .collection-img").slice(0, 4).show();
        $("body").on("click touchstart", "#collections .large-primary-btn", function (e) {
            e.preventDefault();
            $("#collections .collection .collection-img:hidden").slice(0, 4).fadeIn();
            if ($("#collections .collection .collection-img:hidden").length == 0) {
                $("#collections .large-primary-btn").css("visibility", "hidden");
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
