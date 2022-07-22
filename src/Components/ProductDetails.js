import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeProduct, selectedProduct } from '../Redux/actions/productActions'

function ProductDetails() {
  const product = useSelector((state) => state.product)
  const { title, image, price, category, description } = product
  const { productid } = useParams()
  const dispatch = useDispatch()

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((err) => {
        console.log(err)
      })

    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    fetchProductDetail()

    return () => {
      dispatch(removeProduct())
    }
  }, [productid])

  return (
    <>
      {/* eslint-disable-next-line multiline-ternary */}
      {Object.keys(product).length === 0 ? (
        <div className="ui container">
          <div className="ui placeholder segment">
            <div className="ui active centered inline loader"></div>
          </div>
        </div>
      ) : (
        <div className="ui grid container">
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">$ {price} </a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails
