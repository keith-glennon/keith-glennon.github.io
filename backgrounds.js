  const backgrounds = [
    "images/background3.jpeg",
    "images/background4.jpeg",
    "images/background5.jpeg",
    "images/background6.jpeg",
    "images/background7.jpeg",
    "images/background8.jpeg",
    "images/background9.jpeg",
    "images/background10.jpeg",
    "images/background11.jpeg",
    "images/background12.jpeg",
    "images/background13.jpeg",
    "images/background14.jpeg",
    "images/background15.jpeg",
    "images/background16.jpeg",
    "images/background17.jpeg",
    "images/background18.jpeg",
    "images/background19.jpeg"
  ];

  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  document.body.style.backgroundImage = `url('${randomBackground}')`;
