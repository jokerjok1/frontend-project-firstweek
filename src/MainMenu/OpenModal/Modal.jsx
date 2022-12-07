import React from "react";
import styles from "./Modal.module.scss";
import xDelete from './filesModal/eva_close-fill.png'
import logo from './filesModal/logo.png'

function ModalWindow({setModalWindow, modalWindow}) {
  const handleOpenWindow = () => {
    setModalWindow(!modalWindow)
  }
  return (
    <div className={styles.parentModal}>
      <div className={styles.opacity_block}>
      <div className={styles.backgroundPhoto}>

        <div className={styles.bookingWindow}>

            <div  onClick={() => handleOpenWindow()} className={styles.divX}>
                <img src={xDelete} alt="x" className={styles.imgX} />
            </div>

            <div className={styles.divLogo}>
                <img src={logo} alt="logo" className={styles.imgLogo} />
            </div>

            <div className={styles.divTextBooking}>
                <div className={styles.textBooking}>Забронировать столик</div>
            </div>

            <div className={styles.divInpName}>
                <input type="text" placeholder=" Имя" className={styles.inpName} />
            </div>

            <div className={styles.divInpPhone}>
                <input type="text" placeholder=" Телефон" className={styles.inpPhone} />
            </div>

            <div className={styles.divBtnTableAndTime}>
                <button className={styles.btnTable}>Столик</button>

                <button className={styles.btnTime}>Время</button>
            </div>

            <div className={styles.divBtnBooking}>
                <button className={styles.btnBooking}>Забронировать</button>
            </div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default ModalWindow;
