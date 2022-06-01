import React, { useState, useEffect } from 'react';
import './PrevOrders.css';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios'
import CardMedia from '@mui/material/CardMedia';
const style = {

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#ff9500',
    border: '1px solid #ff9500',
    borderRadius: "20px",
    boxShadow: 14,
    color: "white",
    p: 2,
};
function PrevOrders() {
    const [ID, setID] = useState('')
    const [open, setOpen] = useState(false);
    const [orders, setorders] = useState([]);
    const handleOpen = (id) => {
        setOpen(true);
        setID(id);
    };
    const handleClose = () => setOpen(false);
    const { t } = useTranslation();
    const user = localStorage.getItem("token")
    const token = JSON.parse(user).token;

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_MAIN_URL}cart/`, {
            headers: {
                authorization: "Bearer " + token,
            }
        }).then((response) => {
            setorders(response.data)
        });
    }, []);

    const userID = JSON.parse(user)._id

    return (
        <>
            <div className="account">
                <h1 className='titleHead'>{t('porders')}</h1>
                <h1 className='titleHead'> {orders.filter(e => e.userId === userID).reduce((a, v) => a = a + v.total, 0) / 100} {t('stars')} </h1>
                <div className='order-container' dir='rtl'>
                    {orders.slice(0).reverse().filter(e => e.userId === userID).map(e => (
                        <>
                            <Box key={e._id} component="span"
                                sx={{ display: 'inline-block', position: "relative", padding: "1%", transform: 'sca</Box>le(0.8)' }}>
                                <Card sx={{ minWidth: 275, backgroundColor: "#ff9500" }}>
                                    <CardContent>
                                        <Typography sx={{ mb: 1.5, color: "white" }} color="text.secondary">
                                            {e.products.length} {t('product')}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5, color: "white" }} color="text.secondary">
                                            {t('total')}   {e.total}$
                                        </Typography>

                                        <Typography sx={{ fontSize: 14, color: "white" }} color="text.secondary" gutterBottom>
                                            {t('date')} {e.createdAt}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" color="success" sx={{ backgroundColor: 'white', color: "black" }} className="hoveredBtn" onClick={() => handleOpen(e._id)}>{t('view')}</Button>
                                        {/* onClick=()=>{handleOpen(e._id)} */}
                                    </CardActions>
                                </Card>

                            </Box>
                        </>
                    ))}

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style} className="flexDown">
                                {orders.filter(e => e._id === ID).map(e => (
                                    <>
                                        {e.products.map(e => {
                                            return <Card sx={{ display: 'flex', justifyContent: "space-between", margin: "5px 0", width: "100%", height: "20vh" }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                                        <Typography component="div" variant="h5" style={{ fontSize: "3vmin" }}>
                                                            {e.product.nameKR}
                                                        </Typography>
                                                        <Typography color="text.secondary" component="div" variant="h5" style={{ fontSize: "4vmin" }}>
                                                            {e.quantity} {t("quantity")}
                                                        </Typography>
                                                        <Typography color="text.secondary" component="div" variant="h5" style={{ fontSize: "4vmin" }}>
                                                            ${e.total} {t('total')}
                                                        </Typography>
                                                    </CardContent>

                                                </Box>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: 151 }}
                                                    image={`https://api.biotechiraq.com${e.product.image}`}
                                                    alt="Products"
                                                />
                                            </Card>
                                        })}
                                    </>
                                ))}
                            </Box>
                        </Fade>
                    </Modal>
                </div>

            </div>
        </>
    )
}

export default PrevOrders