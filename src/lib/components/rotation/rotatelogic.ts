export default function logic(image: HTMLImageElement, next: boolean){
    
    const rect = image.getBoundingClientRect()
    const anchorX = rect.left + rect.width / 2
    const anchorY = rect.top + rect.height / 2

    function trackMouse(e: MouseEvent){
        follwo(e.clientX, e.clientY)
    }
    function follwo(x: number, y: number){
        const lol = angle(x, y, anchorX, anchorY, next)
        image.style.transform = `rotate(${lol}deg)`
    }
    function angle (cx: number, cy: number, ax: number, ay: number, next: boolean){
        const dx = cx - ax;
        const dy = cy - ay;

        let radians: number;
        if (next){
            radians = Math.atan2(dy, dx) + Math.PI + 2.2
        }else{
            radians = Math.atan2(dy, dx)
        }
        const degrees = radians * 180 / Math.PI
        return degrees;
        
    }
    document.addEventListener('mousemove',trackMouse)
}

/* 
 9-8-2023. Today I realized that I need to work on myself before attempting to, y'know, get a girlfriend. Ask yourself this question
 why the fuck will others choose me? I thought about it in the past but I was blinded by my obsession towards that person. You need
 a good enough of a reason. This is why you have to fucking improve on shit. Improving your physical appeareance is key as talking
 is not your cup of tea really. But do learn how to talk to people. If the 3 years of being without any friends has taught me
 anything, it's that if you have something to say, say it. If you have nothing, that is ok, don't say anything. But you have to 
 be geniunely interested in the other person. If you aren't, why the fuck are you trying to talk to them in the first place? I've
 watched too much tutorials on how to talk to people when I didn't realize that talking is already hardwired into our brains. It's 
 like a spider making a web. It just knows how to do it. Talking is the same thing. If you want to talk to another person about
 something, or something that you always wanted to say, just do it. Just do it. When you talk, you will realize that it isn't this
 bad. So the takeaway here is: To be geniunely interested in the other person, listen, smile, that's pretty much it really. Talking
 isn't really that much of an issue because we are all human! I have so much to say. Even here I'm writing hundred word essays while
 taking a break from writing code. You just have to say words, but to other people. Is it that challenging? Is looking at another 
 person while speaking words to them really worth your horrible anxiety before? NO. None of this is worth it. You just talk to the 
 other person. We are human, they are human. We talk. People actually want to talk to you. Think of this, when a person starts a 
 conversation with you, are you happy or annoyed? Of course you will feel some bits of happiness. And this effect is even magnified
 for an extraverted people because their happiness is directly influenced by the social. Fuck I wrote too much here, gotta get coding. Peace.
*/
