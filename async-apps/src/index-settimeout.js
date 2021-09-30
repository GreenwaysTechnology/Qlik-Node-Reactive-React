//async timers

function delay(cb){
  //timer : high level async/non blocking api
  setTimeout(cb,1000);
}
function greet(message){
  console.log(message);
}
greet("start app") ; //pushed into stack----frame--running--

//here parameter function gets registered into queue--waits
//when ever an event is available, event loop thread iterates the queue picks up the right function---it push into stack, creates frame, run the frame and gets the result.

delay(function(){
    console.log('im delayed')
})

greet("stop app") ; 