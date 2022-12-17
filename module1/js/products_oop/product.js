class Product {

    constructor(title, price, vat){
  
      // Assign the vat that came in the parameters
      // But if it's not defined, assign 23 as default value!
      this.vat = vat ?? 23
      this.title = title ?? '%undefined%'
      this.price = price ?? 0
    }
  
    assignTitle(title){
      this.title = title
    }
  }
  
  class ImportedProduct extends Product {
  
    constructor(title, price, vat, countryOrigin, importingShippingVal){
  
      super(title, price, vat)
      
      this.countryOrigin = countryOrigin
      this.importingShippingVal = importingShippingVal
  
    }  
  }
  
  let product1 = new Product()
  product1.assignTitle('Apple')
  let product2 = new ImportedProduct('Sweets', 20, null, 'Finland', 5)
  
  let products = []
  products.push(product1)
  products.push(product2)
  
  console.log(products)
  
  if (products[1].constructor == ImportedProduct)
  {
    console.log("Display the specific Imported Product interface")
  }
  
  
  