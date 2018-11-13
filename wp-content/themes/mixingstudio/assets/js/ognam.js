var length;
$(document).ready(function () {
    $("body img").css("opacity", "1");

    $(".carousel-inner .carousel-item:first").addClass("active");
    // $("#mainNav").load('https://clab.org.tw');

    $(".og-category a").hover(function () {
        $(".og-under-orange-1", this).css("background-color", "orange");
    }, function () {
        $(".og-under-orange-1", this).css("background-color", "white");
    });
    fixAutofunc();

    $(window).resize(function () {
        var width = $(window).width();
        setTimeout(function () {
            fixAutofunc();
        }, 500);
    });

    function fixAutofunc() {
        var width = $(window).width();
        if (width <= 767) {
            $(".fix-height").each(function () {
                $(this).addClass("hauto");
            });
            $(".jq_home_search").hide();
        } else {
            $(".fix-height").each(function () {
                $(this).removeClass("hauto");
            });
            $(".jq_home_search").show();
        }
    }


});

$(function () {
    // youtube_video
    $(".og-video-list .video-list").click(function () {
        var video = $(this).data("video");
        var url = "https://www.youtube.com/embed/" + video;
        $(".video-player").attr('src', url);
    })
    $(".og-video-list .video-list")[0].click();
});