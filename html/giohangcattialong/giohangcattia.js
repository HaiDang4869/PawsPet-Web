const cart = [];

const product= [
  {
    "image": "./cattialong2kg.jpg",
    "title": "Cắt tỉa Lông 2kg",
    "price": 250
  },
  {
    "image": "./cattialong5kg.jpg",
    "title": "Cắt tỉa Lông 5kg",
    "price": 350
  },
  {
    "image": "./cattialong10kg.jpg",
    "title": "Cắt tỉa Lông 10kg",
    "price": 500
  },
  {
    "image": "./cattialong20kg.jpg",
    "title": "Cắt tỉa Lông 20kg",
    "price": 650
  }

]
const categories=[...new Set(product.map((item)=>{return item}))]
let i=0
document.getElementById('root').innerHTML=categories.map((item, i)=>{
    var{image,title,price}=item;
    return `<div class='box'>
        <div class='img-box'>
        <img class='image' src=${image}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocard("+(i++)+")'>Add to card</button>"+
            `</div></div>`;
}).join('')

function addtocard(index) {
  const itemIndex = cart.findIndex(item => item.item == product[index]);
  if (itemIndex < 0) {
    cart.push({
      count: 1,
      item: product[index]
    });
  } else {
    cart[itemIndex].count++;
  }
  console.log(cart);
  renderCart();
}

function renderCart() {
  const div = document.getElementById("carditem");
  div.innerHTML = cart.map((item, i) => {
    return `<div class="card id=${i}">
      <div class="card-body">
      <img src=${"image"}></img>
        <h5 class="card-title">${item.item.title}</h5>
        <p class="card-text">${item.item.price}$$  </p>
        <div class="themgiam">
        <button class="cainut " onclick="itemCount(0,${i})">+</button>
        <p class="card-text">${item.count}</p>
        <button class="cainut " onclick="itemCount(1,${i})">-</button>
        </div>
        <button class="nutxoa right" onclick="removeItem(${i})">Remove</button>
      </div>
    </div>`;
  }).join('');
  const cartTotal = cart.reduce((total, item) => {
    return total + item.item.price * item.count;
  }, 0);
  document.getElementById("total").innerHTML = cartTotal + " $";
  document.getElementById("count").innerHTML = cart.length;
}

function removeItem(index){
 var item = document.getElementsByClassName("card")[index];
 cart[index].count = 0;
 item.remove();
}

function itemCount(type, index){
  var item = document.getElementsByClassName("card")[index];
  var itemcount = item.getElementsByTagName("p")[1];
  if(type == 0)
  {
      cart[index].count++;
  }
  else
  {
      cart[index].count--;
  }

itemcount.innerHTML = cart[index].count;

  if(cart[index].count == 0){
    item.remove();
  }
}


renderCart();

