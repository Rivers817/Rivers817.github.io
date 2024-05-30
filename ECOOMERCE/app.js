const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 55000,
    colors: [
      {
        code: "white",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
      {
        code: "brown",
        img: "./img/airred.jpg",
      },
      {
        code: "black",
        img: "./img/airblack.jpg",
      },
      {
        code: "green",
        img: "./img/airgreen.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 75000,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
      {
        code: "white",
        img: "./img/jorwhite.jpg",
      },
      {
        code: "blue",
        img: "./img/jorblue.jpg",
      },
      {
        code: "black",
        img: "./img/jorblack.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Timberland",
    price: 105000,
    colors: [
      {
        code: "brown",
        img: "./img/tmbrown.png",
      },
      {
        code: "green",
        img: "./img/tmgreen.jpg",
      },
      {
        code: "yellow",
        img: "./img/tmyellow.png",
      },
      {
        code: "blue",
        img: "./img/tmblue.jpg",
      },
      {
        code: "black",
        img: "./img/tmberland.png",
      },
    ],
  },
  {
    id: 4,
    title: "Alexandar MC Queen",
    price: 85000,
    colors: [
      {
        code: "black",
        img: "./img/mcblack.jpg",
      },
      {
         code: "lightgray",
         img: "./img/mcgray.jpg",
    
      },
      {
        code: "white",
        img: "./img/mcwhite.jpg",
      },
      {
        code: "green",
        img: "./img/mcgreen.jpg",
      },
      {
        code: "brown",
        img: "./img/mcbrown.png",
      },
    ],
  },
  {
    id: 5,
    title: "Vans",
    price: 45000,
    colors: [
      {
        code: "gray",
        img: "./img/vansgray.png",
      },
      {
        code: "black",
        img: "./img/vansblack.jpg",
      },
      {
        code: "white",
        img: "./img/vanswhite.jpg",
      },
      {
        code: "green",
        img: "./img/vansgreen.png",
      },
      {
        code: "brown",
        img: "./img/vansbrown.png",
      },
    ],
  },
  {
    id: 6,
    title: "Balenciaga",
    price: 75000,
    colors: [
      {
        code: "gray",
        img: "./img/balgray.jpg",
      },
      {
        code: "black",
        img: "./img/balblack.jpg",
      },
      {
        code: "white",
        img: "./img/balwhite.jpg",
      },
      {
        code: "green",
        img: "./img/balgreen.jpg",
      },
      {
        code: "brown",
        img: "./img/balbrown.png",
      },
    ],
  },
  {
    id: 7,
    title: "Convrese",
    price: 45000,
    colors: [
      {
        code: "gray",
        img: "./img/congray.jpg",
      },
      {
        code: "black",
        img: "./img/conblack.jpg",
      },
      {
        code: "white",
        img: "./img/conwhite.jpg",
      },
      {
        code: "green",
        img: "./img/congreeen.jpg",
      },
      {
        code: "brown",
        img: "./img/conbrown.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Tsh." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
