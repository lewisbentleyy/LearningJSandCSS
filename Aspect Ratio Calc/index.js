let ratioWidth = document.getElementById("ratio-width")
let ratioHeight = document.getElementById("ratio-height")
let width = document.getElementById("width")
let height = document.getElementById("height")
let button = document.getElementById("button-reset")

let calculateWidth = ()=>{
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    width.value = parseFloat((height.value * aspectRatio).toFixed(2))

}

let calculateHeight = ()=>{
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    height.value = parseFloat((width.value / aspectRatio).toFixed(2))
    
}

height.addEventListener("input", calculateWidth)
width.addEventListener("input", calculateHeight)
ratioHeight.addEventListener("input", calculateWidth)
ratioWidth.addEventListener("input", calculateHeight)
button.addEventListener("click", ()=>{
    height.value="720"
    width.value="1280"
    ratioHeight.value="9"
    ratioWidth.value="16"
})