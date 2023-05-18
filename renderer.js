document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header-block').addEventListener('click', e => {
        let btnName = null;
        if (e.target.classList.contains('btn')) {
            btnName = e.target.getAttribute('class').substr(4);
        } else if (e.target.parentNode.classList.contains('btn')) {
            btnName = e.target.parentNode.getAttribute('class').substr(4);
        } 

        if (btnName) {
            window.electron.doThing(btnName).then((result) => {
                if (result.class === 'max-btn') {
                    if(result.btn === 'MAX') {
                        document.querySelector('.' + result.class).children[0].classList.remove('fa-window-maximize');
                        document.querySelector('.' + result.class).children[0].classList.add('fa-window-restore');
                    } else if (result.btn === 'UNMAX')
                     {
                        document.querySelector('.' + result.class).children[0].classList.remove('fa-window-restore');
                        document.querySelector('.' + result.class).children[0].classList.add('fa-window-maximize');
                    } 
                }
            });
        }
    });
});

window.addEventListener('resize', () => {
    let btn = document.querySelector('.max-btn');
    window.electron.doThing('resize').then((result) => {
        if (result.btn === 'MAX') {
            btn.children[0].classList.remove('fa-window-maximize');
            btn.children[0].classList.add('fa-window-restore');
        } else if (result.btn === "UNMAX") {
            btn.children[0].classList.remove('fa-window-restore');
            btn.children[0].classList.add('fa-window-maximize');
        }
    });
});
