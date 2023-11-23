import app_store from './../../img/app store.png'
import google_play from './../../img/google play.png'
import tg from './../../img/tg.png'
import vk from './../../img/vk.png'
import ok from './../../img/ok.png'

import "./footer.css"

function Footer (){
    return (
        <footer>
            <div className='footer_container'>
                <div className='mobile'>
                    <img src={app_store} alt='app_store' />
                    <img src={google_play} alt='google_play' />
                </div>
                <div className='social_media'>
                    <img src={tg} alt='tg' />
                    <img src={vk} alt='vk' />
                    <img src={ok} alt='ok' />
                </div>
            </div>
            <div className='license'>
                    <a href="https://www.flaticon.com/ru/free-icons/" title="телеграмма иконки">Телеграмма иконки от Pixel perfect - Flaticon</a>
                    <a href="https://www.flaticon.com/ru/free-icons/" title="одноклассники иконки">Одноклассники иконки от Md Tanvirul Haque - Flaticon</a>
            </div>
        </footer>
    )
}

export default Footer;