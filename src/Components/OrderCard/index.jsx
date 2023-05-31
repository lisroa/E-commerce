import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {
  const {id, title, imageUrl, price, handleDelete} = props
  
  let renderXMarkIcon 
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className='h-4 w-4 text-black cursor-pointer'onClick={() => {handleDelete(id)}}></XMarkIcon>
  }
  return (
    <div className="flex justify-between items-center mb-2">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 p-2'>
          <img className="w-full h-full rounded-lg object-cover"src={imageUrl} alt={title}></img>
        </figure>
        <p className='text-sm font-light'> {title} </p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-ms font-medium'>${price} </p>
         {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard