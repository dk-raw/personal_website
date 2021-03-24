$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/dk-raw",
        dataType: "json",
        success: function (response) {
            console.log('success on loading data.');
            console.log(response.avatar_url);
            $("#avatar").attr({
                src: response.avatar_url
            });
        }
    });
});