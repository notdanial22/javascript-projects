function addToCart() {
  var selectedMedicine = document.getElementById('medicine').value
  var selectedAmount = document.getElementById('amount').value
  var cartData = JSON.parse(localStorage.getItem('cart')) || []
  cartData.push({ medicine: selectedMedicine, amount: selectedAmount })
  localStorage.setItem('cart', JSON.stringify(cartData))
  updateCartContent()
}

function updateCartContent() {
  var cartContentDiv = document.getElementById('cartContent')
  var cartData = JSON.parse(localStorage.getItem('cart')) || []

  cartContentDiv.innerHTML = ''

  cartData.forEach((item, index) => {
    var price = getMedicinePrice(item.medicine)
    var itemDiv = document.createElement('div')
    itemDiv.textContent = `${item.medicine} - Amount: ${item.amount} - Price: ${
      price * item.amount
    }`

    var removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.onclick = function () {
      removeFromCart(index)
    }

    itemDiv.appendChild(removeButton)
    cartContentDiv.appendChild(itemDiv)
  })

  var total = calculateTotal(cartData)
  var totalDiv = document.createElement('div')
  totalDiv.textContent = `Total: ${total}`
  cartContentDiv.appendChild(totalDiv)
}

function removeFromCart(index) {
  var cartData = JSON.parse(localStorage.getItem('cart')) || []

  cartData.splice(index, 1)

  localStorage.setItem('cart', JSON.stringify(cartData))

  updateCartContent()
}

function getMedicinePrice(medicine) {
  var medicinePrices = {
    Paracetamol: 5,
    Aspirin: 3,
    Ibuprofen: 7,
    Loratadine: 4,
    Omeprazole: 6,
    Simvastatin: 8,
    Metformin: 4,
    Amoxicillin: 10,
    Ciprofloxacin: 12,
    Diazepam: 9,
  }

  return medicinePrices[medicine] || 0 
}

function calculateTotal(cartData) {
  var total = 0

  cartData.forEach((item) => {
    var price = getMedicinePrice(item.medicine)
    total += price * item.amount
  })

  return total
}

  function updateMedicinePrice() {
    var selectElement = document.getElementById('medicine')
    var selectedMedicine = selectElement.value
    var price = getMedicinePrice(selectedMedicine)

    var medicineNameSpan = document.getElementById('medicineName')
    var priceSpan = document.getElementById('medicinePrice')

    medicineNameSpan.textContent = selectedMedicine
    priceSpan.textContent = price
  }

  updateMedicinePrice()

updateCartContent()

