class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }
  
  const myCar = new Car("Ford");
  console.log(myCar.carname);
  myCar.carname = "Verna";
  console.log( myCar.carname);