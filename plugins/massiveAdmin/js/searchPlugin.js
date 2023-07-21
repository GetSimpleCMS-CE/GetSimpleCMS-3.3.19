window.addEventListener("load", function () {

    if (document.querySelector('body#plugins') !== null) {

        document.querySelector('.highlight').insertAdjacentHTML('beforebegin', '<div class="searchoption"></div>');

        const searchdiv = document.querySelector('.searchoption');
        searchdiv.style.margin = "10px 0";
        searchdiv.insertAdjacentHTML('afterbegin', '<input type="text" class="pluginsfind" style="padding:8px;width:80%" placeholder="find plugin">');
        searchdiv.insertAdjacentHTML('afterbegin', '<button class="plugin-on" style="cursor:pointer;background:green;color:#fff;padding:10px;margin-right:10px;border:none;border-radius:2px;"><i class="uil uil-power"></i></button>');
        searchdiv.insertAdjacentHTML('afterbegin', '<button class="plugin-off" style="cursor:pointer;background:red;color:#fff;padding:10px;margin-right:10px;border:none;border-radius:2px;"><i class="uil uil-power"></i></button>');
        searchdiv.insertAdjacentHTML('afterbegin', '<button class="plugin-all" style="cursor:pointer;background:grey;color:#fff;padding:10px;margin-right:10px;border:none;border-radius:2px;"><i class="uil uil-power"></i></button>');




        document.querySelector('.plugin-all').addEventListener('click', () => {

            document.querySelectorAll('.enabled').forEach(x => {
                x.style.display = "flex"
            });
            document.querySelectorAll('.disabled').forEach(z => {
                z.style.display = "flex"
            });

        });

        document.querySelector('.plugin-on').addEventListener('click', () => {

            document.querySelectorAll('.enabled').forEach(x => {
                x.style.display = "flex"
            });
            document.querySelectorAll('.disabled').forEach(z => {
                z.style.display = "none"
            });

        });


        document.querySelector('.plugin-off').addEventListener('click', () => {

            document.querySelectorAll('.disabled').forEach(x => {
                x.style.display = "flex"
            });
            document.querySelectorAll('.enabled').forEach(z => {
                z.style.display = "none"
            });

        });



        //searchform
        const input = document.querySelector('.pluginsfind');

        input.addEventListener("keyup", e => {



            console.log(input.value);

            document.querySelectorAll('.highlight tr').forEach(c => {


                if (c.querySelector('td') !== null) {



                    const names = c.querySelector('td').innerText;
                    const newnames = names.toLowerCase();

                    if (newnames.includes(input.value)) {
                        c.style.display = "flex";
                    } else {
                        c.style.display = "none";
                    };

                    if (input.value == "") {
                        c.style.display = "flex";
                    }


                };

            });
        });


    };

});