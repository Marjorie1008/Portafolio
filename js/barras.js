document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".skill-progress");
  
  progressBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 100);
  });
});