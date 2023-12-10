export const setupExploreButton = () => {
  const exploreContainer = document.getElementById('exploreContainer');
  const buttonExplore = document.createElement('button');

  buttonExplore.textContent = 'Go!';
  buttonExplore.classList.add('exploreButton');
  exploreContainer.appendChild(buttonExplore);

  buttonExplore.addEventListener('click', foundImages);
};

export const foundImages = async () => {
  const apiKey = 'hnZXiqPMHstHIrvXiZN5qldLwxZkLyHOwuHrRJFjGUM';
  const inputValue = document.getElementById('input').value;
  const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${apiKey}&per_page=10&order_by=random`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    showingImages(data.results);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

export const showingImages = (images) => {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';

  if (images.length === 0) {
    const alertMessage = document.createElement('h3');
    alertMessage.textContent = 'Sorry :( No images found';
    alertMessage.classList.add('alert-message');
    imageContainer.appendChild(alertMessage);
  } else {
    images.forEach((image) => {
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image-div');

      const imgElement = document.createElement('img');
      const nameUserElement = document.createElement('h3');

      nameUserElement.innerHTML = `By: ${
        image.user.name || 'No name available'
      }📸`;
      imgElement.src = image.urls.regular;

      imageDiv.appendChild(imgElement);
      imageDiv.appendChild(nameUserElement);
      imageContainer.appendChild(imageDiv);
    });
  }
};
