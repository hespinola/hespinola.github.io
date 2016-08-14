$('#contact-form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: "https://formspree.io/h.espinola@icloud.com",
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
    });
});
