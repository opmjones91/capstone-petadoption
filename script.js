function fetchRandomDogImage() {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update the image source with the received URL
        const dogImageElement = document.getElementById('dogImage');
        dogImageElement.src = data.message;
      })
      .catch(error => {
        console.error('Error fetching random dog image:', error);
      });
  }
  

  const adoptionData = {
    labels: ['Cats', 'Dogs', 'Rabbits'],
    datasets: [{
      label: 'Number of Adoptions',
      data: [120, 200, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 205, 86, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 205, 86, 1)',
      ],
      borderWidth: 1,
    }],
  };

  
  const ctx = document.getElementById('adoptionChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: adoptionData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
