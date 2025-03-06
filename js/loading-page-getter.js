// loading.js
function createLoadingPage() {
  const loadingPageHtml = `
     <!DOCTYPE html>
<html>
	
	<head>
		<meta charset="utf-8">
		<meta name="description" content="This is my first attempt to coding in web">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title> Resturant Homepage </title>
	</head>
	
	<body>
		
		<div id="loading-page">
			 <div class="content-of-loading-page"> 
				<p style="font-family: none;">
					<img src="photoes/shared/resturant-logo.jpg" />
					 جارِ التحميل    
					 <div class="loader"></div>
				 </p>
			 </div>
		</div>
		<script src="js/jQuery.js"></script>
		<script src="js/bootstrap.js"></script>
	</body>

	</html>
    `;
  return loadingPageHtml;
}

function addLoadingPage() {
  const loadingPageHtml = createLoadingPage();
  const loadingPageholder = document.getElementById("loading-page");
  loadingPageholder.innerHTML = loadingPageHtml;
}
