video = "";
status="";
object=[];
function preload(){

  video = createVideo('video.mp4');
 
  
}
function start(){
  objectDetector=ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML="Detecting Objects ....";
}
function setup(){
 canvas=createCanvas(600,300);
 canvas.center();
 video.hide();
}
function modelLoaded(){
 console.log("ModelLoaded");
 status=true;
 video.speed(1);
 video.loop();
 video.volume(0);
}
function draw(){
  image(video,0,0,600,300);
  if(status !=""){
    objectDetector.detect(video,gotResults);
     for(i=0;i<object.length;i++){
         document.getElementById("status").innerHTML="Object Detected";
         document.getElementById("number_of_object").innerHTML="Number Object Deteceted ="+ object.length ;
         fill("#FF0000") ;
         percent=floor(object[i].confidence *100);    
         text(object[i].label + " " + percent +"%",object[i].x+15,object[i].y+15);
         noFill();
         stroke("#FFOOOO");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
        

  }

}
function gotResults(error,results){
    if(error){
      console.error(error);
    }
      console.log(results);
      object=results;
    
}