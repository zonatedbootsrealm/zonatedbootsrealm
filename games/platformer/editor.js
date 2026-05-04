const canvas = document.getElementById("editor")
const output = document.getElementById("output")
const downloadButton = document.getElementById("download")
const ctx = canvas.getContext("2d")

canvas.tabIndex = 1

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const tileSize = 50

let selectedTile = "="

const selectedText = document.getElementById("selected")

const camera = {
    x: 0,
    y: 0
}

const keys = {}


canvas.addEventListener("mousedown", function(event) {

    canvas.focus()

    // rest of code
})

document.addEventListener("keydown", function(event) {
	
	event.preventDefault()

    keys[event.key] = true

    // existing tile select stuff here

})

document.addEventListener("keyup", function(event) {

    event.preventDefault()

    keys[event.key] = false

})


downloadButton.addEventListener("click", function() {

    const text = output.value

    const blob = new Blob(
        [text],
        { type: "text/plain" }
    )

    const link = document.createElement("a")

    link.href = URL.createObjectURL(blob)

    link.download = "level.js"

    link.click()

})

document.addEventListener("keydown", function(event) {

    if (event.key === "1") selectedTile = "="
    if (event.key === "2") selectedTile = "-"
    if (event.key === "3") selectedTile = "*"
    if (event.key === "4") selectedTile = "^"
    if (event.key === "5") selectedTile = "C"
    if (event.key === "6") selectedTile = "?"
	if (event.key === "7") selectedTile = "*"
	if (event.key === "8") selectedTile = "@"
	if (event.key === "9") selectedTile = "O"
    if (event.key === "0") selectedTile = " "
	if (event.key === "a") selectedTile = "B"
	if (event.key === "b") selectedTile = "I"
	if (event.key === "c") selectedTile = "L"
	if (event.key === "d") selectedTile = "X"
    if (event.key === "e") selectedTile = "#"
	if (event.key === "f") selectedTile = "%"
	if (event.key === "g") selectedTile = "M"
	if (event.key === "h") selectedTile = ">"
	if (event.key === "i") selectedTile = "<"
    if (event.key === "j") selectedTile = "F"
	if (event.key === "k") selectedTile = "K"
	if (event.key === "l") selectedTile = "G"
	if (event.key === "m") selectedTile = "R"
	if (event.key === "n") selectedTile = "+"
	if (event.key === "o") selectedTile = "T"
	if (event.key === "p") selectedTile = "Y"
	if (event.key === "q") selectedTile = "!"
	if (event.key === "r") selectedTile = "W"
	if (event.key === "s") selectedTile = "Q"
	if (event.key === "t") selectedTile = "V"
	if (event.key === "u") selectedTile = "~"
	if (event.key === "v") selectedTile = "f"
	if (event.key === "w") selectedTile = "A"
	if (event.key === "x") selectedTile = "("

    selectedText.textContent = selectedTile

})

updateOutput()

canvas.addEventListener("mousedown", function(event) {

    const rect = canvas.getBoundingClientRect()

    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const col = Math.floor((mouseX + camera.x) / tileSize)
const row = Math.floor((mouseY + camera.y) / tileSize)

    let line = level[row]

    line =
        line.substring(0, col)
        + selectedTile
        + line.substring(col + 1)

    level[row] = line
	updateOutput()

})



function drawLevel() {

    for (let row = 0; row < level.length; row++) {

        for (let col = 0; col < level[row].length; col++) {

            const tile = level[row][col]

            let color = null

            if (tile === "=") color = "#82490d"
            if (tile === "-") color = "#46cf6f"
            if (tile === "*") color = "#62ffe0"
            if (tile === "^") color = "#ff5e00"
            if (tile === "C") color = "gold"
            if (tile === "?") color = "#777777"
			if (tile === "`") color = "#777777"
			if (tile === "O") color = "#435247"
if (tile === "@") color = "#3b1f1f"
if (tile === "B") color = "#42f57b"
if (tile === "I") color = "#9be7ff"
if (tile === "L") color = "#dff8ff"
if (tile === "X") color = "#5f6470"
if (tile === "#") color = "#2e3138"
if (tile === "%") color = "#3f4b52"
if (tile === "M") color = "#800b0b"
if (tile === ">") color = "#00e5ff"
if (tile === "<") color = "#fc0339"
if (tile === "F") color = "#a17852"
if (tile === "K") color = "#fc0339"
if (tile === "G") color = "#6afff8"
if (tile === "R") color = "#ffe27a"
if (tile === "+") color = "#ed5aeb"
if (tile === "T") color = "#4fd6ff"
if (tile === "Y") color = "#5c3d21"
if (tile === "!") color = "#5fd13b"
if (tile === "W") color = "#2f5a3b"
if (tile === "Q") color = "#555861"
if (tile === "V") color = "#3a8f58"
if (tile === "~") color = "#4d4949"
if (tile === "f") color = "#a19452"
if (tile === "A") color = "#9cd13b"
if (tile === "(") color = "#a1fa4d"

            if (color) {

                ctx.fillStyle = color

                ctx.fillRect(
    col * tileSize - camera.x,
    row * tileSize - camera.y,
    tileSize,
    tileSize
)

            }

            ctx.strokeStyle = "#333"

            ctx.strokeRect(
    col * tileSize - camera.x,
    row * tileSize - camera.y,
    tileSize,
    tileSize
)

        }

    }

}

function updateOutput() {

    output.value =
        "const level = [\n" +

        level.map(line => `"${line}"`).join(",\n")

        +

        "\n]"
		
		console.log(output.value)

}


function loop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
	
	moveCamera()

    drawLevel()

    requestAnimationFrame(loop)

}

loop()

function moveCamera() {

    if (keys["ArrowRight"]) {
        camera.x += 10
    }

    if (keys["ArrowLeft"]) {
        camera.x -= 10
    }

    if (keys["ArrowDown"]) {
        camera.y += 10
    }

    if (keys["ArrowUp"]) {
        camera.y -= 10
    }
	
	if (camera.x < 0) {
    camera.x = 0
}

if (camera.y < 0) {
    camera.y = 0
}

}
