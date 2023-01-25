import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

        {
          products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              className='bg-dark text-white'
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} className='custom-image' />
              <ProductTitle className='text-bold' title='Cafecito pa' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }

        </div>
        <div className='shopping-cart'>
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard 
              key={key}
              product={product}
              className='bg-dark text-white'
              style={{ width: '100px' }}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} className='custom-image' />
              <ProductButtons 
                style={{ display: 'flex', justifyContent: 'center' }} 
                className='custom-buttons' 
              />
            </ProductCard>
          ))}
        </div>
    </div>
  )
}
