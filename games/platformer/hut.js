const hut = {

    x: 0,
    y: 0,

    width: 150,
    height: 125,
	
	color:"#132d69",
	alivecolor:"#a38a6d", //looks grey but will replace with some yellow too for candle/window light
	
    rescued: false

}
//#152409 for dead grass and #52ab0e for good grass
const grass = {

    x: 0,
    y: 0,

    width: 260,
    height: 25,
	
	deadcolor:"#152409",
	alivecolor: "#52ab0e"

}

const roof = {

    x: 0,
    y: 0,

    width: 200,
    height: 35,
	
	deadcolor:"#132d69",
	alivecolor: "#967145"

}


const window1 = {

    x: 0,
    y: 0,

    width: 50,
    height: 100,
	
	deadcolor:"#4a4a46",
	alivecolor: "#ffff87"

}

const window2 = {

    x: 0,
    y: 0,

    width: 30,
    height: 40,
	
	deadcolor:"#4a4a46",
	alivecolor: "#ffff87"

}

function DrawHut() {
	if (hut.rescued) {
		ctx.fillStyle = hut.alivecolor
	} else {
		ctx.fillStyle = hut.color
	}
    

    ctx.fillRect(
        hut.x - camera.x,
        hut.y - camera.y,
        hut.width,
        hut.height
    )
	
	if (hut.rescued) {
		ctx.fillStyle = grass.alivecolor
	} else {
		ctx.fillStyle = grass.deadcolor
	}
	
	    ctx.fillRect(
    hut.x - 25 - camera.x,
    hut.y + hut.height - camera.y,
    grass.width,
    grass.height
	)
	
	if (hut.rescued) {
		ctx.fillStyle = roof.alivecolor
	} else {
		ctx.fillStyle = roof.deadcolor
	}
	
	MakeRoofTriangle()
DrawHutDetails()
}

function DrawHutDetails() {
		if (hut.rescued) {
		ctx.fillStyle = window1.alivecolor
	} else {
		ctx.fillStyle = window1.deadcolor
	}
	
	    ctx.fillRect(
    hut.x + (hut.width * 0.2) - camera.x,
    (hut.y + hut.height - camera.y) - 100,
    window1.width,
    window1.height
)
		if (hut.rescued) {
		ctx.fillStyle = window2.alivecolor
	} else {
		ctx.fillStyle = window2.deadcolor
	}
	
	    ctx.fillRect(
    hut.x + (hut.width * 0.7) - camera.x,
    (hut.y + hut.height - camera.y) - 100,
    window2.width,
    window2.height
)
}

function CheckHut() {
	if (touching(player, hut)) {
		//begin alive-ening stuff
		hut.rescued = true
		
	}
}

function MakeRoofTriangle () {
	ctx.beginPath()

ctx.moveTo(
    hut.x + hut.width / 2 - camera.x,
    hut.y - 60 - camera.y
)

ctx.lineTo(
    hut.x - 25 - camera.x,
    hut.y + 10 - camera.y
)

ctx.lineTo(
    hut.x + hut.width + 25 - camera.x,
    hut.y + 10 - camera.y
)

ctx.closePath()

ctx.fill()
}
