import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useTranslation } from "react-i18next";

import "./brands.css"
import Card from "../../components/brand-card/Card"
import { Link } from "react-router-dom"
function Brands() {
    const [brand, setbrand] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_MAIN_URL}brand/`).then((response) => {
            setbrand(response.data)

        });
    }, []);
    return (
        <div id='brand-section' className='brands-section'>
            <div className='container-brand '>
                <h1 className='titleHead'>{t('brands')}</h1>

                <div className="ccontainer">
                    {
                        brand.map((e) => (
                            <Link key={e._id} to={`/brands/${e._id}`}>
                                <Card
                                    name={e.name}
                                    logo={e.logo}
                                    desc={e.description}
                                />

                            </Link>
                        ))

                    }

                </div>
            </div>


        </div>
    )
}

export default Brands