
  Webcam.set({
    width:450,
    height:350,
    image_format : 'png',
    png_quality:90
  });

 // camera = document.getElementById("camera");

Webcam.attach('#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
      console.log(data_uri);
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'>"
        //document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'>"
        //console.log("<img id = 'captured_image' src = '"+data_uri+"'>");
    });
}


  console.log('ml5 version:'+ ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lpyC7VNGP/model.json',modelLoaded);

  function modelLoaded() {
    console.log('teachable Model Loaded!');
  }
function check(){
 var pic = document.getElementById("captured_image")
 classifier.classify(pic,checker)
}
function checker(error,ans){
  if(error){
  console.log(error);
  }
  else{
    console.log(ans);
    document.getElementById("result_object_name").innerHTML=ans[0].label
    document.getElementById("result_object_accuracy").innerHTML=ans[0].confidence.toFixed(2)
  }
}