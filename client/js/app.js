// function that runs everything in there when side is loaded
window.onload = () => {
  //
  axios.get('api/properties').then( (res) => {
    // putting data we get on 'api/prop.' into var properties
    let properties = res.data
    // selecting parent(container) from your properties into var props
    let properties_bx = document.getElementById('prop_cont')
    // forEach loop on the data and insert it into properties-boxes
    properties.forEach( (p) => {
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
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
        </div>
      </div>
        `)
    })
  })








}
