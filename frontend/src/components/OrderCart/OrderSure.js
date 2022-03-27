import React, { useContext } from 'react'
import "./orderCart.css"
import { CardContext } from "../../context/CardContext";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import axios from 'axios';
function OrderSure(props) {
    const currentLanguageCode = cookies.get("i18next") || "en";
    const { t } = useTranslation();

    const { cart, setCart } = useContext(CardContext)
    const user = localStorage.getItem("token")
    const token = JSON.parse(user).token;



    // console.table(cart)

    const handleRemoveField = (e, index) => {
        e.preventDefault();

        setCart((prev) => prev.filter((item) => item !== prev[index]));
        // localStorage.setItem("cart", cart)
    }
    // console.log(cart)

    const order = cart;

    let prod = [];
    let quant = [];
    order.forEach((item, index) => {
        prod = [...prod, item._id]
        quant = [...quant, item.quantity]

    })

    // // console.log(prod, quant)
    // let formdata = new FormData()
    // formdata.append('product', prod);
    // formdata.append('quantity', quant);



    // console.log(formdata)



    const add = async () => {
        // const token = 
        await axios.post(`${process.env.REACT_APP_MAIN_URL}cart/`, {
            products: [

            ]

        }, {
            headers: {
                authorization: "Bearer " + token,
            },
        })
        window.location.reload(false)
        alert(" دروست کرا")
    }



    const updateFieldChanged = index => e => {

        // name = e.target.name //key

        let newArr = [...cart]; // copying the old datas array
        newArr[index][e.target.name] = e.target.value; //key and value
        setCart(newArr);
    }

    return (
        <div className='ordercart-container' dir='rtl'>
            <div className="shopping-cart">
                <div className="shopping-cart-header">
                    <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{t("sure")}</span>
                    {/* <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$2,229.97</span>
                    </div> */}
                </div>


                <ul className="shopping-cart-items">
                    {cart.map((e, index) => {
                        return <li className="clearfix " >
                            <img src={`http://api.biotech.cf${e.image}`} alt="item1" />
                            <span className="item-name">{currentLanguageCode === "ar" ? e.nameAR : e.nameKR}</span>
                            {/* <span className="item-price">$849.99</span> */}
                            <span className="item-quantity">{e.quantity} : {t("quantity")} </span>
                            <span className="item-price">{isNaN(e.quantity) ? "select" : `$ ${e.quantity * e.price}`}</span>

                        </li>
                    })}
                </ul>
                {/* <span className="item-quantity">Tebini</span>

                <textarea className='tebini' /> */}
                <p>{props.note} : {t("note")}</p>
                <a href="#" className="button" onClick={props.toggle} style={{ background: "grey" }}>{t("Close")}</a>
                <a href="#" className="button" onClick={props.toggle}>{t("checkout")}</a>
            </div>

        </div>
    )
}

export default OrderSure