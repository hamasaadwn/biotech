import React from 'react';
import './contact.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

import { useTranslation } from 'react-i18next';




import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#ff9500',
    border: '8px solid #ff9500',
    borderRadius: "20px",
    boxShadow: 14,
    color: "white",
    p: 4,

};

function Contact() {

    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div id="contact-section" className="contact-section2 ">
            <div className="contact-content2">
                <div className="contact-card-parent" >
                    <div className="contact-card ">
                        <a href="https://www.facebook.com/Biotech-iraq-100858022481350" target="_blank" rel="noreferrer" className="contact-link">
                            <div className="card-icon">
                                <FaFacebookF />
                            </div>

                            <div className="card-number">
                                <h2>biotech/facebook</h2>
                            </div>
                        </a>
                    </div>
                    <div className="contact-card">
                        <a href="https://www.instagram.com/biotech.iraq/?hl=en" target="_blank" rel="noreferrer" className="contact-link">
                            <div className="card-icon">
                                <FaInstagram />
                            </div>

                            <div className="card-number">
                                <h2>biotech instagram</h2>
                            </div>
                        </a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-link">
                            <div className="card-icon">
                                <AiOutlineMail />
                            </div>

                            <div className="card-number">
                                <h2>biotech.2022@gmail.com</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="contact-card-parent " style={{ justifyContent: "center" }} >
                    <div className="contact-card ">
                        <div className="contact-link" onClick={handleOpen} style={{ cursor: "pointer" }}>


                            <div className="card-number">
                                <h2>{t('far3s')}</h2>
                            </div>
                            <div className="card-icon">
                                <AiOutlinePhone />

                            </div>
                        </div>
                    </div>



                </div>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} dir="rtl" >
                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                            {t('far3s')}
                        </Typography> */}
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} >

                            <div className="contact-card-parent"  >
                                <a href="tel:07501021920" className="contact-link">
                                    <div className="card-icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="contact-card">
                                        <h2>م.المبیعات</h2>
                                        <div className="card-number">
                                            <h2 dir='ltr'>0750 102 1920</h2>
                                        </div>

                                        <h2>د.هێرش</h2>

                                    </div>
                                </a>

                                <a href="tel:07508370072" className="contact-link">
                                    <div className="card-icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="contact-card">
                                        <h2>م.المبیعات</h2>
                                        <div className="card-number">
                                            <h2 dir='ltr'>0750 837 0072</h2>
                                        </div>

                                        <h2>د.بێستوون</h2>

                                    </div>
                                </a>

                                <a href="tel:07730117344" className="contact-link">
                                    <div className="card-icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="contact-card">
                                        <h2>م.المبیعات</h2>
                                        <div className="card-number">
                                            <h2 dir='ltr'>0773 011 7344</h2>
                                        </div>

                                        <h2>د.بەڵێن</h2>

                                    </div>
                                </a>
                                <a href="tel:07702223200" className="contact-link">
                                    <div className="card-icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="contact-card">
                                        <h2>م.تیم صیدلیات</h2>
                                        <div className="card-number">
                                            <h2 dir='ltr'>0770 222 3200</h2>
                                        </div>

                                        <h2>د.ئارام</h2>

                                    </div>
                                </a>
                                <a href="tel:07511161061" className="contact-link">
                                    <div className="card-icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="contact-card">
                                        <h2>م.التحصیل</h2>
                                        <div className="card-number">
                                            <h2 dir='ltr'>0751 116 1061</h2>
                                        </div>

                                        <h2>فلاح</h2>

                                    </div>
                                </a>
                            </div>
                        </Typography>
                    </Box>
                </Modal>

            </div>
            <div className="created-by">
                Developed and designed by{' '}
                <a href="/#" className="created-by-link">
                    Online Guard
                </a>
                ©2022. all rights reserved
            </div>
        </div>
    );
}

export default Contact;


