// export default function demo(value) {
//   return value;
// }

const allHoles = document.querySelector('.hole-game');
const holes = Array.from(allHoles.childNodes);

let next = setInterval(() => change() ,1000);

function change() {
  let s = 50;

  for (let i = 1; i < holes.length; i = i + 2) {
    if (holes[i].classList.contains("hole_has-mole")){
      holes[i].classList.remove("hole_has-mole");
      s = i;
    }
  }
  let rnd = s;
  
  while (rnd == s || rnd % 2 == 0) {
    rnd = Math.floor( 1 + Math.random() * 31 );
    console.log(rnd);
  }
  holes[rnd].classList.add("hole_has-mole");
}

