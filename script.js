 const turn= document.getElementsByClassName("stickFigure");
turn.addEventlistener("animationend", ()=>{
    element.style["transform(translateY)"]= 180;

}, {once: true});