const apiUrl = 'https://api.thecatapi.com/v1/images/search';

async function fetchCatImage() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const catImageUrl = data[0].url; 
    
    document.getElementById('catImage').src = catImageUrl;
  } catch (error) {
    console.error('Erro ao buscar imagem:', error);
  }
}

window.onload = fetchCatImage;
