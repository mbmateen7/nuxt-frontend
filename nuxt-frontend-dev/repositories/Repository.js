import AuthRepository from './AuthRepository'
import CartRepository from './CartRepository'
import ContactRepository from './ContactRepository'
import ProductRepository from './ProductRepository'

export default ($axios) => ({
    auth: AuthRepository($axios),
    product: ProductRepository($axios),
    cart: CartRepository($axios),
    contact: ContactRepository($axios)
})
