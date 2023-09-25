const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('easeleftshow');
        }else{
            entry.target.classList.remove('easeleftshow');
        }
    })
});

const elements = document.querySelectorAll('.easeleft');
elements.forEach((el) => observer.observe(el));