var imageElement;
var c;
var ctx;

	$(document).ready(function(){
		setTimeout(function(){
		 startVideo();
		}, 3000);
	})

	function startVideo() {
	    var video = document.querySelector('video'),canvas;
	    imageElement=video;
	    console.log("navigator  " + navigator.mediaDevices)
	    if (navigator.mediaDevices) {
	        // access the web cam
	        navigator.mediaDevices.getUserMedia({ video: true })
	            // permission granted:
	            .then(function(stream) {
	             //video.src = window.URL.createObjectURL(stream);
				     video.srcObject = stream;
				     c = document.getElementById("myCanvas");
		 			 ctx = c.getContext("2d");
		 			 setTimeout(function(){
				     	getSinglePose(imageElement);
					}, 3000);
	            })
	            // permission denied:
	            .catch(function(error) {
	                document.body.textContent = 'Could not access the camera.Error:' + error.name;
	            });
	    }
	    return imageElement;
	}


	function getSinglePose(imageElement)
	{
		posenet.load().then(function(net) {
	      const pose = net.estimateSinglePose(imageElement);
	      return pose;
	    }).then(function(pose){
	      var keypoints = new Array();
	      keypoints=pose.keypoints;
	      //console.log(keypoints);
	      var poseElement = document.getElementById('poseElementId');
	      poseElement.innerHTML="";
	      for (index=0;index<17;index++)
	      {
	      	  poseElement.innerHTML += keypoints[index].part + " " + keypoints[index].position.x + " " + keypoints[index].position.y + "<br>";
	      }
	      getSinglePose(imageElement);
	    })
	}



