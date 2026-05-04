const coins = []

function DrawCoins () {
	for (let i = 0; i < coins.length; i++) {

        let c = coins[i]

        ctx.fillStyle = c.color

        ctx.fillRect(
            c.x - camera.x,
            c.y - camera.y,
            c.width,
            c.height
        )

    }
}

function CheckCoins () {
	for (let i = 0; i < coins.length; i++) {

    let c = coins[i]

    if (touching(player, c)) {

        coins.splice(i, 1)

    }

}
}
