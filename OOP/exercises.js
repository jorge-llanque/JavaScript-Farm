class phone {
  constructor(brand, model, color, price) {
    this.brand = brand
    this.model = model
    this.color = color
    this.price = price
  }

  set setBrand(brand) {
    this.brand = brand
  }

  get getBrand() {
    return this.brand
  }

  get getSpecs() {
    return `
      Brand: ${this.brand || "No brand"}
      Model: ${this.model || "No model"}
      Color: ${this.color || "No color"}
      Price: ${this.price || "No price"}
    `
  }
}

const phone1 = new phone("Samsung", "Galaxy S20", "Black", 1000)
console.log(phone1)
phone1.setBrand = "Apple"
console.log(phone1.getBrand)
console.log(phone1.getSpecs)
