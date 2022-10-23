import '../style/component.css';
// import webpackLogo from '../assets/img/webpack-logo.png';

export const hello = (name) => {
  const h1 = document.createElement('h1');
  h1.innerText = `Hello, ${name}`;
  document.body.append(h1);

  // img
  // const img = document.createElement('img');
  // img.src = webpackLogo;
  // document.body.append(img);
};
