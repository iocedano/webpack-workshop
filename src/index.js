import nav from './nav';
import { top, bottom, addFooter } from './footer';
import createImg from './helper/createImg';
import imgUrl from './klkconklk.jpeg';

console.log(nav, top(), bottom());
const main = () => {

  document.body.appendChild(createImg(imgUrl))
  document.body.appendChild(addFooter())
}

main();