import { useState } from 'react'

import Head from 'next/head'
import { Carousel } from '../components/Carousel'
import { Banner } from '../components/Banner'
import { Transport } from '../components/Transport'
import { OrderForm } from '../components/OrderForm'
import { ProductList } from '../components/ProductList'
import { CartList } from '../components/CartList'
import { IHomeProps, CartsData, ProductData } from '@/types/interface'

export const getServerSideProps = async () => {
  const productList = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products`
  )
  const cartList = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`)
  const productListData = await productList.json()
  const cartListData = await cartList.json()
  const { products } = await productListData
  const { carts } = await cartListData

  return {
    props: {
      products,
      carts
    }
  }
}

export default function Home({ products, carts }: IHomeProps) {
  const [shopCart, setShopCart] = useState<CartsData[]>(carts)
  const [allProduct, setAllProduct] = useState<ProductData[]>(products)

  const customLoader = ({ src }: { src: string }) => src

  // JSX
  return (
    <>
      <Head>
        <title>WOWOROOM</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Banner customLoader={customLoader} />
      <Carousel customLoader={customLoader} />
      <Transport />
      <ProductList
        customLoader={customLoader}
        originProduct={products}
        allProducts={allProduct}
        setShopCart={setShopCart}
        setAllProduct={setAllProduct}
      />
      <CartList
        customLoader={customLoader}
        carts={shopCart}
        setShopCart={setShopCart}
      />

      <OrderForm setShopCart={setShopCart} />
    </>
  )
}
