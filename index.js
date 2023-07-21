

window.onload = () =>
{    

    let color = "black";
    let divsContainer = document.getElementById('divs-container');
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
            {
            let square = document.createElement('div')
            square.className = 'square'
            row.append(square)
            square.addEventListener('mouseover', () =>
            {
                
                if(isRainbow)
                {
                    color = randomColor();
                }
                square.style.backgroundColor = color;
            })
        }  
        }
    )
    
    
}

    

    let slider = document.querySelector('.slider');
    let sliderValue = document.getElementById('slide-value')
    
    createDivs(slider.value, color)


    
    slider.addEventListener("click", () => 
    {
        let value = slider.value;
        sliderValue.innerHTML = slider.value;
        createDivs(value, color);
    })


    let black = document.getElementById('black');
    black.addEventListener('click', ()=>
    {
        color = 'black';
        isRainbow = false;
    })

    function randomColor()
    {
        let r = Math.floor(Math.random() * 256).toString(16);
        let g = Math.floor(Math.random() * 256).toString(16);
        let b = Math.floor(Math.random() * 256).toString(16);
        console.log(r)
        return '#'+r+g+b
        
    }
    

    let isRainbow = false;

    let rainbow = document.getElementById('rainbow')
    rainbow.addEventListener('click', ()=>
    {
        isRainbow = true;
    })


}
