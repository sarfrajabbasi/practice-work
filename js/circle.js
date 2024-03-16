 const GetRandomColor = ()=>`#${(Math.random()*0xFFFFFF << 0).toString(16).padStart(6,"0")}`;

// create random size for circle
const getRandomSize = (max,min)=> Math.random()*(max-min)+min;

function createCircle(){
    // create circle div
    const circle = document.createElement('div');
    const setSize = getRandomSize(10,200);
    circle.classList.add('circle');
    circle.style.width = `${setSize}px`
    circle.style.height = `${setSize}px`
    circle.style.backgroundColor = GetRandomColor();
    return circle
}

let currentCircle = createCircle();

document.body.appendChild(currentCircle)

// listener for mousemove event

// circle mouse ke piche chalega is event se
document.addEventListener('mousemove',(e)=>{
    // clientX and clinetY mouse ke X & y-coordinate ko bata ta h and also hum chaate h ki circle ka center mouse courser ke sath rahe,isliye hum currentcirle.offsetWidth&height/2(circle ka adha)PX ko mouse clientX(mouseCursor) se substarct karte hain
    currentCircle.style.left = `${e.clientX-(currentCircle.offsetWidth/2)}px`
    currentCircle.style.top = `${e.clientY-(currentCircle.offsetHeight/2)}px`
})

// click event for create circle 

document.body.addEventListener('click',(e)=>{
    // click karne par new circle bane  current mouse ke location pr 
    // body pr click karne par ye event tigger hoga

    // createcircle and store

    currentCircle = createCircle();

    // ab circle ki "left" postion ko set karna ha with (e.clientX),it show mouse X-coordinate,jaha pr click hua h.isko hu (circle ki width/2) se substract karte h,jisse circle ka ka center mouse ke pass aye inPX and same with "top";

    currentCircle.style.left = `${e.clientX-parseFloat(currentCircle.style.width)/2}px`
    currentCircle.style.top = `${e.clientY-parseFloat(currentCircle.style.height)/2}px`;

    // now append with body
    document.body.appendChild(currentCircle)
})

 

