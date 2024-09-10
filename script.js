const circles = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress-bar');
const textContent = document.getElementById('text-content');
const yearTitle = document.getElementById('year-title');
const yearDescription = document.getElementById('year-description');
const timeline = document.querySelector('.timeline');

const yearData = {
  2018: {
    title: "April 2018",
    description: "We are one of India's leading drone firms in providing end-to-end Drone Solutions."
  },
  2019: {
    title: "April 2019",
    description: "We expanded our operations across India."
  },
  2020: {
    title: "April 2020",
    description: "We introduced new AI-powered drone services."
  },
  2021: {
    title: "April 2021",
    description: "We partnered with major tech companies for drone innovation."
  },
  2022: {
    title: "April 2022",
    description: "We reached new heights in drone technology."
  },
  2023: {
    title: "April 2023",
    description: "We became the top drone service provider in Asia."
  },
  2024: {
    title: "April 2024",
    description: "We are leading globally in drone innovation."
  }
};

function updateProgressBar(circle) {
  const timelineRect = timeline.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();

  
  const progressWidth = ((circleRect.left + circleRect.width / 2 - timelineRect.left) / timelineRect.width) * 100;

  
  progressBar.style.width = `${progressWidth}%`;
}

function updateTextContent(year) {
  textContent.style.opacity = 0;
  textContent.style.transform = 'translateY(20px)';

  setTimeout(() => {
    yearTitle.textContent = yearData[year].title;
    yearDescription.textContent = yearData[year].description;

    textContent.style.opacity = 1;
    textContent.style.transform = 'translateY(0)';
  }, 500);
}


circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    circles.forEach(c => c.classList.remove('active'));
    circle.classList.add('active');

    const year = circle.getAttribute('data-year');
    updateTextContent(year);

    
    updateProgressBar(circle);
  });
});


window.addEventListener('resize', () => {
  const activeCircle = document.querySelector('.circle.active');
  if (activeCircle) {
    updateProgressBar(activeCircle);
  }
});
