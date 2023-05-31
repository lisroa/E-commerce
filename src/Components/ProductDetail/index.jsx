import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';
import {ShoppingCartContext} from '../../Context';

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)
 
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-1 product-detail  flex-col fixed right-0 border border-lime-300 rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
      <h2 className='font-medium text-xl'>Detail</h2>
      <div>
      <XMarkIcon 
      className='h-6 w-6 text-black cursor-pointer'
      onClick={() => context.closeProductDetail()}
      ></XMarkIcon>
      </div>
      </div>
      <figure className='px-6'>
        <img className="productImg rounded-lg" src={context.productDescription.image} alt={context.productDescription.title}></img>
      </figure>
      <p className='flex flex-col p-6 '>
        <span className='font-medium text-2xl mb-2'> ${context.productDescription.price} </span>
        <span className='font-medium text-md'>{context.productDescription.title} </span>
        <span className='font-light text-sm'>{context.productDescription.description} </span>
      </p>
    </aside>
  )
}

export default ProductDetail


