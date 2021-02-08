const txtHistory = new window.UndoRedojs(5);


function updateText(){
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}


function changeFont(elem){
  var myFont = document.getElementById("input-font").value;
  document.getElementById('text-output').style.fontFamily = myFont;

}


function makeBold(elem){
  elem.classList.toggle('active')
  document.getElementById('text-output').classList.toggle('bold')
  
}


function makeItalic(elem){
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('italic')
  

}


function makeUnderline(elem){
    elem.classList.toggle('active')
    // document.getElementById('text-output').classList.toggle('underline')
    let FormattedText = document.getElementById('text-output');
    if (FormattedText.classList.contains('underline')){
      FormattedText.classList.remove('underline');

    } else{
      FormattedText.classList.add('underline');
    }

}


function alignText(elem, alignType){
  console.log(alignType)
  document.getElementById('text-output').style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName('align')
  for (let i=0; i<buttonsList.length; i++){
    buttonsList[i].classList.remove('active');
  }
  elem.classList.toggle('active');

}



function makeRedo(elem) {

}