let wishis = JSON.parse(localStorage.getItem('wishis'))
const wrapper =document.querySelector('.wrapper')

function creatCard(data){
    let fragmint = document.createDocumentFragment()
    data.forEach(element => {
     let  card = document.createElement('div')   
     card.classList.add('card')
     card.innerHTML =`
     
     <div data-id = ${element.id}>
     <div class="all"></div>
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
creatCard(wishis)