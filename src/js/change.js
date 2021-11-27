const holes = [...document.getElementsByClassName('hole')];

export default function change() {
  
    //document.querySelector(".hole_has-mole").classList.remove("hole_has-mole");
    let s = 50;
    for (let i = 0; i < holes.length; i ++ ) {
        if (holes[i].classList.contains("hole_has-mole")) {
            holes[i].classList.remove("hole_has-mole");
            s = i;
        }
    }
    let rnd = s;
    while (rnd == s) {
      rnd = Math.floor( Math.random() * 16 );
    }
    holes[rnd].classList.add("hole_has-mole");
}
