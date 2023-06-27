const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    const div = document.getElementById('share')

    if(div.style.visibility === 'hidden'){
        div.style.visibility = 'visible'
    }   else {
        div.style.visibility = 'hidden'
    }
})