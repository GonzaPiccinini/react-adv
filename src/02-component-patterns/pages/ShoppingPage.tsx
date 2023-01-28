import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <ProductCard 
          key={product.id}
          product={product}
          className='bg-dark text-white'
          initialValues={{
            count: 6,
            maxCount: 10,
          }}
        >
          {({ count, isMaxCountReached, increaseBy, reset }) => (
            <>
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} className='custom-image' />
              <ProductTitle className='text-bold' title='Cafecito pa' />
              <ProductButtons className='custom-buttons' />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached ? <button onClick={() => increaseBy(+2)}>+2</button> : null}
              <span>{count}</span>
            </>
          )}
        </ProductCard>
    </div>
  )
}
