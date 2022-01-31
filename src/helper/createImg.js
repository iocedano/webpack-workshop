const createImg = (url) => {
  const img = document.createElement('img');
  img.src = url;
  return img;
}

export default createImg;