import React, { useState, useEffect } from 'react';
// import "./nav.css"
import aa from '../../images/logo.png';
// import { GrLanguage } from 'react-icons/gr';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GrCart } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
// import OrderCart from '../OrderCart/OrderCart';
import { Navbar as Navs } from './Navbar.style';
import OrderCart from '../OrderCart/OrderCart';
// import Cookies from 'js-cookie';
function Nav() {
    // const usePathname = () => {
    //     const location = useLocation();
    //     return location.pathname;
    // }
    // console.log(usePathname)
    // console.log(window.location.href === 'http://localhost:3000/')

    // const [cartShow, setcartShow] = useState(false);
    // const toggle = () => {
    //     setcartShow(false);
    // };

    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const menuHandler = () => {
        setOpen(!open);
    };
    const togglelang = () => {
        if (i18next.language === 'ku') {
            i18next.changeLanguage('ar');
        } else {
            i18next.changeLanguage('ku');
        }
        window.location.reload(false)
        // console.log(i18next.language)
    };


    // useEffect(() => {

    //     Cookies.set('i18next', i18next.language);
    //     console.log(Cookies.get('i18next'))
    //     // console.log(i18next.language)

    // }, [togglelang])


    const toggleCart = () => setOpenCart(!openCart);

    return (
        <>
            <Navs bg="white" fg="black">
                <h6 className="ax">.</h6>
                <div className="nav_container " dir="rtl">
                    <div
                        className={`hamburger ${open ? 'open ' : ''}`}
                        onClick={() => {
                            menuHandler();
                        }}
                    >
                        <div className={`line top ${open ? 'open ' : ''}`}></div>
                        <div className={`line middle ${open ? 'open ' : ''}`}></div>
                        <div className={`line bottom ${open ? 'open ' : ''}`}></div>
                    </div>
                    <ul className={open ? 'open ' : ''}>
                        <div className="nav-logo">
                            <a href="/">
                                <img src={aa} alt="logo" />
                            </a>
                        </div>
                        <li>
                            <a
                                href="/"
                                onClick={() => {
                                    menuHandler();
                                }}
                            >
                                {t('home')}
                            </a>
                        </li>


                        <li>
                            <a
                                href="#brand-section"
                                onClick={() => {
                                    menuHandler();
                                }}
                            >
                                {t('brands')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about-section"
                                onClick={() => {
                                    menuHandler();
                                }}
                            >
                                {t('about_us')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#map-section"
                                onClick={() => {
                                    menuHandler();
                                }}
                            >
                                {t('locations')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact-section"
                                onClick={() => {
                                    menuHandler();
                                }}
                            >
                                {t('call_us')}
                            </a>
                        </li>
                        <div className="nav-utils">
                            <div className="cart-logo" onClick={togglelang}>
                                <a>{t('lang')}</a>
                            </div>
                            <div
                                className="cart-logo"
                                onClick={() => {
                                    // setcartShow(true);
                                    toggleCart();
                                    menuHandler();
                                }}
                            >
                                <GrCart />
                            </div>
                            <div className="cart-logo">
                                <Link
                                    to="/login"
                                    className="link"
                                    onClick={() => {
                                        menuHandler();
                                    }}
                                >
                                    <CgProfile className="c-icon" />
                                </Link>
                            </div>
                        </div>
                    </ul>
                </div>
            </Navs>
            <OrderCart toggle={toggleCart} openCart={openCart} setOpenCart={setOpenCart} />{' '}
        </>
    );
}

export default Nav;

// < div className = "nav" >
//         <input type="checkbox" id="nav-check" />
//         <div className="nav-header">
//             <div className='nav-utils' style={{ marginLeft: "30px" }}>
//                 <div className="dropdown" >
//                     <button className="dropbtn dropsize"><GrLanguage /></button>
//                     <div className="dropdown-content" style={{ textAlign: "center" }}>
//                         <a href="#!" onClick={() => {

//                             i18next.changeLanguage("ku");
//                         }}>کوردی</a>
//                         <a href="#!" onClick={() => {

//                             i18next.changeLanguage("ar");
//                         }}>عربی</a>

//                     </div>
//                 </div>

//                 <div className='cart-logo' onClick={() => setcartShow(true)}>
//                     <GrCart />
//                 </div>
//                 <div className='cart-logo'>
//                     <Link to="/login" className='link'>
//                         <CgProfile />
//                     </Link>
//                 </div>
//             </div>
//             {/* <div className="nav-title">

//                 <div className='nav-logo'>

//                 </div>
//             </div> */}
//         </div>
//         <div className="nav-btn">
//             <label htmlFor="nav-check">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </label>
//         </div>

//         <div className="nav-links">
//             <a href="#home-section"> {t("home")}</a>
//             <a href="#about-section">{t("about_us")}</a>
//             <a href="#brand-section">{t("brands")}</a>
//             <a href="#contact-section">{t("call_us")}</a>

//         </div>

//     </div >
// <nav className='nav-main container ' dir='rtl'>
//     <div className='nav-logo'>
//         <a href='/'>
//             <img src={aa} alt="logo" />
//         </a>
//     </div>
//     <div className='nav-routes'>
//         <ul>
//             <li><a href="#home-section">{t("home")}</a></li>
//             <li><a href="#about-section">{t("about_us")}</a></li>
//             <li><a href="#brand-section">{t("brands")}</a></li>
//             <li><a href="#contact-section">{t("call_us")}</a></li>
//         </ul>
//     </div>

// </nav>
