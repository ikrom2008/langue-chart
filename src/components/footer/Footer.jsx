import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'
function Footer() {
    let {t} = useTranslation()
  return (
    <>
      <footer className='footer'>
        <div className='uls'>
        <ul>
            <li><strong>{t("biz")}</strong></li>
            <li>{t("topshirish")}</li>
            <li>{t("vakansiya")}</li>
        </ul>
        <ul>
            <li><strong>{t("foydalanuvchilar")}</strong></li>
            <li>{t("bizbilan")}</li>
            <li>{t("savollar")}</li>
        </ul>
        <ul>
            <li><strong>{t("tadbirkor")}</strong></li>
            <li>{t("uzumda")}</li>
            <li>{t("kabinet")}</li>
        </ul>
        <ul>
            <li><strong>{t("ilova")}</strong></li>
            <li>AppStore GooglePlay</li>
            <li>{t("tarmoq")}</li>
        </ul>
        </div>
        <hr />
        <p>{t("maxfiylik")} {t("kelishuv")}<span>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</span></p>
      </footer>
    </>
  )
}

export default Footer
