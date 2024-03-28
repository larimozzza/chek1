  function animation() {
    let button1js = document.querySelector('.button1_1');
    button1js.addEventListener('click', ()=>{
      addNone();
      animationStart();
    });
  }
  function animationStart() {
    let handjs = document.querySelector('.hand1');
    handjs.classList.remove('animate');
    handjs.classList.remove('None');
    setTimeout(() => {
      handjs.classList.add('animate');
    }, 0);
  }

  function animation2() {
    let button2js = document.querySelector('.button2_1');
    button2js.addEventListener('click', ()=>{
      addNone();
      animationStart2();
    });
  }
  function animationStart2() {
    let hand2js = document.querySelector('.hand2');
    hand2js.classList.remove('animate');
    hand2js.classList.remove('None');
    setTimeout(() => {
      hand2js.classList.add('animate');
    }, 0);
  }

  function animation3() {
    let button3js = document.querySelector('.button3_1');
    button3js.addEventListener('click', ()=>{
      addNone();
      animationStart3();
    });
  }
  function animationStart3() {
    let hand3js = document.querySelector('.hand3');
    hand3js.classList.remove('animate');
    hand3js.classList.remove('None');
    setTimeout(() => {
      hand3js.classList.add('animate');
    }, 0);
  }

  function animation4() {
    let button4js = document.querySelector('.button4_1');
    button4js.addEventListener('click', ()=>{
      addNone();
      animationStart4();
    });
  }
  function animationStart4() {
    let hand4js = document.querySelector('.hand4');
    hand4js.classList.remove('animate');
    hand4js.classList.remove('None');
    setTimeout(() => {
      hand4js.classList.add('animate');
    }, 0);
  }
  function addNone() {
    let hands= document.querySelectorAll('.hands');
    hands.forEach((hand) => {
      hand.classList.add('None')
    })
  }

  function animation_opacity1() {
    let key1 = document.querySelector('.key1');
    key1.addEventListener('click', animationStart5);
  }
  function animationStart5() {
    let key1 = document.querySelector('.key1');
    key1.classList.remove('click');
    setTimeout(() => {
      key1.classList.add('click');
    }, 0);
  }

  function animation_opacity2() {
    let key2 = document.querySelector('.key2');
    key2.addEventListener('click', animationStart6);
  }
  function animationStart6() {
    let key2 = document.querySelector('.key2');
    key2.classList.remove('click');
    setTimeout(() => {
      key2.classList.add('click');
    }, 0);
  }

  function animation_opacity3() {
    let key3 = document.querySelector('.key3');
    key3.addEventListener('click', animationStart7);
  }
  function animationStart7() {
    let key3 = document.querySelector('.key3');
    key3.classList.remove('click');
    setTimeout(() => {
      key3.classList.add('click');
    }, 0);
  }
  
  function animation_opacity4() {
    let key4 = document.querySelector('.key4');
    key4.addEventListener('click', animationStart8);
  }
  function animationStart8() {
    let key4 = document.querySelector('.key4');
    key4.classList.remove('click');
    setTimeout(() => {
      key4.classList.add('click');
    }, 0);
  }

  function animation_opacity5() {
    let key5 = document.querySelector('.key5');
    key5.addEventListener('click', animationStart9);
  }
  function animationStart9() {
    let key5 = document.querySelector('.key5');
    key5.classList.remove('click');
    setTimeout(() => {
      key5.classList.add('click');
    }, 0);
  }
  
  function animation_opacity6() {
    let key6 = document.querySelector('.key6');
    key6.addEventListener('click', animationStart10);
  }
  function animationStart10() {
    let key6 = document.querySelector('.key6');
    key6.classList.remove('click');
    setTimeout(() => {
      key6.classList.add('click');
    }, 0);
  } 

  function animation_opacity7() {
    let key7 = document.querySelector('.key7');
    key7.addEventListener('click', animationStart11);
  }
  function animationStart11() {
    let key7 = document.querySelector('.key7');
    key7.classList.remove('click');
    setTimeout(() => {
      key7.classList.add('click');
    }, 0);
  } 

  function animation_down1() {
    let valve1 = document.querySelector('.valve1');
    valve1.addEventListener('click', animationStart12);
  }
  function animationStart12() {
    let valve1 = document.querySelector('.valve1');
    valve1.classList.remove('down');
    setTimeout(() => {
      valve1.classList.add('down');
    }, 0);
    }

  function animation_down2() {
    let valve2 = document.querySelector('.valve2');
    valve2.addEventListener('click', animationStart13);
  }
  function animationStart13() {
    let valve2 = document.querySelector('.valve2');
    valve2.classList.remove('down');
    setTimeout(() => {
      valve2.classList.add('down');
    }, 0);
    } 

  function animation_down3() {
    let valve3 = document.querySelector('.valve3');
    valve3.addEventListener('click', animationStart14);
  }
  function animationStart14() {
    let valve3 = document.querySelector('.valve3');
    valve3.classList.remove('down');
    setTimeout(() => {
      valve3.classList.add('down');
    }, 0);
    }
        
  function animation_rotation1() {
    let cube1 = document.querySelector('#cube1');
    cube1.addEventListener('click', animationStart15);
  }
  function animationStart15() {
    let cube1 = document.querySelector('#cube1');
    cube1.classList.remove('rotation');
    setTimeout(() => {
      cube1.classList.add('rotation');
    }, 0);
    } 
  
  function animation_rotation2() {
    let cube2 = document.querySelector('#cube2');
    cube2.addEventListener('click', animationStart16);
  }
  function animationStart16() {
    let cube2 = document.querySelector('#cube2');
    cube2.classList.remove('rotation');
    setTimeout(() => {
      cube2.classList.add('rotation');
    }, 0);
    }
    
  function animation_rotation3() {
    let cube3 = document.querySelector('#cube3');
    cube3.addEventListener('click', animationStart17);
  }
  function animationStart17() {
    let cube3 = document.querySelector('#cube3');
    cube3.classList.remove('rotation');
    setTimeout(() => {
      cube3.classList.add('rotation');
    }, 0);
  }
  
  function animation_rotation4() {
    let cube4 = document.querySelector('#cube4');
    cube4.addEventListener('click', animationStart18);
  }
  function animationStart18() {
    let cube4 = document.querySelector('#cube4');
    cube4.classList.remove('rotation');
    setTimeout(() => {
      cube4.classList.add('rotation');
    }, 0);
  }
  
  function animation_rotation5() {
    let cube5 = document.querySelector('#cube5');
    cube5.addEventListener('click', animationStart19);
  }
  function animationStart19() {
    let cube5 = document.querySelector('#cube5');
    cube5.classList.remove('rotation');
    setTimeout(() => {
      cube5.classList.add('rotation');
    }, 0);
  }

  function animation_rotation6() {
    let cube6 = document.querySelector('#cube6');
    cube6.addEventListener('click', animationStart20);
  }
  function animationStart20() {
    let cube6 = document.querySelector('#cube6');
    cube6.classList.remove('rotation');
    setTimeout(() => {
      cube6.classList.add('rotation');
    }, 0);
  }

  function animation_bang1() {
    let plates = document.querySelector('.plates');
    plates.addEventListener('click', animationStart21);
  }
  function animationStart21() {
    let plate1 = document.querySelector('.plate1');
    plate1.classList.remove('bang');
    setTimeout(() => {
      plate1.classList.add('bang');
    }, 0);
  }

  function animation_bang2() {
    let plates = document.querySelector('.plates');
    plates.addEventListener('click', animationStart22);
  }
  function animationStart22() {
    let plate2 = document.querySelector('.plate2');
    plate2.classList.remove('bum');
    setTimeout(() => {
      plate2.classList.add('bum');
    }, 0);
  }

  function animation_record() {
    let record = document.querySelector('.record');
    record.addEventListener('click', animationStart23);
  }
  function animationStart23() {
    let record = document.querySelector('.record');
    record.classList.remove('music');
    setTimeout(() => {
      record.classList.add('music');
    }, 0);
  }
  document.addEventListener('DOMContentLoaded', () => {
    animation();
    animation2();
    animation3();
    animation4();
    animation_opacity1();
    animation_opacity2();
    animation_opacity3();
    animation_opacity4();
    animation_opacity5();
    animation_opacity6();
    animation_opacity7();
    animation_down1();
    animation_down2();
    animation_down3();
    animation_rotation1();
    animation_rotation2();
    animation_rotation3();
    animation_rotation4();
    animation_rotation5();
    animation_rotation6();
    animation_bang1();
    animation_bang2();
    animation_record();


    dragElement(document.getElementById("card1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("card2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("cube1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("cube2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("cube3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("cube4"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("cube5"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("cube6"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
  });