$(() => {

    var home_class = document.getElementById('home').querySelectorAll('.overlay');
    var overlay = document.querySelectorAll('span');

    home_class.forEach((e, index) => {
        var span = overlay[index]
        $(e).hover( () => {
            span.style.width="100%";
        },() => {
            span.style.width="0%"; 
        })

    })


    $(".upper-icon").on("click", () => {

        var section = document.querySelector('.selection');

        if (section.style.display == 'inline') {
            section.style.display = 'none';
            $("html, body").animate({ scrollTop: 0 }, "slow");
        } else {
            section.style.display = 'inline';

        }

    })

})