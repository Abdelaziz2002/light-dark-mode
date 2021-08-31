const toggleSwitch= document.querySelector('input[type="checkbox"]');
const toggleicon=document.getElementById('toggle-icon')
const textbox=document.getElementById('text-box')
const image1=document.getElementById('image1')
const image2=document.getElementById('image2')
const image3=document.getElementById('image3')

function image(color) {
    image1.src=`img/undraw_proud_coder_${color}.svg`
    image2.src=`img/undraw_feeling_proud_${color}.svg`
    image3.src=`img/undraw_conceptual_idea_${color}.svg`
}

function dark(){
    toggleicon.children[0].textContent='Dark mode'
    toggleicon.children[1].classList.replace('fa-sun','fa-moon')
    textbox.style.backgroundColor='var(--on-background)'
    image('dark')
}

function light(){
    toggleicon.children[0].textContent='Light mode'
    toggleicon.children[1].classList.replace('fa-moon','fa-sun')
    textbox.style.backgroundColor='var(--background)'
    image('light')
}
// toggle switch function
function switchTheme(event){
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme',"dark")
        localStorage.setItem('theme','dark')
        dark() 
    }else{
        document.documentElement.setAttribute('data-theme',"light")
        localStorage.setItem('theme','light')
        light()
    }
}

toggleSwitch.addEventListener('change',switchTheme);
const currentheme= localStorage.getItem('theme')
if (currentheme) {
    document.documentElement.setAttribute('data-theme',currentheme)
}
if (currentheme==='dark') {
    toggleSwitch.checked=true
    dark();
}