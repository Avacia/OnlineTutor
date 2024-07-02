/* ================================ Import File ============================= */
/* =================== Common File =========================== */
import Image from '/online-tutor-high-resolution-logo-removebg-preview.png'
import Home from '../../../components/Home/home'
import AboutUs from '../../../components/AboutUs/aboutUs'
import ContactUs from '../../../components/ContactUs/contactUs'
import Settings from '../../../components/Settings/settings'
import Login from './login'
import style from './headBar.module.css'

/* =================== Import Functions ====================== */
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function headBar(){

    const location = useLocation()
    const [itemClicked, setItemClicked] = useState(null)

    useEffect(() => {
        const data = window.localStorage.getItem("Online_Tutor_HeadBar_ItemClicked")
        if(data !== null){
            setItemClicked(JSON.parse(data))
        }
        else{
            setItemClicked("Home")
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("Online_Tutor_HeadBar_ItemClicked", JSON.stringify(itemClicked))
    }, [itemClicked])


    function changeItemClicked(item){
        setItemClicked(item)
    }

    function getClassName(path){
        return location.pathname === path ? style.menuBtnActive : style.menuBtn
    }

    return(
        <div className={style.headBar}>

            <div className={style.logoContainer}>

                <NavLink to='/'>

                    <button className={style.logoBtn}>
                        <img className={style.logoImage} src={Image} alt='logo'/>
                    </button>

                </NavLink>

            </div>

            <div className={style.menuContainer}>

                <NavLink to='/'>
                    <button className={getClassName('/')} onClick={() => changeItemClicked("Home")}>Home</button>
                </NavLink>

                <NavLink to='/aboutUs'>
                    <button className={getClassName('/aboutUs')} onClick={() => changeItemClicked("AboutUs")}>About Us</button>
                </NavLink>

                <NavLink to='/contactUs'>
                    <button className={getClassName('/contactUs')} onClick={() => changeItemClicked("ContactUs")}>Contact Us</button>
                </NavLink>                

            </div>

            <div className={style.loginContainer}>
                <button className={style.loginBtn}>Sign Up</button>
                <button className={style.loginBtn}>Login</button>
            </div>

        </div>
    )
}