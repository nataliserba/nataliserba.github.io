/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/
//var p=document.querySelector('#answer');

function squre()
{
  const pi=3.14;
  var s,r;
  r=5;

 s=pi*r*r;
//document.writeln("Результат S : " + s);
  var res_el=document.getElementById('answer');
  res_el.innerHTML=s;
 return (s);
}

function number(){
  for (var i = 22; i <= 30; i++) {
    alert( "число " + i );
    //var res_n=document.getElementById('numbers');
    //res_n.innerHTML=i;
    //return (i);
  }
}
  


//p.addEventListener('onclick',squre);




