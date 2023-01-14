
class Pipe extends Component {

    static distance = 100
    static width = 20
    static height = myGameArea.canvas.height

    constructor(x, alignment) {

        let y
        let offset = Math.floor(Math.random() * 51) + 100

        if (alignment == "up") {
            y = - myGameArea.canvas.height + Pipe.distance + offset
        }
        else if (alignment == "down") {
            y = pipesUp[pipesUp.length - 1].y + myGameArea.canvas.height + Pipe.distance
        }

        super(x, y, Pipe.width, Pipe.height, "red")

    }
}
