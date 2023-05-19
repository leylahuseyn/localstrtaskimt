function BasketItem(id,count){
  this.Id = id;
  this.Count = count;
  this.Image = image;
  this.Title = title;
  this.Price = price;
  this.Description = description
}
let btns = document.querySelectorAll(".btn");
      
      btns.forEach(btn=>{
          btn.addEventListener("click",function(){
              let dataId = Number(this.parentNode.parentNode.getAttribute("id"));
              console.log(dataId)
     localStorage.getItem("basket",JSON.stringify(basket))
    
    fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    data.forEach(el => {
        console.log(data);
        const product=document.querySelector('#product')
        product.innerHTML +=
        `
        <div class="card mb-3 mt-5 ms-5" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${el.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        `
    });
})


    }) 
  })


