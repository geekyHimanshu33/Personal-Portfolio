import cart from "./images/cart.jpg"
import music from "./images/music.jpg"
import password from "./images/password.jpg"
const projects = [
    {
        description : 
        "A Basic Shopping cart project which provide the functionality to add or remove items from the cart and also show the total price of the items in the cart.",

        image: cart,

        title:"Shopping Cart",

        repo_url:"https://github.com/geekyHimanshu33/Shopping-Cart",

        technologies:["React.Js","HTMl-5","Tailwind","Redux"],
        project_url : "https://shopping-cart-ten-mu.vercel.app"
    },
    {
        description : 
        "Music Player made  to give the basic functionality to the player of pause, play and to forward music with a great intusive user interface.",

        image: music,

        title:"Music Player",

        repo_url:"https://github.com/geekyHimanshu33/Music-player",

        technologies:["Javascript","HTMl-5","CSS-3"],
        project_url:"https://music-player-five-beta.vercel.app"
    }
    ,
    {
        description : 
        "Password Generator project that generates password of different combinations and also show the strength of generated password.",

        image: password,

        title:"Password Generator",

        repo_url:"https://github.com/geekyHimanshu33/Password-Generator",

        technologies:["Javascript","HTMl-5","CSS-3"],
        project_url:"https://password-generator-black-xi.vercel.app"
    }
]

export {projects}