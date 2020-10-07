$(document).ready(function() {

    /**MENU TAB */

    $('.nav-link').click(function(event) {

        event.preventDefault();

        let tab = $(this).attr("href");

        $('.nav-link').removeClass('active');

        $(this).addClass('active');

        $('.tab-panel').removeClass('show');

        $('.tab-panel').addClass('fade');

        $(tab).removeClass('fade');

        $(tab).addClass('show');

    });

    /**SCROLLTOP */

    $(window).scroll(function() {

        if ($(this).scrollTop() > 200) {

            $('#scrolltop').fadeIn();

        } else {

            $('#scrolltop').fadeOut();
        }
    });

    $('#scrolltop').click(function() {

        $("html,body").animate({

            scrollTop: 0

        }, 600);

        return false;
    });


    /**COMMENTAIRES */

    $('#comments-form').submit(function(event) {

        event.preventDefault();

        let data = $('#comments-form').serializeArray();

        $('#comments-form')[0].reset();

        //requete fetch ou ajax (récupérer les donnéesde l'api)

        let firstname = data[0].value;

        let email = data[1].value;

        let site = data[2].value; /**not required */

        let message = data[3].value;

        /**error show */

        if (firstname === "") { $('#firstname').addClass('error-alert') };

        if (email === "") { $('#email').addClass('error-alert') };

        if (message === "") { $('#message').addClass('error-alert') };

        /**show comments */

        if (firstname !== "" && message !== "" && email !== "") {

            let comments =

                '<div class="item-comments">' +

                '<div class="avatar-profil">' +

                '<img src="images/default.png" alt="Photo de profil de ' + firstname + '">' +

                '</div>' +

                '<div class="infos-comments">' +

                '<p class="infos-user-comments"><span class="dot">' + firstname + '</span> • Il y a 3 heures</p>' +

                '<p class="comments">' + message + '</p>' +

                '<a href="#" class="dot">Répondre</a> • <a href="#" class="alert">Signaler</a>' +

                '</div>' +

                '</div>';

            $('#list-comments').prepend(comments);

            $("#success-comments").fadeIn();

            setTimeout(function() {
                $("#success-comments").slideUp();
            }, 1000)

        }

    });

    $('#close-modal').click(function() {

        $("#success-comments").slideUp();

    });

});