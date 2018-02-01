angular.module('fourWheels').component('cars', {
    templateUrl: './app/cars/cars.template.html',
    controllerAs: 'carsCtrl',
    controller: function (carsSrvc) {
        this.cars = carsSrvc.cars

        this.buyCar = function (id){
            // this.cars = carsSrvc.cars
            carsSrvc.buyCar(id)
        }
    }
})