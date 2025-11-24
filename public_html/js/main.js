$(document).ready(function(){
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();
    
    //validate form

    if ($('.contact-form').length > 0) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                contact_name: {
                    required: true
                },
                contact_email: {
                    required: true,
                    email: true
                },
                contact_subject: {
                    required: true
                },
                contact_message: {
                    required: true
                }
            },
            messages: {
                contact_name: {
                    required: 'The Name* field is required'
                },
                contact_email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                contact_subject: {
                    required: 'The Subject* field is required'
                },
                contact_message: {
                    required: 'The Message* field is required'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".invalid-feedback"));
            }
        });
    }
    
    
});

