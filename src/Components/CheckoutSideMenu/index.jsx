import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCartContext} from '../../Context';
import OrderCard from '../OrderCard';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';
import { totalPrice } from '../../Utils';

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
      context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ?     'flex' : 'hidden'} flex-1 checkout-side-menu  flex-col fixed right-0 border border-lime-600 rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
           <XMarkIcon  className='h-6 w-6 text-black cursor-pointer'onClick={() => context.closeCheckoutSideMenu()}>
          </XMarkIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
          {context.cartProducts.map((product) => {
            return (
                  <OrderCard 
                      title= {product.title}
                      imageUrl= {product.image}
                      price = {product.price}
                      key = {product.id}
                      handleDelete = {handleDelete}
                      id = {product.id}/>
                  )})}
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-medium'>Total</span>
          <span className='font-medium text-2xm'> ${totalPrice(context.cartProducts)} </span>
        </p>
        <Link to='/my-orders/last'>
          <button className = 'w-full bg-lime-600 py-3 text-white rounded-lg mt-3 mb-3' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
