import { useContext } from 'react';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import {ShoppingCartContext} from '../../Context';
import { render } from 'react-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Home() {

  const context = useContext(ShoppingCartContext)
  
  const renderView = () => {
    
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map((item) => (<Card data =  {item} key= {item.id} />))) 
      } else {
         return ( 
                <div>We don't have anything :(</div>)}
    }

  return (
    <Layout className='bg-red-100'>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>Home</h1>
        </div>
       <div className='flex items-center gap-1'>
        <MagnifyingGlassIcon className='h-5 w-5'/>
        <input type='text' 
          placeholder='Search products' 
          className='rounded-lg border-black w-80 p-4 focus:outline-none' 
          onChange={(event) => context.setSearchByTitle(event.target.value)}/>
       </div>
        <div className="grid gap-8 grid-cols-3 max-w-screen-lg">
            {renderView()}
        </div>
        <ProductDetail />
    </Layout>
  )
}

export default Home
