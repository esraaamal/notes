
const inputs=document.querySelectorAll('.controls input');
console.log(inputs)

function hadelUpdate(){
    // console.log(this.dataset)
    const suffix=this.dataset.sizing||' ';

    console.log(suffix)
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
    document.documentElement.style.setProperty("--base",this.value)

}

inputs.forEach(x=>x.addEventListener('change', hadelUpdate))
inputs.forEach(x=>x.addEventListener('mousemove', hadelUpdate))
