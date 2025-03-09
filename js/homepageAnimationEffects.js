const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("start-animation");
    else entry.target.classList.remove("start-animation");
  });
});

const elements = document.getElementsByClassName("animatable");
Array.from(elements).forEach((element) => {
  observer.observe(element);
});
