(function() {
	setTimeout(function() {
		var videos = document.querySelectorAll("video"); 
			console.log('start');
		videos.forEach(function(video){
			console.log(video);
			if(video.children[0].src.includes('__ANIGIF.mp4'))
				var div = document.createElement('div');
				var gif_link = video.children[0].src; 
				gif_link = gif_link.replace("__ANIGIF.mp4", "__ANIGIF.gif");
				div.innerHTML = '<img src="'+gif_link+'" alt="gif image">';
				video.parentNode.insertBefore(div, video);
				video.parentNode.removeChild(video);
			})
	}, 2000)
})();