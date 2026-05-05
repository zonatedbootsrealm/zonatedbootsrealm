const currentWorld = [...stage1] //stage 1 for now
const level = [...currentWorld]

const camera = {
    x: 0,
    y: 0
}

function DrawBasicBlocks(array) {

    for (let i = 0; i < array.length; i++) {

        let b = array[i]

        ctx.fillStyle = b.color

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )
    }
}

//Test Stuff: 
//{ x: 123, y: 123, width: 123, height: 123, color: "#82490d" },
//{ x: 231, y: 388, width: 12, height: 23, color: "#82490d" },
//{ x: 321, y: 456, width: 321, height: 54, color: "#82490d" }
// ALL TERRAIN PHYSICAL RELATED THINGS GO HERE
const map = []
const moss = []
const fullmoss = []
const pits = []
const slate = []
const darkstone = []
const wetstone = []
const crystal = []
const lavarock = []
const lava = []

const shrubs = []
const deadplants = []
const fakewalls = []
const speedPad = []
const memoryBlock = []
const bounceBlock = []
const iceBlock = []
const fallingBlock = []
const cloudBlock = []
const geode = []
const gem = []
const ore = []
const glowMoss = []
const crackedStone = []
const spikePlant = []
const roots = []
const mushroom = []
const vines = []
const bambooBlocks = []
const trees1 = []
const caveGrass = []

const tileSize = 50





for (let row = 0; row < level.length; row++) {

	for (let letter = 0; letter < level[row].length; letter++) {

	const tile = level[row][letter]

	        if (tile === "=") {
	            map.push({
	                x: letter * tileSize,
	                y: row * tileSize,
	                width: tileSize,
	                height: tileSize,
	                color: "#82490d"
	            })
	        }
	
	        if (tile === "P") {
				let savedX = Number(localStorage.getItem("playerX"))
				let savedY = Number(localStorage.getItem("playerY"))
				if (!savedX) {
					player.x = letter * tileSize
	            	player.y = row * tileSize
				} else if (savedX) {
					player.x = savedX
					player.y = savedY
				}
	        }
			
			if (tile === "C") {

				coins.push({

					x: letter * tileSize + tileSize / 4,
					y: row * tileSize + tileSize / 4,

					width: tileSize / 2,
					height: tileSize / 2,

					color: "gold"

				})

			}
			
			if (tile === "H") {
				
				hut.x = letter * tileSize
	            hut.y = (row * tileSize) - 80 //-40 is for design wise so hut doesnt look like its sinking intot he ground
			}
			
			if (tile === "-") {
	            moss.push({
	                x: letter * tileSize,
	                y: row * tileSize,
	                width: tileSize,
	                height: tileSize,
					color: "#82490d",
	                color2: "#435247"
	            })
	        }
			
			if (tile === "O") {
				fullmoss.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#435247",
					color2: "#46cf6f"
				})
			}

			if (tile === "X") {
				slate.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#5f6470"
				})
			}

			if (tile === "~") {
				pits.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#4d4949",
					color2: "#736767"
				})
			}
			
			if (tile === "#") {
				darkstone.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#2e3138"
				})
			}
			
			if (tile === "%") {
				wetstone.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#3f4b52",
					shine: "#6e8891"
				})
			}
			
			if (tile === "*") {
				crystal.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#62ffe0",
					glow: "#c8fff6"
				})
			}
			
			if (tile === "+") {
				crystal.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#ed5aeb",
					glow: "#d9c8ff"
				})
			}
			
			if (tile === "@") {
				lavarock.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#3b1f1f",
					crack: "#ff5e00"
				})
			}
			
			if (tile === "^") {
				lava.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#ff5e00",
					color2: "#ffd000"
				})
			}
			
			if (tile === "s") {
				shrubs.push({
					x: letter * tileSize,
					y: row * tileSize + 20
				})
			}
			
			if (tile === "S") {
				deadplants.push({
					x: letter * tileSize,
					y: row * tileSize + 20
				})
			}
			
			if (tile === "?") {

				fakewalls.push({

					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,

					color: "#5f6470"
		
				})

			}
			
			if (tile === "`") {

				fakewalls.push({

					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize * 2,
					height: tileSize * 2,

					color: "#5f6470"
		
				})

			}
			


			if (tile === ">") {
				speedPad.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#00e5ff",
					color2: "#2fa0ad",
					boost: 1.05
				})
			}
			
			if (tile === "<") {
				speedPad.push({
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
					color: "#fc0339",
					color2: "#8f2571",
					boost: 1.1
				})
			}
			
			
			if (tile === "M") {

				memoryBlock.push({

					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,

					color: "#800b0b",
					color2: "#c263a7",
					
					revealDist: 150
		
				})

			}
			
			if (tile === "B") {

				bounceBlock.push({
	
					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,

					color: "#42f57b",
					color2: "#b0ffd1",
					color3: "#c8faac",
					bounce: 14

				})

			}
			
			if (tile === "I") {

				iceBlock.push({

					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,
	
					color: "#9be7ff",
					friction: 0.98

				})

			}
			
			if (tile === "F") {

				fallingBlock.push({

					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,

					color: "#a17852",

					timer: 0,
					timerLimit: 30,
					falling: false,
					velocityY: 0

				})

			}
			
			if (tile === "f") {

				fallingBlock.push({

					x: letter * tileSize,
					y: row * tileSize,
					width: tileSize,
					height: tileSize,

					color: "#a19452",

					timer: 0,
					timerLimit: 7,
					falling: false,
					velocityY: 0

				})

			}
			
			if (tile === "L") {

				cloudBlock.push({
	
				x: letter * tileSize,
				y: row * tileSize,
				width: tileSize,
				height: 12,

				color: "#dff8ff",
				
				cloud: true

				})

			}
			
			if (tile === "K") {

				geode.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: tileSize,
					height: tileSize,

					shell: "#4f4b57",
					shell2: "#3a3742",

					crystal: "#ff7de9",
					glow: "#ffd0fa"

				})

			}
			
			if (tile === "G") {

				gem.push({

					x: letter * tileSize,
					y: row * tileSize,
	
					width: tileSize,
					height: tileSize,

					rock: "#2e3138",

					crystal: "#6afff8",
					shine: "#d9fffd"

				})

			}
			
			if (tile === "R") {

				ore.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: tileSize,
					height: tileSize,

					rock: "#4b4f57",

					ore: "#d4af37",
					ore2: "#ffe27a"

				})

			}
			
			if (tile === "V") {

				vines.push({

					x: letter * tileSize + 22,
					y: row * tileSize,

					color: "#3a8f58",
					color2: "#72d68f",

					length: 50

				})

			}
			
			if (tile === "T") {

				mushroom.push({

					x: letter * tileSize,
					y: row * tileSize,

					stem: "#d8d0c8",

					cap: "#4fd6ff",
					glow: "#b8f4ff"

				})

			}
			
			if (tile === "Y") {

				roots.push({

					x: letter * tileSize,
					y: row * tileSize,

					color: "#5c3d21"

				})

			}
			
			if (tile === "!") {

				spikePlant.push({

					x: letter * tileSize,
					y: row * tileSize,

					color: "#5fd13b",
					tip: "#d5ff9a"

				})

			}
			
			if (tile === "Q") {

				crackedStone.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: tileSize,
					height: tileSize,

					base: "#555861",
					crack: "#2a2c33"

				})

			}
			
			if (tile === "W") {

				glowMoss.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: tileSize,
					height: tileSize,

					base: "#2f5a3b",
					glow: "#8dffb1"
	
				})

			}
			
			if (tile === "G") {

				gem.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: tileSize,
					height: tileSize,

					rock: "#2e3138",

					crystal: "#6afff8",
					shine: "#d9fffd"

				})

			}
			
			if (tile === "A") {

				bambooBlocks.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: tileSize,
					height: tileSize,

					color1: "#b6d171",

					color2: "#62963b",
					shine: "#e7faa7",
					
					extraMargin: 5

				})

			}
			
			if (tile === "J") {

				trees1.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: 180,
					height: 300,

					trunk: "#5e3f24",
					trunk2: "#7a5230",

					leaves: "#3f9142",
					leaves2: "#61b85f",
					
					leafSpacing: 75

				})

			}
			
			if (tile === "j") {

				trees1.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: 125,
					height: 275,

					trunk: "#5e3f24",
					trunk2: "#7a5230",

					leaves: "#3f9142",
					leaves2: "#61b85f",
					
					leafSpacing: 75

				})

			}
			
			if (tile === "(") {

				caveGrass.push({

					x: letter * tileSize,
					y: row * tileSize,

					width: tileSize,
					height: tileSize,

					color: "#a1fa4d",
					dirt: "#a3977c",
					
					stone: "#5f6470"

				})

			}

	}

}

const allSolids = [

    ...map,
    ...moss,
    ...fullmoss,
    ...pits,
    ...slate,

    ...darkstone,
    ...wetstone,
    ...crystal,
    ...lavarock,
    ...lava,
	...memoryBlock,
	...bounceBlock,
	...fallingBlock,
	...cloudBlock,
	...iceBlock,
	...speedPad,
	...geode,
	...gem,
	...ore,
	...crackedStone,
	...glowMoss,
	...caveGrass

]
