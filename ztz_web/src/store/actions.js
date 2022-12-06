import {
    REQUEST_PRODUCTS_LIST_FROM_SPRING,
    REQUEST_FILTERED_PRODUCT_FROM_SPRING
} from './mutation-types'

// npm install axios --save-dev
import axios from 'axios'

export default {
    reqProductsFromSpring ({ commit }) {
        return axios.get('http://localhost:7777/products/list')
            .then((res) => {
                commit(REQUEST_PRODUCTS_LIST_FROM_SPRING, res.data)
                console.log(res.data)
            })
    },
    reqFilteredProductsFromSpring ({ commit }, localName) {
        console.log('해당 지역 상품만 가져오기')

        return axios.get(`http://localhost:7777/products/list/${localName}`)
            .then((res) => {
                commit(REQUEST_FILTERED_PRODUCT_FROM_SPRING, res.data)
            })
    },
}