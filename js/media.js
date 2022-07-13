var gallery = [
  {
    img: "../images/gallery/image1.jpg",
  },
  {
    img: "../images/gallery/image2.jpg",
  },
  {
    img: "../images/gallery/image3.jpg",
  },
  {
    img: "../images/gallery/image4.jpg",
  },
  {
    img: "../images/gallery/image5.jpg",
  },
  {
    img: "../images/gallery/image6.jpg",
  },
  {
    img: "../images/gallery/image7.jpg",
  },
  {
    img: "../images/gallery/image8.jpg",
  },
  {
    img: "../images/gallery/image9.jpg",
  },
  {
    img: "../images/gallery/image10.jpg",
  },
  {
    img: "../images/gallery/image11.jpg",
  },
  {
    img: "../images/gallery/image12.jpg",
  },
];

function show(number) {
  document.getElementById("gallery-img").src = gallery[number].img;
}
