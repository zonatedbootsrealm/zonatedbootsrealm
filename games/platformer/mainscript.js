const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")


canvas.width = window.innerWidth
canvas.height = window.innerHeight

function touching(a, b) {

    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    )

}





function DrawEverything() {
	DrawHut()
    
    DrawMoss()
    DrawFullMoss()
    
	DrawBasicBlocks(map)
	DrawBasicBlocks(slate)
	DrawBasicBlocks(darkstone)
	
    
    DrawWetStone()
    DrawCrystal()

    DrawLavaRock()
    DrawLava()

    
    DrawShrubs()
    DrawDeadPlants()

    DrawCoins()
    
    DrawPlayer()
	DrawFakeWalls()
	DrawMemoryBlock()
	DrawSpeedPad()
	DrawBounceBlock()
	DrawCloudBlocks()
	DrawFallingBlocks()
	DrawIceBlock()
	DrawGeode()
	DrawGem()
	DrawOre()
	DrawRoots()
	DrawVines()
	DrawMushroom()
	DrawSpikePlant()
	DrawCrackedStone()
	DrawGlowMoss()
	DrawPits()
	DrawBambooBlock()
	DrawTrees1()
	DrawCaveGrass()
	DrawSand()
	DrawSoftSand()
	DrawStoneA()
	DrawStoneB()
	DrawStoneC()
}

function UpdateEverything() {

    PlayerMovement()
	
	PlayerSounds()

    HandleJumping()
	
	HandlePlayerShrink()

    HandleHorizontalCollisions(allSolids)
	
	//HandleCloudCollision()

    ApplyGravity()

    HandleCoyoteTime()

    HandleVerticalCollision(allSolids)

    CheckCoins()

    CheckHut()
	
	UpdateFallingBlocks()

}


function gameLoop() {

    // clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)


	player.oldX = player.x
	player.oldY = player.y
	
	
	camera.x += ((player.x - camera.x) - canvas.width / 2) * 0.1
	camera.y += ((player.y - camera.y) - canvas.height / 2) * 0.1
	
	
	// update  E V E R Y T H I N G
	UpdateEverything()
	
	// draw  E V E R Y T H I N G
	DrawEverything()
	


	ctx.fillStyle = "white"
	ctx.font = "30px monospace"

	ctx.fillText(
		"X Velocity: " + player.velocityX.toFixed(2),
		20,
		40
	)
	
	ctx.fillText(
		"Y Velocity: " + player.velocityY.toFixed(2),
		20,
		65
	)

    requestAnimationFrame(gameLoop)
}

let savedCamX = Number(localStorage.getItem("CameraX"))
let savedCamY = Number(localStorage.getItem("CameraY"))
if (savedCamX) {
	camera.x = savedCamX
	camera.y = savedCamY
}

gameLoop()
