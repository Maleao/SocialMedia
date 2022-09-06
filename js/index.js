// ==============================Geral============================== 
const menuItems = document.querySelectorAll('.menu-item'); 
const messagesNotification = document.querySelector ('#messages-notification'); 
const messages = document.querySelector('.messages'); 
const message = messages.querySelectorAll('.message'); 
const messageSearch = document.querySelector('#message-search'); 
const theme = document.querySelector('#theme'); 
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span'); 
var root = document.querySelector(':root'); 
const colorPalette = document.querySelectorAll('.choose-color span'); 
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

    

//==============================remove active============================== 
const changeActiveItem = () =>  
{ 
    menuItems.forEach(item =>  
    { 
        item.classList.remove('active')
    })
}

menuItems.forEach(item =>  
    { 
    item.addEventListener('click', () => { 
        changeActiveItem(); 
        item.classList.add('active'); 
        if(item.id != 'notifications') 
        { 
            document.querySelector('.notification-popup').style.display = 'none';
        } else
        { 
            document.querySelector('.notification-popup').style.display = 'block'; 
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
}) 
 

//==============================searches chats============================== 
const searchMessage = () =>  
{ 
    const val = messageSearch.value.toLowerCase(); 
    message.forEach(chat => 
        { 
            let name = chat.querySelector('h5').textContent.toLowerCase(); 
            if(name.indexOf(val) != -1) 
            { 
                chat.style.display = 'flex';
            } else
            { 
                chat.style.display = 'none'
            }
        })
}
 
messageSearch.addEventListener('keyup', searchMessage); 

//=========================Messages notification==========================
messagesNotification.addEventListener('click', () => 
{ 
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'; 
    messagesNotification.querySelector('.notification-count').style.display = 'none'; 
    setTimeout(() =>  
    {
         messages.style.boxShadow = 'none';
    }, 2000);
}) 


// =========================Theme customization============================== 
const openThemeModal = () =>  
{ 
    themeModal.style.display = 'grid';
} 

const closeThemeModal = (e) =>
{ 
    if(e.target.classList.contains('customize-theme')) 
    { 
        themeModal.style.display = 'none';
    }
}

//close 
themeModal.addEventListener('click', closeThemeModal);
//open
theme.addEventListener('click', openThemeModal); 
 

// ==============================FontSize============================== 

// romover class active 
const removeSizeSelector = () => 
{ 
    fontSizes.forEach(size =>  
    { 
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>  
    {  
        size.addEventListener('click', () => 
        {  
            let fontSize; 
            removeSizeSelector(); 
            size.classList.toggle('active'); 

            if(size.classList.contains('font-size-1'))
            {  
                fontSize = '10px'; 
                root.style.setProperty('----sticky-top-left', '5.4rem');
                root.style.setProperty('----sticky-top-right', '5.4rem');
            } else if(size.classList.contains('font-size-2'))
            { 
                fontSize = '13px'; 
                root.style.setProperty('----sticky-top-left', '5.4rem');
                root.style.setProperty('----sticky-top-right', '-7rem');
            } else if(size.classList.contains('font-size-3'))
            { 
                fontSize = '16px'; 
                root.style.setProperty('----sticky-top-left', '-2rem');
                root.style.setProperty('----sticky-top-right', '-17rem');
            } else if(size.classList.contains('font-size-4'))
            { 
                fontSize = '19px'; 
                root.style.setProperty('----sticky-top-left', '-5rem');
                root.style.setProperty('----sticky-top-right', '-25rem');
            } else if(size.classList.contains('font-size-5'))
            { 
                fontSize = '22px'; 
                root.style.setProperty('----sticky-top-left', '-10rem');
                root.style.setProperty('----sticky-top-right', '-35rem');
            } 
             
            //alterar tamanho da font raiz do DOC 
            document.querySelector('html').style.fontSize = fontSize;
        })

    }) 
 
// ==============================Change Color============================== 

//remover active 
const changeActiveColorClass = () => 
{ 
    colorPalette.forEach(colorPicker =>
    { 
        colorPicker.classList.remove('active');
    })
} 

    colorPalette.forEach(color => 
    { 
      color.addEventListener('click', () =>
      {
        let primary; 
        changeActiveColorClass();  

        if(color.classList.contains('color-1'))
        { 
            primaryHue = 252;
        } else if(color.classList.contains('color-2'))
        { 
            primaryHue = 52;
        } else if(color.classList.contains('color-3'))
        { 
            primaryHue = 352;
        }  else if(color.classList.contains('color-4'))
        { 
            primaryHue = 152;
        }  else if(color.classList.contains('color-5'))
        { 
            primaryHue = 202;
        } 
        color.classList.add('active') 
         
        root.style.setProperty('--primary-color-hue', primaryHue)

      }) 

    }) 

// ==============================Background============================== 
let lightColorLightness; 
let whiteColorLightness; 
let darkColorLightness; 

//theme 
const changeBG = () => {
root.style.setProperty('--light-color-lightness', lightColorLightness);
root.style.setProperty('--white-color-lightness', whiteColorLightness);
root.style.setProperty('--dark-color-lightness', darkColorLightness); 
} 

bg1.addEventListener('click', () =>
{ 
    //adicionando active 
    bg1.classList.add('active'); 
    //remove active 
    bg2.classList.remove('active'); 
    bg3.classList.remove('active'); 
    window.location.reload();
}) 

bg2.addEventListener('click', () =>
{ 
    darkColorLightness = '95%'; 
    whiteColorLightness = '20%'; 
    lightColorLightness = '15%'; 

    //adicionando active 
    bg2.classList.add('active'); 
    //remove active 
    bg1.classList.remove('active'); 
    bg3.classList.remove('active'); 
    changeBG();
}); 

bg3.addEventListener('click', () =>
{ 
    darkColorLightness = '95%'; 
    whiteColorLightness = '10%'; 
    lightColorLightness = '0%'; 

    //adicionando active 
    bg3.classList.add('active'); 
    //remove active 
    bg1.classList.remove('active'); 
    bg2.classList.remove('active'); 
    changeBG();
})