
const ApiUrl = 'https://fakestoreapi.com/users'
const wrapper =document.querySelector('.wrapper')
const loading =document.querySelector('.loading')
async function fetDate(api){
    let javob = await fetch(api)
    javob
    .json()
    .then(ris => creatCard(ris))
    .catch(arr => console.log(arr))
    .finally(() => {
        loading.style.display = "none"
    })
}
fetDate(ApiUrl)


function creatCard(data){
    let fragmint = document.createDocumentFragment()
    data.forEach(element => {
     let  card = document.createElement('div')   
     card.classList.add('card')
     card.innerHTML =`
     
     <div data-id = ${element.id}>
     <div class="all" name ="product-all"></div>
     <h2 class="card__title" ">${element.address.geolocation.lat}</h2>
     <p class="card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     <h4>${element.address.geolocation.long}</h4>
     <button name ="product-wish">Like</button>
     <button>Cart</button>
     </div>
     `
     fragmint.appendChild(card)
    });
    wrapper.appendChild(fragmint)
}


const singleRoate = (id)=>{
    window.open(`/pages/product.html?id=${id}`, "_self")
}

const setWish = async(id) =>{
    let getDate = await fetch(`${ApiUrl}/${id}`) 
    getDate
    .json()
    .then(ris =>{
       let wishis = JSON.parse(localStorage.getItem('wishis')) || []
       let son = wishis.findIndex(el =>el.id === +id )
       if(son < 0 ){
        localStorage.setItem('wishis',JSON.stringify([...wishis,ris]))
       }

    })
    .catch(arr =>console.log(arr)) 
}
wrapper.addEventListener('click', (e) => {
    let {name} = e.target
    if(name === 'product-all'){
        let id = e.target.closest('[data-id]').dataset.id
        singleRoate(id ) 
    }
    else if(name === 'product-wish'){
       let id = e.target.closest('[data-id]').dataset.id
       setWish(id)
    }
})




   






// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__collection")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", ()=>{
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ================
