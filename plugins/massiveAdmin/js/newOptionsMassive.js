
if (window.location.href.indexOf('?type=carousel') < 0) {

    window.onload = function () {
        const imageTableTd = document.querySelectorAll('#imageTable .All');



        imageTableTd.forEach(e => {
            if (e.querySelector('.imgthumb img') !== null) {
                const name = e.querySelector('#imageTable .All .imgthumb img').getAttribute('src');
                console.log(name);



                if (e.querySelector('.delete .delconfirm') !== null) {

                    const deleteBtn = e.querySelector('.delete .delconfirm');
                    const renameBtn = document.createElement('button');
                    renameBtn.classList.add('rename-massive-btn');
                    renameBtn.innerHTML = "  <i class='uil uil-folder'></i>";
                    deleteBtn.insertAdjacentElement('afterend', renameBtn);

                    const copyBtn = document.createElement('button');
                    copyBtn.classList.add('copy-massive-btn');
                    copyBtn.innerHTML = "  <i class='uil uil-copy-alt'></i>";
                    deleteBtn.insertAdjacentElement('afterend', copyBtn);

                    const downloadBtn = document.createElement('a');
                    downloadBtn.classList.add('download-massive-btn');
                    downloadBtn.setAttribute('href', name);
                    downloadBtn.setAttribute('download', name);
                    downloadBtn.innerHTML = " <i class='uil uil-download-alt'></i>";
                    deleteBtn.insertAdjacentElement('afterend', downloadBtn);


                    renameBtn.addEventListener('click', () => {
                        document.querySelector('.rename-fog').classList.remove('hide-fog');
                        document.querySelector('input[name="rename-massive-hide"]').value = name.substr('16');
                        document.querySelector('input[name="rename-massive"]').value = name.substr('16');
                        document.querySelector('input[name="save-rename-massive"]').style.display = "block";
                        document.querySelector('input[name="copy-rename-massive"]').style.display = "none";
                    });

                    copyBtn.addEventListener('click', () => {
                        document.querySelector('.rename-fog').classList.remove('hide-fog');
                        document.querySelector('input[name="rename-massive-hide"]').value = name.substr('16');
                        document.querySelector('input[name="rename-massive"]').value = name.substr('16');
                        document.querySelector('input[name="save-rename-massive"]').style.display = "none";
                        document.querySelector('input[name="copy-rename-massive"]').style.display = "block";
                    });



                };
            }
        });



        const closeRename = document.querySelector('.close-rename-fog');

        closeRename.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.rename-fog').classList.add('hide-fog');


        });


    };




    if (document.querySelector('.All.folder') !== null) {

        document.querySelectorAll('.All.folder').forEach(e => {

            const linker = e.querySelector('a').getAttribute('href');
            e.querySelector('img').insertAdjacentHTML('beforebegin', '<a href="' + linker + '" class="massive-folder-linker"><i class="uil uil-folder-open"></i></a>');

            e.querySelector('img').remove();
            e.querySelector('.imgthumb').remove();



        });
    };



};

document.querySelectorAll('.imgthumb').forEach(x => {
    if (x.innerHTML == '') {
        x.innerHTML = `<div class="massive-folder-linker"><i class="uil uil-file" style="  font-size: 4rem; display: block; margin-bottom: 15px;"></i></div>`;
    }
});

document.querySelectorAll('.all').forEach(c => {

    if (c.querySelector('.primarylink img') !== null) {
        c.querySelector('.primarylink img').style.display = "none";
    }


})


 
 