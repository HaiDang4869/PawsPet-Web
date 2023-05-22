const cart = [];

const product= [
  {
    "image": "./meoaicap.jpg",
    "title": "Mèo Ai Cập",
    "price": 5000
  },
  {
    "image": "./meoanhlongdai.jpg",
    "title": "Mèo Anh lông dài",
    "price": 6000
  },
  {
    "image": "./meobatu.jpg",
    "title": "Mèo Ba Tư",
    "price": 7000
  },
  {
    "image": "./meochanngan.jpg",
    "title": "Mèo chân ngắn",
    "price": 50000
  },
  {
    "image": "./meomop.jpg",
    "title": "Mèo mướp",
    "price": 7  
  },
  {
    "image": "./meomun.jpg",
    "title": "Mèo Mun",
    "price": 8  
  },
  {
    "image": "./meoradoll.jpg",
    "title": "Mèo Radoll",
    "price": 4000 
  },
  {
    "image": "./meovang.png",
    "title": "Mèo vàng",
    "price": 3  
  },
  {
    "image": "./meoxiem.jpg",
    "title": "Mèo xiêm",
    "price": 7 
  },
  {
    "image": "./choalatka.jpg",
    "title": "Chó Alaska",
    "price": 2000  
  },
  {
    "image": "./chochiquaqua.jpg",
    "title": "Chó Chihuahua",
    "price": 1000  
  },
  {
    "image": "./choxucxich.jpg",
    "title": "Chó Hotdog",
    "price": 2000  
  },
  {
    "image": "./chohussky.jpg",
    "title": "Chó Husky",
    "price": 3000  
  },
  {
    "image": "./chohatde.jpg",
    "title": "Chó hạt dẻ",
    "price": 200  
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

