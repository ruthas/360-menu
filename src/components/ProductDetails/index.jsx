import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ResturantContext from '../../context/Restaurant'
import Icon from '../Icon'
import LikeCount from '../LikeCount'

const Modal = styled.div`
  height: 824px;
  width: 450px;
  border-radius: 0px;
  background: #222222;
  position: fixed;
  top: 0px;
  z-index: 251;
  left: calc(50% - 200px);
  color: #ffffff;
  display:none;
`

const ModalBg = styled.div`
  position: fixed;
  height: 835px;
  width: 1194px;
  top: 0px;
  background-color: black;
  background: rgba(0, 0, 0, 0.7);
  z-index: 250;
  left: 0px;
  display: none;
`
const ProdImgWrap = styled.div`
  width: 409px;
  height: 276px;
  background-color: red;
  left: 41px;
  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.2));
  border-radius: 0px 0px 0px 50px;
  margin-left: 41px;
  margin-bottom: 40px;
`
const ProdWrap = styled.div`
  margin: 40px;
`

const ProdImg = styled.img`
  width: 409px;
  height: 276px;
  left: 41px;
  object-fit: cover;
  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.2));
  border-radius: 0px 0px 0px 50px;
  margin-left: 41px;
`
const ProdName = styled.h2`
  font-family: Lora;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;
`
const ProdDesc = styled.p`
  width: 370px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  color: #bdbdbd;
`

const ProdOpt = styled.h5`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #ffffff;
`

const Likes = styled(LikeCount)`
  position: absolute;
  right: 15px;
  top: 272px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
  color: #bdbdbd;
`

export const AddToOrderButton = styled.button`
  position: absolute;
  bottom: 1px;
  border-color: #e54a2d;
  height: 90px;
  width: 450px;
  border-radius: 0px;
  background: #e54a2d;
  text-transform: uppercase;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
`

const CloseButton = styled.button`
  color: #ffffff;
  background: transparent;
  border-color: transparent;
  position: fixed;
  top: 1px;
  transform: rotate(45deg);
`

const ProductDetails = () => {
  const [selectedOption, setSelectedOption] = useState([])

  const {
    activeProduct,
    setActiveProduct,
    activeCategory,
    addToOrders,
  } = useContext(ResturantContext)
  return (
    <div>
      <ModalBg />
      <Modal>
        {activeProduct.images?.[0]?.thumbnails.large.url ? (
          <ProdImg
            src={activeProduct.images?.[0]?.thumbnails.full.url}
            alt={activeProduct.name}
          />
        ) : (
          <ProdImgWrap>
            <Icon size="large" name={activeCategory.icon} />
          </ProdImgWrap>
        )}
        {activeProduct.likes ? (
          <div>
            <Icon name="HEART" style={{ color: `red` }} />
            <Likes numberOfLikes={activeProduct.likes} />
          </div>
        ) : null}

        <ProdWrap>
          <ProdName>{activeProduct.name}</ProdName>
          <ProdDesc>{activeProduct.description}</ProdDesc>
          {activeProduct.options ? (
            <ProdOpt>
              <hr />
              {activeProduct.options.map(({ option, price }) => (
                <label htmlFor={option} key={activeProduct.id}>
                  <input
                    onChange={() => setSelectedOption({ option, price })}
                    type="radio"
                    key={option}
                    name="options"
                    id={option}
                    value={{ option, price }}
                  />
                  {option} {price}
                </label>
              ))}
            </ProdOpt>
          ) : null}
        </ProdWrap>
        <CloseButton type="button" onClick={() => setActiveProduct({})}>
          <Icon name="PLUS" />
        </CloseButton>
        <AddToOrderButton
          type="button"
          onClick={() => addToOrders({ ...activeProduct, selectedOption })}
        >
          add to order
        </AddToOrderButton>
      </Modal>
    </div>
  )
}

export default ProductDetails
