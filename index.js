console.log("Welcome to spotify!");

// Inititalize the variables
let songIndex = 0; // nitally kaun sa song play horaaha hai
let audioElement = new Audio("Songs_JagjitJi/1.mp3");
let masterPlay = document.getElementById('masterPlay')
let masterSongName = document.getElementById('masterSongName')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName: "Hoshwalo ko khabar kya", filepath:"Songs/JagjitJi/1.mp3", coverPath: "Cover/1.jpeg"},
    {songName: "Pyar ka pehla khat likhne me", filepath:"Songs/JagjitJi/2.mp3", coverPath: "Cover/2.jpeg"},
    {songName: "Hotho se choolo mera geet amar kardo", filepath:"Songs/JagjitJi/3.mp3", coverPath: "Cover/3.jpeg"},
    {songName: "Koi fariyaad", filepath:"Songs/JagjitJi/4.mp3", coverPath: "Cover/4.jpeg"},
    {songName: "Tum ko dekha to ye khayal aaya!", filepath:"Songs/JagjitJi/5.mp3", coverPath: "Cover/5.jpeg"},
    {songName: "Tum itna jo muskura rahe ho!", filepath:"Songs/JagjitJi/6.mp3", coverPath: "Cover/6.jpeg"},
    {songName: "Chitthi na koi sandes", filepath:"Songs/JagjitJi/7.mp3", coverPath: "Cover/7.jpeg"},
]

// audioElement.play();
// hum ek event ko listen karenge
// TIme changed event of audio

// Listen to events : 

// handling PLAY/PAUSE and click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        // jav gana play hora hai to pause play bhi to dkkhana hai to class remove aur add rre hani
        // wo gf bh handle karoo
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    // audio paise krne hai
    else
    {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})


//  ab seebar ko bhi to update krna hai
// niche

// koii agar masterplay pe click kare to kya hona chaye

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update SEEKBAR IMPORTATNT: parseint se integer me milega, %age of progress
    var progress = parseInt((audioElement.currentTime/audioElement.duration)*100); // kitna percent ye chal chuka hai
    console.log(progress);
    myProgressBar.value = progress;
});


//  AGAR PROGRESS BAR CHANGE KRRE TO GANA BHI TO AAGE PICHE HONA CHAHIYE
myProgressBar.addEventListener('change', ()=>{
    // audioElement.currentTime = myProgressBar.value;// lekin ye value% me hai
    audioElement.currentTime = ((myProgressBar.value) * audioElement.duration/100);

    // MATHS; CT*100/D = %AGE ===> CT = %AGE*D/100
}) 


const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
        console.log(element);
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        makeAllPlays();
        // hume kaise pata chalega click ?
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs_JagjitJi/${songIndex+1}.mp3`;
        // audioElement.currentTime = 0;
        gif.style.opacity = 1;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    })
})


// prev/next
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6)
    songIndex =0 ;
    else
    {
        songIndex += 1;
    }

    audioElement.src = `Songs_JagjitJi/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    // audioElement.currentTime = 0;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})

// previous:
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    songIndex = 6;
    else
    {
        songIndex -= 1;
    }

    audioElement.src = `Songs_JagjitJi/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    // audioElement.currentTime = 0;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
})