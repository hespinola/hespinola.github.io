$('#contact-form').submit(function(event) {
    $.ajax({
        url: "https://formspree.io/h.espinola@icloud.com",
        method: "POST",
        dataType: "json",
        success: function(data) {
            console.log(data);
        }
    });
});
