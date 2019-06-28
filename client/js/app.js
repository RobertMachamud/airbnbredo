// for dropdown menu - toggle class '.show'

// Wrong
// document.addEventListener('click', (b) => {
// 	drop_cont = document.getElementsByClassName('drop_content')
// 	console.log('drop_cont', drop_cont);
// 	if (b.target.classList.contains('drop_btn')) {
// 		Array.from(drop_cont).forEach((d) => {
// 			d.classList.toggle('show')
// 		})
// 		console.log(b)
// 	}
// })


// function that runs everything in there when side is loaded
window.onload = () => {


	// axios.get('/api/categories').then( (res) => {
	// 	let categories = res.data
	// 	let categories_bx = document.getElementById('cat_cont')
	//
	// 	categories.forEach( (ca) => {
	// 		categories_bx.inertAdjacentHTML('beforeEnd', `
	//
	// `)
	//   })
	// })

	axios.get('/api/countries').then( (res) => {
		let countries = res.data
		let countries_bx = document.getElementById('countries_cont')

		countries.forEach( (c) => {
			countries_bx.insertAdjacentHTML('beforeEnd', `
		  <div class="country_box">

          <div class="country_img" style="background-image: url('${c.img}'); background-size: cover"></div>
          <div class="country_txt">

            <h4>${c.name}</h4>
            <button><small>Filter</small></button>
          </div>
        </div>
        `)
		})
	})



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
        <div class="prop_img" style="background-image: url('${p.img}'); background-size: cover"></div>
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

	// document.addEventListener( ('click', e) => {
	//   if (e.target.classList.contains('targets')) {
	//     axios.get(`/api/properties?name=${e.target.id}`)
	//   }
	// })

}
