import { FaChartPie , FaRegHeart } from 'react-icons/fa6'
import './Header.css'
import imglogo from '../../assets/uzum-logo.png'
import { IoIosSearch } from 'react-icons/io'
import { GrCatalog } from 'react-icons/gr'
import { FiShoppingCart } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import mudattli from '../../assets/union.png'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
    const [lang,setLang] = useState(localStorage.getItem("i18nextLng") || "uz")
    let locitem = localStorage.getItem("i18nextLng")
    if(locitem === "ru-UZ"){
        localStorage.setItem("i18nextLng","uz")
    }
    let {t, i18n} = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(lang)
    },[lang])
    let navigate = useNavigate()
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
            <div className='loc'>
            <IoLocationOutline />
            <p>{t("selectlabel")}:</p>
            <select name="" id="">
                <option value="">{t("selectvalue.value1")}</option>
                <option value="">{t("selectvalue.value2")}</option>
            </select>
            <p style={{fontSize: '16px',fontWeight: '500'}}>{t("topshirish")}</p>
            </div>
            <p style={{opacity: '0.6'}}>{t("yetkazish")}</p>
            <div className='contact'>
                <p>{t("savollar")}</p>
                <p>{t("buyurtmalar")}</p>
                <select value={lang} onChange={(e) => setLang(e.target.value)} name="" id="">                    
                    <option value="ru">{t("selectlang.lang2")}</option>
                    <option value="uz">{t("selectlang.lang1")}</option>
                    <option value="en">{t("selectlang.lang3")}</option>
                </select>
            </div>
        </nav>
        <div className='logos'>
            <div className='logo'>
            <img src={imglogo} width={32} height={32} alt="" />
            <h2>uzum market</h2>
            </div>
            <div className='filter'>
                <button><GrCatalog />{t("katalog")}</button>
                <div>
                    <input type="text" name="" id="" placeholder={t("inpplaseholder")} />
                    <button><IoIosSearch /></button>
                </div>
            </div>
            <div className='pages'>
                <button onClick={() => navigate('/chart')}><FaChartPie size={20} />{t("chart")}</button>
                <button><FaRegHeart size={20} />{t("wish")}</button>
                <button><FiShoppingCart size={20} />{t("cart")}</button>  
            </div>
        </div>
        <div className='categoryes'>
            <ul>
                <p><img src={mudattli} width={24} height={24} alt="" /><strong>{t("muddatlitv")}</strong></p>
                <p><img src={mudattli} width={24} height={24} alt="" /><strong>{t("news")}</strong></p>
                <p><img src={mudattli} width={24} height={24} alt="" /><strong>{t("salqinlik")}</strong></p>
                <p><img src={mudattli} width={24} height={24} alt="" /><strong>{t("bassen")}</strong></p>
                <li>{t("elektronika")}</li>
                <li>{t("texnika")}</li>
                <li>{t("kiyim")}</li>
                <li>{t("poyabzal")}</li>
                <li>{t("aksesuar")}</li>
                <li>{t("gozallik")}</li>
                <li>{t("salomatlik")}</li>
                <select name="" id="">
                    <option value="">{t("yana")}</option>
                </select>
            </ul>
        </div>
      </header>
    </>
  )
}

export default Header
