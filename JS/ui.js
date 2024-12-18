export class displayUi {
  display(result) {
    let cartona = "";
    for (let i = 0; i < result.length; i++) {
      cartona += `    <div class="col-md-6 col-lg-4 col-xl-3 g-4 ">
           <div class="card bg-transparent text-white h-100 p-1"  onclick=goto(${result[i].id})>
             <img src=${result[i].thumbnail} class="card-img-top " alt="...">
             <div class="card-body">
               <div class="d-flex justify-content-between align-items-center mb-3">
               <h5 class="card-title fs">${result[i].title}</h5>
               <span class="my-span2">Free</span>
               </div>
               <p class="paragraph text-center opacity-50">${result[i].short_description}</p>
             </div>
             <div class="card-footer">
               <div class="d-flex justify-content-between">
                                 <span class="my-span">${result[i].genre}</span>
               <span class="my-span">${result[i].platform}</span>
               </div>
             </div>
           </div>
         </div>`;
    }
    document.getElementById("row").innerHTML = cartona;
  }
}
