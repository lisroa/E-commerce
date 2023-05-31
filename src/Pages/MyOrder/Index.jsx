import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCartContext} from '../../Context';
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currenPath = window.location.pathname
  let index = currenPath.substring(currenPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1
     
    return (
       <Layout>
           <div className='flex w-80 items-center relative justify-center mb-6'>
              <Link to='/my-orders' className='absolute left-0'>
                 <ChevronLeftIcon className='h-5 w-5 text-black cursor-pointer'/>
              </Link>
              <h1>My Order</h1>
           </div>
            <div className='flex flex-col w-80'>
              {context.order?.[index]?.products.map(product => (
                    <OrderCard 
                      title= {product.title}
                      imageUrl= {product.image}
                      price = {product.price}
                      key = {product.id}
                      id = {product.id}/>
              ))}
              </div>
        </Layout>
  )
}

export default MyOrder
