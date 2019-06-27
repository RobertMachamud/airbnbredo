// function that runs everything in there when side is loaded
window.onload = () => {
  // getting the api of properties and takes data (obj.)
  axios.get('api/properties').then( (res) => {
    // putting data we get on 'api/properties' into var properties
    let properties = res.data
    // selecting parent(container) from your properties into var properties_bx
    let properties_bx = document.getElementById('prop_cont')



    // forEach loop on the data and insert it into properties-boxes -
    //   you get as many boxes as ther are data in your table
    properties.forEach( (p) => {

      let stars =''
      for (i = 0; i < p.rating; i++) {
        stars += `<i class="fas fa-star"></i>`
      }

      properties_bx.insertAdjacentHTML('beforeEnd', `
      <div class="prop_box">
        <div class="prop_img" background=""></div>
        <div class="prop_content">
          <div class="type_city">
            <p>${p.type} &middot ${p.country} &middot ${p.city}</p>
            </div>
            <div class="prop_name">
              ${p.name}
            </div>
            <div class="price">$${p.price}/night</div>
            <div id="rating" class="rating">
              ${stars}
            </div>
        </div>
      </div>
        `)
    })
  })








}


// let stars =''
// for (i = 0; i <= p.rating; i++) {
//   stars += `<i class="fas fa-star"></i>`
// }
