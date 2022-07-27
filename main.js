var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function run (event) {
    
    console.log(event);

    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking Your Next Selfie In 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function()
    {
        img_id = "selfie1";
        console.log(img_id);
        speak_data = "Taking Your Next Selfie In 10 Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
        setTimeout(function()
        {
            img_id = "selfie2";
            console.log(img_id);
            speak_data = "Taking Your Next Selfie In 15 Seconds";
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak(utterThis);
            take_snapshot();
            setTimeout(function()
            {
                img_id = "selfie3";
                console.log(img_id);
                take_snapshot();
            },15000);
        },10000);
    },5000);

}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'png',
    jpeg_quality:90
});



//function speak(){

    
 //   var synth = window.speechSynthesis;
//    Webcam.attach(camera);

 //   speak_data = "Taking your next Selfie in 100 seconds";
 //   var utterThis = new SpeechSynthesisUtterance(speak_data);
 //   synth.speak(utterThis);


//}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            console.log(data_uri);
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
