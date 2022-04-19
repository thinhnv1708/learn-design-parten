import CarBuilder from './Base/CarBuilder'

const car = new CarBuilder()
    .AddEngineName('v8')
    .AddName('Tucson')
    .AddPaint('Pink')
    .AddWheels(4)
    .AddGlass('Khỉ đột 6')
    .Build()

car.showCarInfo()
