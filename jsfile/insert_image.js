// JavaScript code for the image gallery
const gallery = document.querySelector('#image-gallery');
const insertImageForm = document.querySelector('#insert-image-form');

insertImageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const imageFile = event.target.elements['image-file'].files;
  const imageTitle = event.target.elements['image-title'].value;
  const imageDescription = event.target.elements['image-description'].value;
  const imagePrice = event.target.elements['image-price'].value;
  
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onload = () => {
    const imageSrc = reader.result;
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = imageTitle;
    galleryItem.appendChild(image);
    
    const title = document.createElement('h1');
    title.textContent = imageTitle;
    galleryItem.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = imageDescription;
    galleryItem.appendChild(description);
    
    const price = document.createElement('span');
    price.textContent = imagePrice;
    galleryItem.appendChild(price);
    
    gallery.appendChild(galleryItem);
  };
});