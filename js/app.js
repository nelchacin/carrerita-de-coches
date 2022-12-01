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
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.dimensionsGame()
        this.setEventListeners()
        this.drawCar()
        this.begging()
        this.drawImageRoad()

    },
    drawImageRoad(){
        this.imageInstance=new Image()
        this.imageInstance.src= "./images/road.png"
    },

    dimensionsGame(){
        this.gameSize={
            w: 500,
            h: 700,
        }
        this.canvasNode.setAttribute("width",this.gameSize.w)
        this.canvasNode.setAttribute("height",this.gameSize.h)
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
    },
    drawCar(){
        this.car =new Car(this.ctx,216,575,65,100)
    },
    drawAll(){
        this.ctx.drawImage(this.imageInstance, 0, 0, this.gameSize.w, this.gameSize.h)
        this.car.draw()
        if (this.framesIndex % 15 === 0) this.createObstacle() 
    },

    clear(){
        this.ctx.clearRect(0,0,this.gameSize.w, this.gameSize.h)
    },

    begging(){
        setInterval(()=>{
            this.clear()
            this.drawAll()
            this.framesIndex++
        }, 30)
    }
}
