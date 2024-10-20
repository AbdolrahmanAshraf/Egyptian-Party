// nav slider
$('.openNav').click(function() {
        $('#sideNavigation').css('width', '250px');
        $('#landingContent').css('margin-left', '250px');
    });
    $('.closeButton').click(function() {
        $('#sideNavigation').css('width', '0');
        $('#landingContent').css('margin-left', '0');
    });

    // Accordion
    $('.toggleAccordion').click(function() {
        $(this).next().slideToggle()
        $('.innerAccordion').not($(this).next()).slideUp();
    });

    // Countdown Timer
    function startCountdown() {
        const countdownDate = new Date("2030-10-30T00:00:00").getTime();
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $('.days').text(days < 10 ? '0' + days : days);
            $('.hours').text(hours < 10 ? '0' + hours : hours);
            $('.minutes').text(minutes < 10 ? '0' + minutes : minutes);
            $('.seconds').text(seconds < 10 ? '0' + seconds : seconds);
            if (distance < 0) {
                clearInterval(x);
                $('.days, .hours, .minutes, .seconds').text('00');
            }
        }, 1000);
    }
    startCountdown();

    // Character count for textarea
    $('textarea').on('input', function() {
        const maxLength = 100;
        let currentLength = $(this).val().length;
        let remainingLength = maxLength - currentLength;
        if (remainingLength < 0) {
            $(this).val($(this).val().substring(0, maxLength));
            remainingLength = 0;
        }
        $('#charCounter').text(remainingLength);
    });