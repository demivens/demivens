/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

$('aside input[name="filter"]').click(function() {
  $('aside section').slideDown();
});

$('aside button').click(function() {
  $('aside section').toggle();
});

/*filter*/

var download_leeslijst = document.querySelectorAll("main section article > ul li.download_knop");



for (var i = 0; i < download_leeslijst.length; i++) {


    download_leeslijst[i].addEventListener('click', function(event) {

        var element = event.srcElement.parentElement;

        if (element.querySelector('.download').classList.contains('is-actief')) {


            document.querySelector('nav ul li .error').classList.remove('is-actief');
            document.querySelector('nav ul li .succes').classList.remove('is-actief');


            element.querySelector('.download').classList.remove('is-actief');
            element.querySelector('.laden').classList.add('is-actief');

            document.querySelector('nav ul li .laden').classList.add('is-actief');

            window.setTimeout(function() {

                element.querySelector('.laden').classList.remove('is-actief');
                document.querySelector('nav ul li .laden').classList.remove('is-actief');

                if (Math.random() > 0.5) {
                    element.querySelector('.succes').classList.add('is-actief');
                    document.querySelector('nav ul li .succes').classList.add('is-actief');
                } else {
                    element.querySelector('.error').classList.add('is-actief');
                    document.querySelector('nav ul li .error').classList.add('is-actief');

                    element.querySelector('.error').addEventListener('click', function() {
                        document.querySelector('#errorState').style.display = "block";

                    });

                }

            }, 2300);
        }

    });

}

/*https://www.sitepoint.com/community/t/hide-a-div-for-3-seconds/257510/5 bron*/


function klik() {
   klikNummer++
   
}

/*heart*/

var btn = document.querySelector('article div svg');
btn.onclick = function(){
  btn.classList.add('message');
  setTimeout(function(){
    btn.classList.add('hurray');
}, 2000);
}


