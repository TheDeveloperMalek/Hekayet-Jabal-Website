// nav.js
function createNavBar() {
    const navHTML = `
     <!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta name="description" content="This is my first attempt to coding in web">
		<meta http-equiv="X-UA-Compitable" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- <link rel="stylesheet" href="css/bootstrap.css" > -->
		<!-- <link rel="stylesheet" href="css/template.css" > -->
		<title> Navbar Template </title>
	</head>

	<body>
		<!--navigation bar-->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div  class="container-fluid">
				<a class="navbar-brand" href="Homepage.html">
					<img height="80" width="80" src="photoes/shared/resturant-logo.jpg" />
					حكاية جبل
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link" aria-current="page" href="Homepage.html">
							الصفحة الرئيسية
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
								class="bi bi-house" viewBox="0 0 16 16">
								<path
									d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
							</svg>
						</a>
						<a class="nav-link" href="Food-Categories.html">
							الأطعمة و المشروبات 
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
								class="bi bi-egg-fried" viewBox="0 0 16 16">
								<path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
								<path
									d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
							</svg>
						</a>
						<a class="nav-link" href="Contact Us.html">
							تواصل معنا
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
								class="bi bi-telephone" viewBox="0 0 16 16">
								<path
									d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
							</svg>
						</a>
						
						<a class="nav-link" href="About The Developer.html">
							عن المطور
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
								<path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</nav>
		<script src="js/jQuery.js"></script>
		<script src="js/bootstrap.js"></script>
	</body>
</html>
    `;
    return navHTML;
  }
  
  function addNavBarToPage() {
    const navHTML = createNavBar();
    const navPlaceholder = document.getElementById('navbar');
    navPlaceholder.innerHTML = navHTML;
  }