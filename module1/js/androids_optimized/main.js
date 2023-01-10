class Android{

    constructor(domReference, armsUp, animationDuration){
        this.domReference = domReference
        this.armsUp = armsUp,
        this.animationDuration = animationDuration
        this.domReference.style.animationDuration = `${this.animationDuration}s`

        setInterval(() => {

            if (this.armsUp)
            {
                this.armsUp = false
                this.domReference.style.backgroundImage = `url(${path1})`
            }
            else
            {
                this.armsUp = true
                this.domReference.style.backgroundImage = `url(${path2})`
            }
        
            this.domReference.classList.toggle('android-up')
            
        }, this.animationDuration * 1000 / 2)
    }
}

let androids = [
    new Android(document.getElementsByClassName("android")[0], false, 6),
    new Android(document.getElementsByClassName("android")[1], false, 2.5),
    new Android(document.getElementsByClassName("android")[2], false, 3.5),
    new Android(document.getElementsByClassName("android")[3], false, 8),
]

const path1 = './img/android_1.png';
const path2 = './img/android_2.png';
