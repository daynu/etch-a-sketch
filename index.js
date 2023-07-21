

window.onload = () =>
{   
    let divsContainer = document.getElementById('divs-container')

    function createDivs(size)
{   
    divsContainer.innerHTML = '';
    for(let i = 0; i < size; i++)
    {   
        divsContainer.innerHTML += '<div class = "divs-row"></div>'
    }

    let rows = document.querySelectorAll('.divs-row')

    rows.forEach(
        row => {
            for (let i = 0; i < size; i++)
            row.innerHTML += "<div class = 'square'><div/>"
        }
    )
}

    let slider = document.querySelector('.slider');
    let sliderValue = document.getElementById('slide-value')

    slider.addEventListener("click", () => 
    {
        let value = slider.value;
        sliderValue.innerHTML = slider.value;


        createDivs(value)
    })

}
