$(() => {

    var home_class = document.getElementById('home').querySelectorAll('img');
    var overlay = document.querySelectorAll('span');

    home_class.forEach((e, index) => {
        var span = overlay[index]
        $(e).hover( () => {

            
            // var text = $(e).attr('alt');
            // var span = document.createElement('span');
            // span.innerHTML = text;
            // overlayIndex.append(span);
            span.style.width="100%";
            // e.style.opacity = "0.5"


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