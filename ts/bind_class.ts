export default function SportsStoreController() {

    this.mapProduct = function (product) {
        console.log("mapProduct call");
    }

    this.getAll = function () {
        this.mapProduct();
    }
}