let mode = document.querySelector("#mode") ;
let img1 = document.querySelector("#img1") ;
let option = document.querySelector("#option") ;
let aside = document.querySelector("aside") ;
let of = document.querySelector("#of") ;
let picture = document.querySelector(".picture img") ;
let body = document.querySelector("body") ;
let student = document.querySelector(".student") ;
let total = document.querySelector("#total") ;
let count = 0 ;
let img = document.querySelector(".img1") ;
let video1 = document.querySelector("#story") ;
let chatbot = document.querySelector(".chatbot") ;
mode.addEventListener("click" , () =>
{
    document.body.classList.toggle("greenmode") ;
    if(count == 0)
    {
    img1.src = "https://i.pinimg.com/736x/37/b3/74/37b374ea304457ecc74beb99776ddb2b.jpg"
    img.src = "https://i.pinimg.com/736x/37/b3/74/37b374ea304457ecc74beb99776ddb2b.jpg"
    count = 1 ;
    }
    else 
    {
    img1.src = "https://png.pngtree.com/png-clipart/20230426/original/pngtree-blood-drop-blood-red-cartoon-illustration-png-image_9103018.png"
    img.src = "https://png.pngtree.com/png-clipart/20230426/original/pngtree-blood-drop-blood-red-cartoon-illustration-png-image_9103018.png"
    count = 0 ;
    }
}
) ;
function disableScroll() {
   document.body.style.overflowY = "hidden" ;
}
function enableScroll()
{
    document.body.style.overflowY = "scroll" ;
}
option.addEventListener("click" , () =>
{
    aside.style.visibility = 'visible' ;
    total.style.opacity = "0.6"
    aside.style.opacity = "1" ;
    disableScroll() ;
})
of.addEventListener("click" , () =>
{
        aside.style.visibility = 'hidden' ;
        total.style.opacity = "1" ;
        enableScroll() ;
})
function f1() 
{
    if(c == 0)
    { 
        picture.src = "https://cdn.vectorstock.com/i/500p/01/28/blood-donation-horizontal-poster-vector-28980128.jpg" ;
        c = 1 ;
    }
    else 
    {
        picture.src = "https://img.freepik.com/free-vector/flat-horizontal-banner-template-world-blood-donor-day_23-2150334089.jpg" ;
        c = 0 ;
    }
}
let record = [
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5TeDRAaLWF162uTd-Fb6-QIYCB184-x6vA&s" ,
        name : "Ajay Singh" ,
        details : "Really impressed with BloodFlow. Made scheduling my donation much simpler and faster than before" ,
    } ,
    {
        img : "https://www.schillerindia.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-13-at-4.0-3.jpg" ,
        details : "So convenient! Used BloodFlow to book my regular donation. The whole online process felt organised" ,
        name : "Arti Singh"
    } ,
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCVZ0XB5Tgt-l9tl3inSCkPpT-nNbM8AzO7gDZSlwlT3N2NL76tj59qa0FAwXEfLMa00&usqp=CAU" ,
        details : "Finding a local donation slot was so easy with BloodFlow! Scheduled my contribution effortlessly. Love it!" ,
        name : "Ajay Singh"
    } ,
    {
        img : "https://static.toiimg.com/thumb/msid-82913152,imgsize-100535,width-400,resizemode-4/82913152.jpg" ,
        details : "BloodFlow made finding a donation center near me incredibly simple. Booked my slot in minutes" ,
        name : "Sunita Rai"
    }  ,
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKIk4QvVzr6jSrpwtO3gbjaOYHe_eHd4Z7A&s" ,
        details : "Great website! BloodFlow helped me schedule my first blood donation easily. Very user-friendly interface." ,
        name : "Dev Raj"
    } ,
    {
        img : "https://media.licdn.com/dms/image/v2/D5622AQHdr4PIq5irng/feedshare-shrink_800/feedshare-shrink_800/0/1724953257967?e=2147483647&v=beta&t=gq4xVDxhFuPFpC2fcE8Jg0W3Wtpd0dkHc12TT6MryU0" ,
        details : "BloodFlow has all the necessary information clearly laid out. Booking my donation was hassle-free." ,
        name : "Ayush Solanki"
    } ,
    {
        img : "https://scontent.fdbd1-2.fna.fbcdn.net/v/t39.30808-6/461691035_3702578639958738_987195381468871280_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=fuiYGifr8wUQ7kNvwHT55WE&_nc_oc=Adn2hWbcuNfxrMCcWQ4fqCic2cD0ZuZsd0ddPJ1Ipx4yvmoGKh7WTXlkCnkzqicKlGfgX7PV9Bj_HCHfs_lHiVyY&_nc_zt=23&_nc_ht=scontent.fdbd1-2.fna&_nc_gid=_vIAo4fKeE3tYfbrllu-KQ&oh=00_AfG3KAv61ebrxyzp2RHtsKT8BKGbBILo54AESFYe4OR3lw&oe=67FFFC72" ,
        details : "Excellent platform! BloodFlow simplified the entire process of registering and finding donation appointments nearby." ,
        name : "Aditya Singh"
    }
]
let innerHTML = " " ;
  record.forEach(element => {
innerHTML += ` <div class = "h1"> 
                <img src = "${element.img}" style = "height : 100% ; width : 100% ">
                <div class = "t1"> 
                    <br> <br> <br> <br> <br> <br> <br> <br>
                    <h1> ${element.name} </h1>
                    <p> ${element.details} </p>
                </div>
            </div>` }) ;
            student.innerHTML = innerHTML ;
            let video = [  "6290529-uhd_3840_2160_30fps.mp4" , "vid1.mp4" , "6290528-uhd_3840_2160_30fps.mp4" ]
            let c = 0 ;
function f2()
{
    if(c == 0)
    {
        video1.src = video[0] ;
        video1.playbackRate = 1.5 ;
        c = 1 ;
        video1.addEventListener("ended" , () =>
            {
                console.log("hello") ;
                f2(count) ;
            })
    }
    else if (c == 1)
    {
        video1.src = video[1] ;
        video1.playbackRate = 1.5 ;
        c = 2 ;
        video1.addEventListener("ended" , () =>
            {
                console.log("hello") ;
                f2(count) ;
            })
    }
    else 
    {
        video1.src = video[2] ;
        video1.playbackRate = 1.5 ;
        c = 0 ;
        video1.addEventListener("ended" , () =>
            {
                console.log("hello") ;
                f2(count) ;
            })
    }
}
f2() ;
chatbot.addEventListener("click" , () =>
{
    open("chatbot.html") ;
})
let number1 = document.querySelector(".number1") ;
     let speed = 97 ;
let number2 = document.querySelector(".number2") ;
/*number.forEach((element) =>
{
    function upData() 
    {
        const target = Number(element.getAttribute("data-target")) ;
        const count = Number(element.innerHtml) ;
        const inc = target/speed ;
        if(count < target)
        {
            element.innerHTML = Math.floor(inc + count) ;
            setTimeout(upData , 1)
        }
        else 
        {
            element.innerHTML = target ;
        }
    }
}) */
  function upData()
  {
    const target = 78453 ;
    const count = Number(number1.innerHTML) ;
     const inc = 786 ;
     if(count < target)
     {
        number1.innerHTML = inc + count ;
     setTimeout(upData , 100) ;
     }
     else 
     {
        number1.innerHTML = target ;
     }

  }
  setTimeout(upData , 1000) ;
  function upData2()
    {
        const target = 50964 ;
        const count = Number(number2.innerHTML) ;
         const inc = 925;
         if(count < target)
         {
            number2.innerHTML = inc + count ;
         setTimeout(upData2 , 100) ;
         }
         else 
         {
            number2.innerHTML = target ;
         }
    }
    setTimeout(upData2 , 1000) ;
function t1()
{
    open("recipient.html") ;
}
function t2()
{
    open("donor.html") ;
} 