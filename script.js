var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Rosaura Castillo')
  .pauseFor(200)
  .deleteChars(30)
  .typeString('Desarrolladora Web')
  .pauseFor(200)
  .deleteChars(30)
  .typeString('Dibujante')
  .pauseFor(100)
  .deleteChars(50)
  .typeString('Ilustradora')
  .pauseFor(150)
  .deleteChars(50)
  .typeString('Repostera novata')
  .pauseFor(500)
  .start();