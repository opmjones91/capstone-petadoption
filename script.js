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
