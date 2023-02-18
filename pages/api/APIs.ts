import axios from 'axios'

export const addToCart = async (productId: string) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_PRODUCT_URL}carts`,
      {
        data: {
          productId: productId,
          quantity: 1
        }
      }
    )
    const result = await res.data.carts
    alert('加入成功')
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteAll = async () => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_PRODUCT_URL}carts`
    )
    const { message } = await res.data
    const { status } = await res
    return { message, status }
  } catch (error: any) {
    const { message } = error.response.data
    alert(message)
  }
}

export const deleteItem = async (id: string) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_PRODUCT_URL}carts/${id}`
    )
    const { carts } = await res.data
    alert('刪除成功')
    return carts
  } catch (error) {
    console.log(error)
  }
}
