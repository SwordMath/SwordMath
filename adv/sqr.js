  for(i=1; i<100;i++){
  var n = Math.floor(Math.random() * 10);

  
if(n/2 == 2 ||n/3 == 3||n/4 == 4||n/5 == 5||n/6 == 6||n/7 == 7||n/8 == 8||n/9 == 9||n/10 == 10||n/11 == 11||n/12 == 12)
{
  var q = Math.sqrt(n)
  var msg = new SpeechSynthesisUtterance();
  msg.text = "What is the square root of " + n;
  window.speechSynthesis.speak(msg);
  
  var a = prompt("What is the square root of " + n);
  if (a == q){
    alert("Good job");
    msg.text = "Good job";
    window.speechSynthesis.speak(msg);
  }
  else{
    console.error("OOF");
    alert("Good Try The correct answer was " + q);
    msg.text = "Good Try The correct answer was " + q;
    window.speechSynthesis.speak(msg);
    setTimeout(() => {  window.location.href = './index.html'; }, 2000);
   
  }
}break
continue  
}