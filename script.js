
const input = document.getElementById('4m')

input.addEventListener('change', (event) => {
  const target = event.target
  	if (target.files && target.files[0]) {
      const maxAllowedSize = 4* 1024 * 1024;
      if (target.files[0].size > maxAllowedSize) {
      
       	target.value = ''
      }
  }
})


const input2 = document.getElementById('10m')

input2.addEventListener('change', (event) => {
  const target = event.target
  	if (target.files && target.files[0]) {

      
      const maxAllowedSize = 10 * 1024 * 1024;
      if (target.files[0].size > maxAllowedSize) {
      	
       	target.value = ''
      }
  }
})
