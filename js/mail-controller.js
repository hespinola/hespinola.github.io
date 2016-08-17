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
            $('#form-error').css('display', 'none');
            $('#form-sent').animate({
                display: 'inline'
            }, 800);
        },
        error: function() {
            $('#form-sent').css('display', 'none');
            $('#form-error').animate({
                display: 'inline'
            }, 800);
        }
    });
});
