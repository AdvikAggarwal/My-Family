Webcam.attach( '#camera' );

camera = document.getElementById("camera");
     
  Webcam.set({
    width:320,
    height:240,
    image_format : 'png',
    png_quality:90
  });

function takeImage()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CuwKOVyg7/model.json',modelLoaded);

function modelLoaded() {
  console.log('Model Loaded!');
}

function checkImage()
{
  img = document.getElementById("selfie_image");
  classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
  if (error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = "The person identified is:" + results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = "Accuracy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:" + results[0].confidence.toFixed(5);
  }
}