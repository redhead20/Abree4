const button = document.getElementById("playButton")
const audioPlayer = document.getElementById("audioPlayer")
const statusText = document.getElementById("statusText")

const sayings = [

"Breaking news: My girlfriend has been declared illegally cute.",
"This is a random reminder that you are dating a very cool guy.",
"If you're reading this… you owe me a hug.",
"Hello. This is the boyfriend appreciation hotline. Thank you for dating Peter.",
"Alert: Your boyfriend misses you at dangerous levels.",
"If you press this button too many times, I might appear and steal a kiss.",
"Congratulations. You have unlocked a level-5 boyfriend message.",
"This message was brought to you by the 'I miss you' foundation.",
"You just pressed the button… which means you were thinking about me. I win.",

"Hey beautiful… yeah, I'm talking to you.",
"I wish I could see your smile right now.",
"If I were there right now I'd probably just hug you and not let go.",
"You're actually the prettiest girl I know.",
"I hope you know how attractive you are… because wow.",
"I'm pretty sure you stole my heart and forgot to give it back.",
"If I could teleport anywhere right now it would be next to you.",
"You have no idea how lucky I feel to have you.",
"Just hearing your voice makes my whole day better.",
"Yeah… I'm definitely the luckiest guy alive.",

"I just wanted you to know that I love you.",
"You make my life better just by being in it.",
"Every day I'm grateful that I have you.",
"You're one of the best things that's ever happened to me.",
"I hope you always remember how much you mean to me.",
"No matter what kind of day you're having, I'm always on your side.",
"I really can't imagine my life without you.",
"You make the ordinary parts of life feel special.",
"I love the way you make me feel.",
"You're my favorite person."

]

button.addEventListener("click", () => {

button.classList.add("choosing")

let shuffleCount = 0

const shuffle = setInterval(() => {

const randomSaying =
sayings[Math.floor(Math.random() * sayings.length)]

statusText.textContent = randomSaying

shuffleCount++

if(shuffleCount > 15){

clearInterval(shuffle)

button.classList.remove("choosing")

const randomIndex =
Math.floor(Math.random() * audioFiles.length)

audioPlayer.src = audioFiles[randomIndex]

audioPlayer.play()

spawnHearts()

}

},120)

})

function spawnHearts(){

for(let i=0;i<15;i++){

const heart = document.createElement("div")

heart.className = "heart"
heart.textContent = "❤️"

heart.style.left = Math.random()*100 + "vw"
heart.style.bottom = "-20px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),4000)

}

}