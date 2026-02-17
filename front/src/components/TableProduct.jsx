import { useEffect, useState } from "react"

function TableProduct() {
    const [product, setProduct] = useState([])

    const  getProduct = async ()=>{
        const response = await fetch("http://localhost:3000/products")
        const data = await response.json()
        setProduct(data)
    }

    useEffect(()=>{
        getProduct()
    },[])

    const HTMLproduct = product.map((p)=>{
        return (
            <div>
                <h3>{p.id_product}.- {p.name}</h3>
                <p>{p.description}</p>
                <h4>Stock Actual: {p.stock}</h4>
            </div>
        )
    })

    console.log(product)

  return (
    <>
        {HTMLproduct}
    </>
  )
}

export default TableProduct