

// SECTION WELCOME
const sorteoBanner = () => {
let imgBanner = [
    {url: '1.jpg' ,
    alt: 'Imagen 1' }, 
    {url: '2.jpg' ,
    alt: 'Imagen 2' },
    {url: '3.jpg' ,
    alt: 'Imagen 3' }, 
    {url: '4.jpg' ,
    alt: 'Imagen 4' },
    {url: '5.jpg' ,
    alt: 'Imagen 5' },
]
return imgBanner[Math.floor(Math.random() * imgBanner.length)]
}

const welcomeSection = () => {
    const welSec = document.querySelector('#welcome');
    //pinto el texto
    const texto = document.querySelector('.texto')
    texto.innerHTML = 'Bienvenidos'
    //crio una div para imagen 
    const divImg = document.createElement('DIV');
    welSec.append(divImg);
    divImg.classList.add('divBanner');

    //pinto a imagen dentro de la div creada
    const imgWel = document.createElement('IMG');
    divImg.append(imgWel);
    //llamo a funcion random para el banner
    let imgBanner = sorteoBanner();
    //assigno los atributos 
    imgWel.src= `assets/${imgBanner.url}`;
    imgWel.alt= imgBanner.alt;
    console.log(imgWel)


}
welcomeSection();


// SECTION RECOMENDADOS
