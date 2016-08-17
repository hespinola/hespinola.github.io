// On submit form
$('#contact-form').submit(function(event) {
    // Get data from the form
    var contactName = $('#contact-name').val();
    var contactEmail = $('#contact-email').val();
    var contactMessage = $('contact-message').val();

    // Send it using AJAX
    $.ajax({
        url: "https://formspree.io/h.espinola@icloud.com",
        method: "POST",
        dataType: "json",
        data: {
            name: contactName,
            email: contactEmail,
            message: contactMessage
        },
        success: function(data) {

        },
        error: function() {
            
        }
    });
});
