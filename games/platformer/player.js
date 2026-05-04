const player = {

    x: 100,
    y: 100,
	
	oldX: 0,
	oldY: 0,

    width: 50,
    height: 50,

    speed: 0.3,
	velocityX: 0,
	friction: 0.85,
	maxSpeed: 25,

    gravity: 0.30,
    velocityY: 0,
    jumpstrength: 7.2,
	doublejumpstrength: 7,
	
	coyoteTime: 0,
	coyoteLimit: 15,

    grounded: false,
	doubleJump: false,
	
	speedPadTimer: 0,

    color: "#eaed2f"

}
const speedfall = document.getElementById("speedfall")
const groundhit = document.getElementById("groundhit")

let keys = {}


document.addEventListener("keydown", function(event) {

    keys[event.key] = true

})

document.addEventListener("keyup", function(event) {

    keys[event.key] = false

})


function DrawPlayer() {

    ctx.fillStyle = player.color

    ctx.fillRect(
        player.x - camera.x,
        player.y - camera.y,
        player.width,
        player.height
    )

}

function PlayerMovement() {
	    if (keys["d"] == true) {
        
		if (player.grounded) {
		player.velocityX = player.velocityX + player.speed
		} else if (player.grounded == false) {
			player.velocityX = player.velocityX + (player.speed / 2)
		}

    }

    if (keys["a"] == true) {

		if (player.grounded) {
			player.velocityX = player.velocityX - player.speed
		} else if (player.grounded == false) {
			player.velocityX = player.velocityX - (player.speed / 2)
		}
    }
	
	PlayerSpeedCaps()
	

	player.x += player.velocityX
	
	PlayerFriction()
	
	HandleCoyoteChange()
}

function HandleHorizontalCollisions(blocks) {

    for (let g of blocks) {

        if (!touching(player, g) || g.cloud || g.falling) continue

        let overlapLeft = (player.x + player.width) - g.x
        let overlapRight = (g.x + g.width) - player.x

        if (overlapLeft < overlapRight) {
            player.x = g.x - player.width
        } else {
            player.x = g.x + g.width
        }
		
		player.x = Math.round(player.x)

        player.velocityX = 0
    }
	
}

function HandleVerticalCollision (blocks) {
	player.grounded = false


for (let i = 0; i < blocks.length; i++) {
    let g = blocks[i]
	
    if (touching(player, g)) {
		
		if (g.falling === true && player.velocityY < 0) {
			continue
		}
		if (g.boost) {

			player.velocityX *= g.boost

			player.speedPadTimer = 20

		}
		
		//if (g.bounce) {
		//	player.velocityY = -g.bounce
		//	continue
		//}

		if (g.friction) {

			player.friction = g.friction

		} else {

			player.friction = 0.85

		}
		if (g.cloud) {
			if (player.oldY + player.height <= g.y && player.velocityY > 0) {
				FixVerticalCollision(g)
			} 
		} else {
			FixVerticalCollision(g)
		}
		
		player.y = Math.round(player.y)
		
		
    }
	
}
}

function FixVerticalCollision(g) {

    if (player.velocityY > 0) {

        player.y = g.y - player.height

        if (g.bounce) {

            player.velocityY = -g.bounce

        } else {

            player.velocityY = 0

        }

        player.grounded = true
		PlayerSounds(1)

    }

    else if (player.velocityY < 0) {

        player.y = g.y + g.height
        player.velocityY = 0

    }

}

function HandleJumping() {

    if (
        keys["w"] &&
        player.coyoteTime < player.coyoteLimit
    ) {

        player.velocityY = -player.jumpstrength
		player.velocityX *= 1.1
    }

    else if (
        keys["i"] &&
        player.doubleJump
    ) {

        player.velocityY = -player.doublejumpstrength
        player.doubleJump = false
		player.velocityX *= 1.35
    }

}

function PlayerSounds (cue) {
	if (player.velocityY < 16 && player.velocityY > 15 && cue != 1) {
		speedfall.currentTime = 0.3
		speedfall.play()
	}
	if (cue == 1) {
		if (!groundhit.ended) {
			console.log(groundhit.currentTime)
		} else {
			//stop falling audio and start hitting ground audio
		groundhit.currentTime = 0.2
		groundhit.play()
		speedfall.pause() 
		speedfall.currentTime = 0
		}
		
	}
	
}
