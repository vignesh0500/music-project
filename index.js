var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
      480: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      980: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
      1280: {
          slidesPerView: 3,
          spaceBetween: 20,
      }
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
//   vijy,ar,ani
let songIndex=0;
let audioElement=new Audio('img/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let song=[
    {songName:"Anbe Anbe",filepath:"img/1.mp3" ,coverpath:"img/sayyeshaa-289.jpg"},
    {songName:"Hayyoga",filepath:"img/2.mp3" ,coverpath:"img/Jawan_Hayyoda_140823_1-49e.jpg"},
    {songName:"idthu vari",filepath:"img/3.mp3 " ,coverpath:"img/goa_ta.jpg"},
    {songName:"Chinna thamari",filepath:"img/4.mp3" ,coverpath:"img/maxresdefault (1).jpg"},
    {songName:"anbe anbe",filepath:"img/5.mp3 " ,coverpath:"nbe anbe.jpg"},
    {songName:"penne penne",filepath:"img/6.mp3" ,coverpath:"penne.jpg"},
    {songName:"aaga naga",filepath:"img/7.mp3 " ,coverpath:"Aga-Naga-song-out_-A-poster-of-Ponniyin-Selvan-2-1.jpg"},
    {songName:"ravadi",filepath:"img/8.mp3" ,coverpath:"img/sayyeshaa-289.jpg"},
    {songName:"uriye uriye",filepath:"img/9.mp3 " ,coverpath:"Thaandavam.jpg"},
    
]
songitem.forEach((element,i)=>{
    console.log(element,i)
element.getElementsByTagName('img')[0].src = song[i].coverpath;
element.getElementsByClassName('songName')[0].innerText = song[i].songName;
})
// audioElement.play()
// play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');

        }
        else{
            audioElement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle')
        }
})
// listen 
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
//update seebar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>{
audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
element.classList.add('fa-play-circle');
element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllplays();
    songIndex =parseInt(e.target.id);
    console.log(songIndex);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`img/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
})
document.getElementById('privious').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
    songitem -=1
    } audioElement.src=`img/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
    songitem +=1;
    } audioElement.src=`img/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
})