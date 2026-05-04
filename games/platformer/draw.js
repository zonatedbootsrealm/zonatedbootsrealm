function DrawPits () {
	for (let i = 0; i<pits.length; i++) {
		ctx.fillStyle = pits[i].color
		ctx.fillRect(
			pits[i].x - camera.x,
			pits[i].y - camera.y,
			pits[i].width,
			pits[i].height
		)
		
		//my attempt to make "sludge wave" pattern
		
		ctx.strokeStyle = pits[i].color2
		ctx.lineWidth = 5
		
		ctx.save()

		ctx.lineJoin = "round"
		ctx.lineCap = "round"
		
		ctx.beginPath()
		
		ctx.moveTo((pits[i].x) - camera.x, (pits[i].y + (pits[i].width / 2) - 5) - camera.y)
        ctx.lineTo((pits[i].x + (pits[i].width / 4)) - camera.x, (pits[i].y + (pits[i].width / 4) - 5) - camera.y)
        ctx.lineTo((pits[i].x + ((pits[i].width / 4) * 2)) - camera.x, (pits[i].y + ((pits[i].width / 4) * 2) - 5) - camera.y)
		ctx.lineTo((pits[i].x + ((pits[i].width / 4) * 3)) - camera.x, (pits[i].y + (pits[i].width / 4) - 5) - camera.y)
		ctx.lineTo((pits[i].x + pits[i].width) - camera.x, (pits[i].y + ((pits[i].width / 4) * 2) - 5) - camera.y)

        ctx.stroke()
		
		ctx.beginPath()
		
		ctx.moveTo((pits[i].x) - camera.x, (pits[i].y + (pits[i].width / 2) + 15) - camera.y)
        ctx.lineTo((pits[i].x + (pits[i].width / 4)) - camera.x, (pits[i].y + (pits[i].width / 4) + 15) - camera.y)
        ctx.lineTo((pits[i].x + ((pits[i].width / 4) * 2)) - camera.x, (pits[i].y + ((pits[i].width / 4) * 2) + 15) - camera.y)
		ctx.lineTo((pits[i].x + ((pits[i].width / 4) * 3)) - camera.x, (pits[i].y + (pits[i].width / 4) + 15) - camera.y)
		ctx.lineTo((pits[i].x + pits[i].width) - camera.x, (pits[i].y + ((pits[i].width / 4) * 2) + 15) - camera.y)

        ctx.stroke()
		
		ctx.restore()
		ctx.lineWidth = 1
	}
}

function DrawMoss () {
	for (let i = 0; i < moss.length; i++) {

        ctx.fillStyle = moss[i].color2

        ctx.fillRect(
            moss[i].x - camera.x,
            moss[i].y - camera.y,
            moss[i].width,
            moss[i].height / 2
        )
		
		ctx.fillStyle = moss[i].color

        ctx.fillRect(
    moss[i].x - camera.x,
    moss[i].y + moss[i].height / 2 - camera.y,
    moss[i].width,
    moss[i].height / 2
)

    }
}

function DrawFullMoss () {
    for (let i = 0; i < fullmoss.length; i++) {

        // top grass
        ctx.fillStyle = fullmoss[i].color2

        ctx.fillRect(
            fullmoss[i].x - camera.x,
            fullmoss[i].y - camera.y,
            fullmoss[i].width,
            fullmoss[i].height / 2
        )

        // bottom dirt
        ctx.fillStyle = fullmoss[i].color

        ctx.fillRect(
            fullmoss[i].x - camera.x,
            fullmoss[i].y + fullmoss[i].height / 2 - camera.y,
            fullmoss[i].width,
            fullmoss[i].height / 2
        )

    }
}


function DrawWetStone() {
    for (let i = 0; i < wetstone.length; i++) {

        let b = wetstone[i]

        ctx.fillStyle = b.color

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )

        // shiny strip
        ctx.fillStyle = b.shine

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            8
        )
    }
}

function DrawCrystal() {
    for (let i = 0; i < crystal.length; i++) {

        let b = crystal[i]

        ctx.fillStyle = b.color

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )

        // diamond shine
        ctx.fillStyle = b.glow

        ctx.fillRect(
            b.x + 12 - camera.x,
            b.y + 12 - camera.y,
            12,
            12
        )
    }
}

function DrawLavaRock() {
    for (let i = 0; i < lavarock.length; i++) {

        let b = lavarock[i]

        ctx.fillStyle = b.color

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )

        // lava cracks
        ctx.fillStyle = b.crack

        ctx.fillRect(
            b.x + 8 - camera.x,
            b.y + 10 - camera.y,
            5,
            30
        )

        ctx.fillRect(
            b.x + 28 - camera.x,
            b.y + 5 - camera.y,
            4,
            40
        )
    }
}

function DrawLava() {
    for (let i = 0; i < lava.length; i++) {

        let b = lava[i]

        ctx.fillStyle = b.color

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )

        ctx.fillStyle = b.color2

        ctx.fillRect(
            b.x - camera.x,
            b.y + 10 - camera.y,
            b.width,
            10
        )
    }
}

function DrawShrubs() {
    for (let i = 0; i < shrubs.length; i++) {

        let s = shrubs[i]

        ctx.fillStyle = "#3c8f3f"

        ctx.beginPath()
        ctx.arc(
    s.x - camera.x + -15,
    s.y - camera.y + 20,
    15,
    0,
    Math.PI * 2
)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(
    s.x - camera.x + 0,
    s.y - camera.y + 20,
    15,
    0,
    Math.PI * 2
)

ctx.arc(
    s.x - camera.x + 15,
    s.y - camera.y + 20,
    15,
    0,
    Math.PI * 2
)
        ctx.fill()
    }
}

function DrawDeadPlants() {
    for (let i = 0; i < deadplants.length; i++) {

        let d = deadplants[i]
		let drawY = -40

        ctx.strokeStyle = "#7f725c"

        ctx.beginPath()

        ctx.moveTo(
            d.x - camera.x,
            d.y + drawY - camera.y
        )

        ctx.lineTo(
            d.x - camera.x,
            d.y - 25 + drawY - camera.y
        )

        ctx.lineTo(
            d.x - 10 - camera.x,
            d.y - 15 + drawY - camera.y
        )

        ctx.moveTo(
            d.x - camera.x,
            d.y - 18 + drawY - camera.y
        )

        ctx.lineTo(
            d.x + 10 - camera.x,
            d.y - 30 + drawY - camera.y
        )

        ctx.stroke()
    }
}

function DrawFakeWalls() {

    for (let i = 0; i < fakewalls.length; i++) {

        let b = fakewalls[i]

        let distanceX = player.x - b.x
        let distanceY = player.y - b.y

        let distance = Math.sqrt(
            distanceX * distanceX +
            distanceY * distanceY
        )

        ctx.globalAlpha = Math.min(distance / 120, 1)

        ctx.fillStyle = b.color

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )

        ctx.globalAlpha = 1
    }
}

function DrawMemoryBlock() {
    for (let b of memoryBlock) {

        let dx = player.x - b.x
        let dy = player.y - b.y
        let dist = Math.sqrt(dx*dx + dy*dy)

        if (dist < b.revealDist) {
            ctx.globalAlpha = 1
        } else {
            ctx.globalAlpha = 0.05
        }

        ctx.fillStyle = b.color
        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )

        ctx.globalAlpha = 1
    }
}

function DrawSpeedPad() {
    for (let i = 0; i < speedPad.length; i++) {

        let b = speedPad[i]

        ctx.fillStyle = b.color

        ctx.fillRect(
            b.x - camera.x,
            b.y - camera.y,
            b.width,
            b.height
        )

        ctx.fillStyle = b.color2

        ctx.fillRect(
            b.x - camera.x,
            b.y + 10 - camera.y,
            b.width,
            10
        )

        ctx.fillRect(
            b.x - camera.x,
            b.y + 20 - camera.y,
            b.width,
            10
        )
		
		ctx.fillRect(
            b.x - camera.x,
            b.y + 30 - camera.y,
            b.width,
            10
        )
		
		ctx.fillRect(
            b.x - camera.x,
            b.y + 40 - camera.y,
            b.width,
            10
        )
		
		
		
    }
}

function DrawBounceBlock() {

	for (let i = 0; i < bounceBlock.length; i++) {

		let b = bounceBlock[i]

		ctx.fillStyle = b.color

		ctx.fillRect(
			b.x - camera.x,
			b.y - camera.y,
			b.width,
			b.height
		)

		ctx.fillStyle = b.color2

		ctx.fillRect(
			b.x - camera.x,
			b.y + 15 - camera.y,
			b.width,
			10
		)
		
		ctx.fillStyle = b.color3
		

        ctx.beginPath()
		
        ctx.arc(
			b.x - camera.x + (b.width / 2),
			b.y - camera.y + 25,
			15,
			0,
			Math.PI * 2
		)
		
		ctx.fill()

	}

}

function DrawIceBlock() {

	for (let i = 0; i < iceBlock.length; i++) {

		let b = iceBlock[i]

		ctx.fillStyle = b.color

		ctx.fillRect(
			b.x - camera.x,
			b.y - camera.y,
			b.width,
			b.height
		)

		ctx.fillStyle = "white"

		ctx.fillRect(
			b.x + 5 - camera.x,
			b.y + 5 - camera.y,
			15,
			5
		)

	}

}

function UpdateFallingBlocks() {

    for (let b of fallingBlock) {

        // detect standing on top
        let standingOnTop = (
            player.x + player.width > b.x &&
            player.x < b.x + b.width &&
            player.oldY + player.height <= b.y + 5 &&
            player.y + player.height >= b.y
        )

        if (standingOnTop) {

            b.timer++

            // carry player downward
            if (b.falling) {
                player.y = b.y - player.height
            }

        }

        if (b.timer > b.timerLimit) {
            b.falling = true
        }

        if (b.falling) {

            b.velocityY += 0.3
            b.y += b.velocityY

        }

    }

}

function DrawFallingBlocks() {

	DrawBasicBlocks(fallingBlock)

}

function DrawCloudBlocks() {

	DrawBasicBlocks(cloudBlock)

}

function DrawGeode() {

    for (let g of geode) {

        // outer rock
        ctx.fillStyle = g.shell

        ctx.fillRect(
            g.x - camera.x,
            g.y - camera.y,
            g.width,
            g.height
        )

        // darker edges
        ctx.fillStyle = g.shell2

        ctx.fillRect(
            g.x - camera.x,
            g.y - camera.y,
            8,
            g.height
        )

        // crystal center
        ctx.fillStyle = g.crystal

        ctx.beginPath()

        ctx.arc(
            g.x + 25 - camera.x,
            g.y + 25 - camera.y,
            14,
            0,
            Math.PI * 2
        )

        ctx.fill()

        // inner glow
        ctx.fillStyle = g.glow

        ctx.fillRect(
            g.x + 20 - camera.x,
            g.y + 20 - camera.y,
            8,
            8
        )

    }

}

function DrawGem() {

    for (let g of gem) {

        // rock base
        ctx.fillStyle = g.rock

        ctx.fillRect(
            g.x - camera.x,
            g.y - camera.y,
            g.width,
            g.height
        )

        // gem chunk
        ctx.fillStyle = g.crystal

        ctx.beginPath()

        ctx.moveTo(g.x + 25 - camera.x, g.y + 10 - camera.y)
        ctx.lineTo(g.x + 38 - camera.x, g.y + 25 - camera.y)
        ctx.lineTo(g.x + 25 - camera.x, g.y + 40 - camera.y)
        ctx.lineTo(g.x + 12 - camera.x, g.y + 25 - camera.y)

        ctx.fill()

        // shine
        ctx.fillStyle = g.shine

        ctx.fillRect(
            g.x + 22 - camera.x,
            g.y + 16 - camera.y,
            5,
            5
        )

    }

}

function DrawOre() {

    for (let o of ore) {

        // base rock
        ctx.fillStyle = o.rock

        ctx.fillRect(
            o.x - camera.x,
            o.y - camera.y,
            o.width,
            o.height
        )

        // ore blobs
        ctx.fillStyle = o.ore

        ctx.fillRect(
            o.x + 8 - camera.x,
            o.y + 10 - camera.y,
            10,
            10
        )

        ctx.fillRect(
            o.x + 28 - camera.x,
            o.y + 24 - camera.y,
            12,
            12
        )

        // highlights
        ctx.fillStyle = o.ore2

        ctx.fillRect(
            o.x + 10 - camera.x,
            o.y + 12 - camera.y,
            4,
            4
        )

        ctx.fillRect(
            o.x + 31 - camera.x,
            o.y + 27 - camera.y,
            4,
            4
        )

    }

}

function DrawVines() {

    for (let v of vines) {

        ctx.strokeStyle = v.color
        ctx.lineWidth = 4

        ctx.beginPath()

        ctx.moveTo(
            v.x - camera.x,
            v.y - camera.y
        )

        ctx.lineTo(
            v.x - camera.x,
            v.y + v.length - camera.y
        )

        ctx.stroke()

        // leaves
        ctx.fillStyle = v.color2

        ctx.beginPath()

        ctx.arc(
            v.x - 5 - camera.x,
            v.y + 15 - camera.y,
            5,
            0,
            Math.PI * 2
        )

        ctx.arc(
            v.x + 5 - camera.x,
            v.y + 28 - camera.y,
            5,
            0,
            Math.PI * 2
        )

        ctx.fill()

    }

}

function DrawMushroom() {

    for (let m of mushroom) {

        // stem
        ctx.fillStyle = m.stem

        ctx.fillRect(
            m.x + 20 - camera.x,
            m.y + 18 - camera.y,
            10,
            25
        )

        // cap
        ctx.fillStyle = m.cap

        ctx.beginPath()

        ctx.arc(
            m.x + 25 - camera.x,
            m.y + 18 - camera.y,
            18,
            Math.PI,
            0
        )

        ctx.fill()

        // glow spot
        ctx.fillStyle = m.glow

        ctx.fillRect(
            m.x + 18 - camera.x,
            m.y + 10 - camera.y,
            6,
            6
        )

    }

}

function DrawRoots() {

    for (let r of roots) {

        ctx.strokeStyle = r.color
        ctx.lineWidth = 3

        ctx.beginPath()

        ctx.moveTo(
            r.x + 10 - camera.x,
            r.y - camera.y
        )

        ctx.lineTo(
            r.x + 18 - camera.x,
            r.y + 35 - camera.y
        )

        ctx.lineTo(
            r.x + 5 - camera.x,
            r.y + 50 - camera.y
        )

        ctx.moveTo(
            r.x + 35 - camera.x,
            r.y - camera.y
        )

        ctx.lineTo(
            r.x + 28 - camera.x,
            r.y + 30 - camera.y
        )

        ctx.stroke()

    }

}

function DrawSpikePlant() {

    for (let s of spikePlant) {

        ctx.fillStyle = s.color

        ctx.beginPath()

        ctx.moveTo(s.x + 5 - camera.x, s.y + 50 - camera.y)
        ctx.lineTo(s.x + 15 - camera.x, s.y + 10 - camera.y)
        ctx.lineTo(s.x + 25 - camera.x, s.y + 50 - camera.y)

        ctx.moveTo(s.x + 20 - camera.x, s.y + 50 - camera.y)
        ctx.lineTo(s.x + 30 - camera.x, s.y + 5 - camera.y)
        ctx.lineTo(s.x + 40 - camera.x, s.y + 50 - camera.y)

        ctx.fill()

        ctx.fillStyle = s.tip

        ctx.fillRect(
            s.x + 28 - camera.x,
            s.y + 5 - camera.y,
            3,
            6
        )

    }

}

function DrawCrackedStone() {

    for (let c of crackedStone) {

        ctx.fillStyle = c.base

        ctx.fillRect(
            c.x - camera.x,
            c.y - camera.y,
            c.width,
            c.height
        )

        ctx.strokeStyle = c.crack

        ctx.beginPath()

        ctx.moveTo(c.x + 10 - camera.x, c.y + 5 - camera.y)
        ctx.lineTo(c.x + 30 - camera.x, c.y + 20 - camera.y)
        ctx.lineTo(c.x + 18 - camera.x, c.y + 45 - camera.y)

        ctx.stroke()

    }

}

function DrawGlowMoss() {

    for (let g of glowMoss) {

        ctx.fillStyle = g.base

        ctx.fillRect(
            g.x - camera.x,
            g.y - camera.y,
            g.width,
            g.height
        )

        ctx.fillStyle = g.glow

        ctx.fillRect(
            g.x - camera.x,
            g.y - camera.y,
            g.width,
            12
        )

    }

}

function DrawBambooBlock() {
	for (let b of bambooBlocks) {
		ctx.fillStyle = b.color1
		
		ctx.fillRect(
			b.x - camera.x,
			b.y - camera.y,
			b.width,
			b.height
		)
		
		ctx.fillStyle = b.shine
		
		ctx.fillRect(
			(b.x - camera.x),
			(b.y - camera.y),
			b.width,
			b.height - (b.height * 0.8)
		)
		
		//ctx.fillRect(
		//	(b.x - camera.x),
		//	(b.y - camera.y) + (b.height / 2),
		//	b.width,
		//	b.height - (b.height * 0.8)
		//)
		
		ctx.fillStyle = b.color2
		
		ctx.fillRect(
			(b.x - camera.x) + ((b.width / 5)),
			(b.y - camera.y),
			((b.width / 5)),
			b.height
		)
		
		
		
		ctx.fillRect(
			(b.x - camera.x) + ((b.width / 5) * 3),
			(b.y - camera.y),
			((b.width / 5)),
			b.height
		)
		
		ctx.fillRect(
			(b.x - camera.x),
			(b.y - camera.y) + (b.height - (b.height * 0.1)),
			b.width,
			b.height - (b.height * 0.9)
		)
	}
}

function DrawTrees1 () {
	for (let t of trees1) {
		
		ctx.fillStyle = t.trunk2
		
		ctx.fillRect(
		t.x - camera.x + (t.width / 4),
		((t.y - camera.y) - t.height + tileSize) + ((t.height / 4)),
		t.width / 2,
		(t.height / 4) * 3
		)
		
		ctx.fillStyle = t.trunk
		
		ctx.fillRect(
		t.x - camera.x,
		(t.y - camera.y) + tileSize -t.width / 2,
		t.width,
		t.height / 4
		)
		
		ctx.fillStyle = t.leaves
		
		ctx.beginPath();
		
		ctx.moveTo(t.x - camera.x + (t.width / 2), (t.y - camera.y) - t.height);
		ctx.lineTo(t.x - camera.x + (t.width / 2), (t.y - camera.y) - t.height);
		ctx.lineTo(t.x - camera.x + (t.width / 2) + 100, (t.y - camera.y) - t.height / 2);
		ctx.lineTo(t.x - camera.x + (t.width / 2) - 100, (t.y - camera.y) - t.height / 2);
		
		ctx.closePath();
		
		ctx.fill();
		
		ctx.beginPath();
		
		ctx.moveTo(t.leafSpacing + t.x - camera.x + (t.width / 2), t.leafSpacing + (t.y - camera.y) - t.height);
		ctx.lineTo(t.leafSpacing + t.x - camera.x + (t.width / 2), t.leafSpacing + (t.y - camera.y) - t.height);
		ctx.lineTo(t.leafSpacing + t.x - camera.x + (t.width / 2) + 100, t.leafSpacing + (t.y - camera.y) - t.height / 2);
		ctx.lineTo(t.leafSpacing + t.x - camera.x + (t.width / 2) - 100, t.leafSpacing + (t.y - camera.y) - t.height / 2);
		
		ctx.closePath();
		
		ctx.fill();
		
		
		ctx.beginPath();
		
		ctx.moveTo(-t.leafSpacing + t.x - camera.x + (t.width / 2), t.leafSpacing + (t.y - camera.y) - t.height);
		ctx.lineTo(-t.leafSpacing + t.x - camera.x + (t.width / 2), t.leafSpacing + (t.y - camera.y) - t.height);
		ctx.lineTo(-t.leafSpacing + t.x - camera.x + (t.width / 2) + 100, t.leafSpacing + (t.y - camera.y) - t.height / 2);
		ctx.lineTo(-t.leafSpacing + t.x - camera.x + (t.width / 2) - 100, t.leafSpacing + (t.y - camera.y) - t.height / 2);
		
		ctx.closePath();
		
		ctx.fill();
		
		ctx.fillStyle = t.leaves2
		
		ctx.beginPath();
		
		ctx.moveTo(t.x - camera.x + (t.width / 2), t.leafSpacing + (t.y - camera.y) - t.height);
		ctx.lineTo(t.x - camera.x + (t.width / 2), t.leafSpacing + (t.y - camera.y) - t.height);
		ctx.lineTo(t.x - camera.x + (t.width / 2) + 100, t.leafSpacing + (t.y - camera.y) - t.height / 2);
		ctx.lineTo(t.x - camera.x + (t.width / 2) - 100, t.leafSpacing + (t.y - camera.y) - t.height / 2);
		
		ctx.closePath();
		
		ctx.fill();
		
	}
}

function DrawCaveGrass () {
	for (let c of caveGrass) {
		
		ctx.fillStyle = c.stone
		
		ctx.fillRect(
		c.x - camera.x,
		c.y - camera.y,
		c.width,
		c.height
		)
		
		ctx.fillStyle = c.dirt
		
		ctx.fillRect(
		c.x - camera.x,
		c.y - camera.y,
		c.width,
		(c.height / 3) * 2
		)
		
		ctx.fillStyle = c.color
		
		ctx.fillRect(
		c.x - camera.x,
		c.y - camera.y,
		c.width,
		c.height / 3
		)
		
	}
}
