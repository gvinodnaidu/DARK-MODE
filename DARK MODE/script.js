const mode =document.querySelector('.mode');
let dark =false;
mode.addEventListener('click',()=>
{
    if(dark)
    {
    dark=false;
    document.documentElement.setAttribute('data-theme','dark');
    mode.textContent='light';
}

    else
    {
    dark=true;
    document.documentElement.setAttribute('data-theme','light');
    mode.textContent='dark';
}

})