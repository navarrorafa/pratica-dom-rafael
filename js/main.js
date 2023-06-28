
const arrayCard = [
    {
        url: 'viajes-1.jpg',
        alt: 'viajes 1',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing amet .',
        title: 'Viaje 1'
    },
    {
        url: 'viajes-2.jpg',
        alt: 'viajes 2',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        title: 'Viaje 2'
    },
    {
        url: 'viajes-3.jpg',
        alt: 'viajes 3',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        title: 'Viaje 3'
    }
]

const arrayDestinos = ['Brasil' ,'Irlanda','Marrocos','Alemania','Japon' ];


// SECTION WELCOME
const sorteoBanner = () => {
    let imgBanner = [
        {
            url: '1.jpg',
            alt: 'Imagen 1'
        },
        {
            url: '2.jpg',
            alt: 'Imagen 2'
        },
        {
            url: '3.jpg',
            alt: 'Imagen 3'
        },
        {
            url: '4.jpg',
            alt: 'Imagen 4'
        },
        {
            url: '5.jpg',
            alt: 'Imagen 5'
        },
    ]
    return imgBanner[Math.floor(Math.random() * imgBanner.length)]
}

const welcomeSection = () => {
    const welSec = document.querySelector('#welcome');
    //pinto el texto
    const texto = document.querySelector('#welcome h2')
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
    imgWel.src = `assets/${imgBanner.url}`;
    imgWel.alt = imgBanner.alt;
    console.log(imgWel)


}



// SECTION RECOMENDADOS



const sectionRecomend = () => {
    const divFlex = document.querySelector('#cajaRecomendados');
   

 

    arrayCard.forEach((item) => {
        const cajaFigure = document.createElement('FIGURE');
        const divImg = document.createElement('DIV');
        const cardImg = document.createElement('IMG');
        const cardTitle = document.createElement('H3');
        const cardMsg = document.createElement('P');
        divFlex.append(cajaFigure);
        cajaFigure.append(divImg);
        divImg.classList.add('divCard')
        divImg.append(cardImg);
        cardImg.src = `assets/${item.url}`;
        cardImg.alt = item.alt;
        cajaFigure.append(cardTitle);
        cardTitle.innerHTML = item.title
        cajaFigure.append(cardMsg);
        cardMsg.innerHTML = item.msg
    });



}


// SECTION DESTINOS 

const sectionDestino = () => {

    const destSection = document.querySelector('#sectionDestinos');
    const destSelection = document.createElement('SELECT');
    destSection.append(destSelection)

    arrayDestinos.forEach((item)=> {
        const destOption = document.createElement('OPTION');
        destSelection.append(destOption);
        destOption.value = item;
        destOption.innerHTML = item;
    })

    
}









sectionRecomend();
welcomeSection();
sectionDestino();