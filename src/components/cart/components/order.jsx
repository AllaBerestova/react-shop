import React, { useState, useEffect } from "react";

export const Order = ({productsCart, discount}) => {

    const [orderSum, setOrderSum] = useState(0)

    useEffect(() => {
        const total = productsCart.reduce((acc, product) => {
            return acc + (product.price * product.quantity)
        }, 0);
        setOrderSum(total);
    }, [productsCart])

    const onCheckout = () => {
        productsCart.map((product, index) => 
            console.log(
                `товар ${index+1} - ${product.name}:\nколичество - ${product.quantity}, цена за штуку - ${product.price}$`
            )
        )
        console.log(`общая сумма заказа - ${orderSum.toFixed(2)}$\nдоставка - 15$\nк оплате - `)
        
    }


    return (
        <div className="order">
            <div className="title">Your order</div>
            <div className="order-price-wrapper">
                <div className="price-row">
                    <div className="name">Оrder price</div>
                    <div className="price">${orderSum.toFixed(2)}</div>
                </div>
                <div className="price-row">
                    <div className="name">Discount for promo code</div>
                    <div>{discount}%</div>
                </div>
                <div className="price-row delimiter">
                    <div className="name">Delivery
                        <span className="additional">(Aug 02 at 16:00)</span>
                    </div>
                    <div className="price">$15</div>
                </div>
                <div className="price-row total">
                    <div className="name">Total</div>
                    <div className="price">
                        {discount === 10 ? (
                        `$${Number((orderSum-(orderSum/10)).toFixed(2))+15}`) :
                        (`$${Number(orderSum.toFixed(2))+15}`)
                        }
                    </div>
                </div>
            </div>
            <div className="button-wrapper">
                <button className="button" onClick={onCheckout}>Checkout</button>
                <div className="vertical-line"></div>
            </div>
        </div>
    )
}