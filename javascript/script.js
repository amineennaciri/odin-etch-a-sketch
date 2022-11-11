
// setting up the button logic
const btn = document.querySelector('button')
let result = btn.addEventListener('click',gridNum)

function gridNum(){
    let boxNum = prompt('Enter the number of squares per side for the new grid.')
    if(boxNum>100){
        gridNum()
    }
    else{

    
    let gridBox = boxNum**2
    console.log(gridBox)
    console.log(boxNum)
    // creating the 16x16 boxes with javascript
    const container = document.getElementsByClassName('container');
    for(let i=1; i<= gridBox;i++){
        const div = document.createElement('div');
        div.classList.add("item");
        /* console.log(div); */
        /* console.log(container[0]); */
        container[0].appendChild(div);
    }

    // adding css to the boxes
    const box = document.querySelectorAll('.item')
    /* console.log(box[0]) */
    for(let i = 0;i<=box.length-1;i++){
        box[i].style.width=`${100/boxNum}%`// because of 100% divided by 16 boxes
        box[i].style.height=`${100/boxNum}%`
    }
    //setting up the hover
    for(let i = 0;i<=box.length-1;i++){
        box[i].addEventListener('mouseenter',hovering)
        box[i].addEventListener('mouseleave',unHovering)
    }

    return gridBox
    }
}

function hovering(e){
    e.target.style.backgroundColor = 'red'
}

function unHovering(e){
    e.target.style.backgroundColor = 'white'
}