import './footer.css';
const top = () => 'top';

function bottom () { return 'bottom'; }


const addFooter = () => {
  const footer = document.createElement('footer');
  return footer;
}

export {
  bottom,
  top,
  addFooter
}; 