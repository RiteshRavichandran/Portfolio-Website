const counters = document.querySelectorAll('.counter');
const speed = 2000000;

counters.forEach(counter =>{
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if( count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }else{
            count.innerText = target;
        }
    }
    updateCount();
})

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}