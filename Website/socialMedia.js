//SIDEBAR
let menuItem=document.querySelectorAll(".menu-item");

// MESSAGE
let msgNoti=document.querySelector('#Messages-Notifications');
let msgs=document.querySelector(".messages");
let msg=document.querySelectorAll('.message');
let msgSearch=document.querySelector('#messages-search');

//Theme 
let theme=document.querySelector('#theme');
let themeModel=document.querySelector('.customize-theme');
let fontSizes =document.querySelectorAll('.choose-size span');
let root=document.querySelector(':root');
let colorPalette=document.querySelectorAll('.choose-color span');
let bg1=document.querySelector('.bg-1');
let bg2=document.querySelector('.bg-2');
let bg3=document.querySelector('.bg-3');

// Like Options

let postPhotos=document.querySelectorAll(".photo");
let likes=document.querySelectorAll(".red-heart");
// Change Color in like-Button of post
postPhotos.forEach((postPhoto, index) => {
    // Add event listener to each post photo
    postPhoto.addEventListener('dblclick', () => {
        // Change color of corresponding like button
        if(likes[index].style.color === 'red'){
           likes[index].style.color=''; //set at it orignal 
        }
        else{
            likes[index].style.color='red';//set at red color
        }

    });
});

//================SIDEBAR

//remove active class from all menu item
let changeActiveItem =()=>{
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}


menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'Notifications'){
            document.querySelector('.noti-Popup').style.display='none'
        }else{
            document.querySelector('.noti-Popup').style.display='block';
            document.querySelector('#Notifications .noti-count').style.display='none';
        }
    })
})

//==============MESSAGES==================

//Searches Chats
let searchMsg=()=>{
    let val =msgSearch.value.toLocaleLowerCase();
    console.log(val);
    msg.forEach(chat=>{
        let name= chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
}



//search chat
msgSearch.addEventListener('keyup',searchMsg)


//hight message card when messsage menu item is clicked
msgNoti.addEventListener('click',()=>{
    msgs.style.boxShadow='0 0 1rem var(--color-primary)';
    msgNoti.querySelector('.noti-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000);
    })


//Theme Display customize
//opens model
let openThemeModel=()=>{
    themeModel.style.display='grid';
}
//Close Model
let closeThemeModel=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display='none';
    }
}



//close model
themeModel.addEventListener('click',closeThemeModel);

theme.addEventListener('click',openThemeModel);

//remove active class from span or font size selector
let removeSizeSelector = () => {
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

//===================Font sizes
fontSizes.forEach(size =>{
    
    size.addEventListener('click',()=>{
        removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('--sticky-top-left','2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }

        //Change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;

    })  
})

//remove ctive class from colors
let changeActiveColor =()=>{
    colorPalette.forEach(colorPalette=>{
        colorPalette.classList.remove('active');
    })
}


//---------------PRIMARY COLORs----------------

colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primary;
        changeActiveColor();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})


// ------------------BackGround COLOR======================

//Theme of Background Color

let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

//change background color
let changeBG=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

bg1.addEventListener('click',()=>{
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})


bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';
    //add active class
    bg2.classList.add('active');
    //remove active class
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';
    //add active class
    bg3.classList.add('active');
    //remove active class
    bg2.classList.remove('active');
    bg1.classList.remove('active');
    changeBG();
})





