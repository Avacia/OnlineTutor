import style from './Footer.module.css'

export default function Footer(){
    return(
        <div className={style.footerContainer}>
            <p>@Copyright 2024 Online Tutor | All right reserved</p>
            <p>Legal Information</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
        </div>
    )
}