/* COMMENTS ARE WRITTEN IN INFORMAL LANGUAGE SO ITS EASY TO UNDERSTAND WHATS GOING ON IN CODE*/

/* add 2 input box in middle of screen right next to each other */
var inputBox1 = document.createElement('input');
inputBox1.type = 'text';
inputBox1.style.position = 'absolute';
inputBox1.style.top = '50%';
inputBox1.style.left = '50%';
inputBox1.style.width = '100px';
inputBox1.style.height = '20px';
inputBox1.style.marginLeft = '-50px';
inputBox1.style.marginTop = '-10px';
document.body.appendChild(inputBox1);
var inputBox2 = document.createElement('input');
inputBox2.type = 'text';
inputBox2.style.position = 'absolute';
inputBox2.style.top = '50%';
inputBox2.style.left = '50%';
inputBox2.style.width = '100px';
inputBox2.style.height = '20px';
inputBox2.style.marginLeft = '50px';
inputBox2.style.marginTop = '-10px';
document.body.appendChild(inputBox2);
/* move a bit away each other */
inputBox1.style.marginLeft = '-150px';
inputBox2.style.marginLeft = '50px';
/* add a string "ALGO" */
var algo = document.createElement('div');
algo.innerHTML = 'ALGO';
algo.style.position = 'absolute';
algo.style.top = '50%';
algo.style.left = '50%';
algo.style.marginLeft = '-25px';
algo.style.marginTop = '-10px';
document.body.appendChild(algo);
/* add a string "USD" */
var usd = document.createElement('div');
usd.innerHTML = 'USD';
usd.style.position = 'absolute';
usd.style.top = '50%';
usd.style.left = '50%';
usd.style.marginLeft = '75px';
usd.style.marginTop = '-10px';
document.body.appendChild(usd);
/* move both strings above both input boxes */
algo.style.marginTop = '-30px';
usd.style.marginTop = '-30px';
/* move algo string to left */
algo.style.marginLeft = '-125px';
/* now whatever value is added in left input box should give outcome by multiplying to 0.2457 */
inputBox1.onkeyup = function() {
  inputBox2.value = inputBox1.value * 0.2457;
}
/* now whatever value is added in right input box should give outcome by multiplying to 4.07 in left box */
inputBox2.onkeyup = function() {
  inputBox1.value = inputBox2.value * 4.07;
}
/* once value is removed from input box value from other box should be removed too */
inputBox1.onkeyup = function() {
  if (inputBox1.value == '') {
    inputBox2.value = '';
  } else {
    inputBox2.value = inputBox1.value * 0.2457;
  }
}
inputBox2.onkeyup = function() {
  if (inputBox2.value == '') {
    inputBox1.value = '';
  } else {
    inputBox1.value = inputBox2.value * 4.07;
  }
}
/* add a button in mid by name "Convert" */
var convert = document.createElement('button');
convert.innerHTML = 'Convert';
convert.style.position = 'absolute';
convert.style.top = '50%';
convert.style.left = '50%';
convert.style.marginLeft = '-50px';
convert.style.marginTop = '10px';
document.body.appendChild(convert);
/* move it in middle of both input boxes equally */
convert.style.marginLeft = '-25px';
/* a bit upward */
convert.style.marginTop = '-10px';
/* now until unless convert button is pressed no value should be displayed in other box but value input by user can be displayed */
inputBox1.onkeyup = function() {
  if (inputBox1.value == '') {
    inputBox2.value = '';
  }
}
inputBox2.onkeyup = function() {
  if (inputBox2.value == '') {
    inputBox1.value = '';
  }
}
/* once convert button is pressed value should be displayed in other box */
convert.onclick = function() {
  if (inputBox1.value != '') {
    inputBox2.value = inputBox1.value * 0.2457;
  } else if (inputBox2.value != '') {
    inputBox1.value = inputBox2.value * 4.07;
  }
}
/* now add a button below , named "clear all" by pressing that button values in input box should be erased */
/* now add a button below , named "clear all" by pressing that button values in input box should be erased */
var clearAll = document.createElement('button');
clearAll.innerHTML = 'Clear All';
clearAll.style.position = 'absolute';
clearAll.style.top = '50%';
clearAll.style.left = '50%';
clearAll.style.marginLeft = '-50px';
clearAll.style.marginTop = '30px';
document.body.appendChild(clearAll);
/* once clear all button is pressed values should be removed from input box */
clearAll.onclick = function() {
  inputBox1.value = '';
  inputBox2.value = '';
}
/* now give better interface to convert button by this css code : .shadow__btn { */
var css = document.createElement('style');
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 5px; box-shadow: 0px 0px 5px #00bcd4; }';
document.body.appendChild(css);
/* padding: 10px 20px; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 5px; box-shadow: 0px 0px 5px #00bcd4; }';
/* border: none; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 5px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; }';
/* font-size: 17px; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 5px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; }';
/* color: #fff; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 5px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; }';
/* border-radius: 7px; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; }';
/* letter-spacing: 4px; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; }';
/* font-weight: 700; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; font-weight: 700; }';
/* text-transform: uppercase; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; }';
/* transition: 0.5s; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; }';
/* transition-property: box-shadow; */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* } */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* .shadow__btn { */
css.innerHTML = '.shadow__btn { background: #00bcd4; color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* background: rgb(0,140,255); */
css.innerHTML = '.shadow__btn { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0px 0px 5px #00bcd4; font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* box-shadow: 0 0 25px rgb(0,140,255); */
/* } */
css.innerHTML = '.shadow__btn { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* .shadow__btn:hover { */
css.innerHTML = '.shadow__btn { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; } .shadow__btn:hover { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* box-shadow: 0 0 5px rgb(0,140,255), */
css.innerHTML = '.shadow__btn { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; } .shadow__btn:hover { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 5px rgb(0,140,255), 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* 0 0 25px rgb(0,140,255), */
css.innerHTML = '.shadow__btn { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; } .shadow__btn:hover { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 5px rgb(0,140,255), 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* 0 0 50px rgb(0,140,255), */
/* 0 0 100px rgb(0,140,255); */
css.innerHTML = '.shadow__btn { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; } .shadow__btn:hover { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 5px rgb(0,140,255), 0 0 25px rgb(0,140,255), 0 0 50px rgb(0,140,255), 0 0 100px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* } */
css.innerHTML = '.shadow__btn { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 25px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; } .shadow__btn:hover { background: rgb(0,140,255); color: #fff; padding: 10px 20px; border-radius: 7px; box-shadow: 0 0 5px rgb(0,140,255), 0 0 25px rgb(0,140,255), 0 0 50px rgb(0,140,255), 0 0 100px rgb(0,140,255); font-size: 17px; letter-spacing: 4px; font-weight: 700; text-transform: uppercase; transition: 0.5s; transition-property: box-shadow; }';
/* give better look to convert button */
convert.className = 'shadow__btn';
/* give better look to clear all button too */
clearAll.className = 'shadow__btn';
/* now increase size of input boxes */
inputBox1.style.width = '200px';
inputBox2.style.width = '200px';
/* make them bigger not wider */
inputBox1.style.height = '40px';
inputBox2.style.height = '40px';
/* move input boxes */
inputBox1.style.marginLeft = '-150px';
inputBox2.style.marginLeft = '50px';
/* more */
inputBox1.style.marginLeft = '-200px';
inputBox2.style.marginLeft = '100px';
/* more */
inputBox1.style.marginLeft = '-250px';
inputBox2.style.marginLeft = '150px';
/* move strings */
algo.style.marginLeft = '-175px';
usd.style.marginLeft = '125px';
/* more */
algo.style.marginLeft = '-225px';
usd.style.marginLeft = '175px';
/* now give better look to input boxes */
inputBox1.style.border = 'none';
inputBox2.style.border = 'none';
/* better look */
inputBox1.style.border = '1px solid #00bcd4';
inputBox2.style.border = '1px solid #00bcd4';
/* give a glow of grey color */
inputBox1.style.boxShadow = '0 0 5px #00bcd4';
inputBox2.style.boxShadow = '0 0 5px #00bcd4';
/* perfect now move convert and clear all button a bit */
convert.style.marginTop = '-15px';
clearAll.style.marginTop = '45px';
/* make clear all button same size of convert */
clearAll.style.width = '200px';
/* move clear all button 5 px to right */
clearAll.style.marginLeft = '-5px';
/* 3 to left */
clearAll.style.marginLeft = '-3px';
/* 1 more */
clearAll.style.marginLeft = '-5px';
/* 1 more */
clearAll.style.marginLeft = '-7px';
/* it should allign by y-axis with convert button */
clearAll.style.marginTop = '-15px';
/* move it below */
clearAll.style.marginTop = '15px';
/* more */
clearAll.style.marginTop = '30px';
/* more */
clearAll.style.marginTop = '45px';
/* move clear to left */
clearAll.style.marginLeft = '-50px';

