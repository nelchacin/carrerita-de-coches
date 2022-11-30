const carRaceApp = {
    name: 'Car Race',
    description: 'A Car Race',
    version: '1.0.0',
    author: 'Nelson Chacin',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    car:undefined,
    framesIndex:0,


    startGame(canvasID) {
        this.canvasNode = document.getElementById('canvas')
        console.log('EL CONTEXTO:', this.ctx)
        this.setEventListeners()
        this.createBall()

    },
    createBall() {
        this.car = new Car(this.ctx, 300, 300, 100, 100)
    },
    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event
            if (key === 'ArrowLeft') {
                this.Car.moveLeft()
            }
            if (key === 'ArrowRight') {
                this.Car.moveRight()
            }
        }
    }
}
