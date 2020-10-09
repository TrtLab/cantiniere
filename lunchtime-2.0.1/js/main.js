$(document).ready(function() {

    // Header component
    const loadComponent = async (template) => {
        let url = template.getAttribute('component');
        let comp = document.createElement('div');
        url = url;
        let src = await fetch(url).then(res => res.text());
        src = src.trim();
        comp.innerHTML = src;
        template.replaceWith(comp);
        console.log(comp);
    }
    
    const loadAllComponents = () => {
        let comps = document.querySelectorAll("template[component]");
        comps.forEach(loadComponent)
    }
<<<<<<< HEAD
    
    window.addEventListener('load', ()=>{
        loadAllComponents();
    });

    /**MENU TAB */

    $('.nav-link').click(function(event) {

=======

    // window.addEventListener('load', ()=>{
    await loadAllComponents();
    // });

    
    /**MENU TAB */

    $('.nav-link').click(function (event) {
        
>>>>>>> 95a85fb57269bd04eb1ba741b841f75e0d642b88
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
<<<<<<< HEAD

    $(window).scroll(function() {
=======
    
    $(window).scroll(function () {
>>>>>>> 95a85fb57269bd04eb1ba741b841f75e0d642b88

        if ($(this).scrollTop() > 200) {

            $('#scrolltop').fadeIn();
            
        } else {
            
            $('#scrolltop').fadeOut();
        }
    });
<<<<<<< HEAD

    $('#scrolltop').click(function() {

=======
    
    $('#scrolltop').click(function () {
        
>>>>>>> 95a85fb57269bd04eb1ba741b841f75e0d642b88
        $("html,body").animate({
            
            scrollTop: 0

        }, 600);
        
        return false;
    });
    
    
    /**COMMENTAIRES */
<<<<<<< HEAD

    $('#comments-form').submit(function(event) {

=======
    
    $('#comments-form').submit(function (event) {
        
>>>>>>> 95a85fb57269bd04eb1ba741b841f75e0d642b88
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
<<<<<<< HEAD

            setTimeout(function() {
=======
            
            setTimeout(function () {
>>>>>>> 95a85fb57269bd04eb1ba741b841f75e0d642b88
                $("#success-comments").slideUp();
            }, 1000)

        }
        
    });
<<<<<<< HEAD

    $('#close-modal').click(function() {

=======
    
    $('#close-modal').click(function () {
        
>>>>>>> 95a85fb57269bd04eb1ba741b841f75e0d642b88
        $("#success-comments").slideUp();
        
    });
<<<<<<< HEAD
=======

    console.log($("#monBouton"));
    console.log($("#myModal"));
    
    $("#monBouton").click(function () {
        $("#myModal").addClass("modal-on");
    });
    
    $("#inscription").click(function () {
        $("#modal-inscription").addClass("modal-on");
    });

    $("#mdpoublie").click(function () {
        $("#mdp-modal").addClass("modal-on");
        $("#myModal").removeClass("modal-on");
    });

    $("span").click(function() {
        $("#myModal").removeClass("modal-on");
        $("#modal-inscription").removeClass("modal-on");
        $("#mdp-modal").removeClass("modal-on");
    });
>>>>>>> 95a85fb57269bd04eb1ba741b841f75e0d642b88
});