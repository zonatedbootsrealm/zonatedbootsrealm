function HandleCloudCollision() {

    for (let i = 0; i < cloudBlock.length; i++) {

        let g = cloudBlock[i]

        if (touching(player, g)) {

            // only land if falling onto top
            if (
                player.oldY + player.height <= g.y &&
                player.velocityY > 0
            ) {

                player.y = g.y - player.height
                player.velocityY = 0
                player.grounded = true

            }

        }

    }

}

function HandlePlayerShrink() {

    let targetSize = keys["k"] ? 25 : 50

    if (player.width === targetSize) return

    let oldWidth = player.width
    let oldHeight = player.height

    // propose new size
    let newWidth = targetSize
    let newHeight = targetSize

    // center adjustment
    let newX = player.x + (oldWidth - newWidth) / 2
    let newY = player.y + (oldHeight - newHeight) / 2

    // TEMP test box (important part)
    let testPlayer = {
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight
    }

    // prevent shrinking INTO walls
    for (let b of allSolids) {
        if (touching(testPlayer, b)) {
            return // cancel shrink
        }
    }

    // safe → apply
    player.x = newX
    player.y = newY
    player.width = newWidth
    player.height = newHeight
}

function HandleCoyoteTime () {
	if (player.grounded) {
		player.coyoteTime = 0
		player.doubleJump = true
	} else if (player.grounded == false) {
		player.coyoteTime++
	}
	
}

function ApplyGravity() {
	player.velocityY += player.gravity
    player.y += player.velocityY
}

function HandleCoyoteChange () {
	if (player.grounded) {
		if (Math.abs(player.velocityX) * 2 > 9.9) {
			player.coyoteLimit = Math.abs(player.velocityX) * 3.5
		} else {
			player.coyoteLimit = 10
		}
	}
	
}

function PlayerSpeedCaps() {
	// SPEED CAPS

	if (player.speedPadTimer > 0) {

		player.speedPadTimer--
	
		player.maxSpeed = 40

	} else if (player.grounded == false) {

		player.maxSpeed = 11

	} else {

		player.maxSpeed = 8	

	}


	// APPLY CAPS

	if (player.velocityX > player.maxSpeed) {
		player.velocityX = player.maxSpeed
	}

	if (player.velocityX < -player.maxSpeed) {
		player.velocityX = -player.maxSpeed
	}
}

function PlayerFriction() {
	if (player.grounded) {

		// only slow down if no movement keys held
		if (!keys["a"] && !keys["d"]) {
			player.velocityX *= player.friction
		}

	} else {

		//player.velocityX *= 1.1

	}
}
