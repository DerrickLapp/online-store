import axios from 'axios';

class DataService {

    //Cards
    async getProducts() {
        let response = await axios.get("http://127.0.0.1:5000/api/products")
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }

    //Coupon Codes
    async getCoupons() {
        let response = await axios.get("http://127.0.0.1:5000/api/coupons")
        return response.data;
    }

    async saveCoupon(coupon) {
        let response = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
        return response.data;
    }
}


export default new DataService();