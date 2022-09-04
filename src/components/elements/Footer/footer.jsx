import TikTok from "../../../assets/icon/tiktok.svg";
import Instagram from "../../../assets/icon/instagram.svg";
import Telegram from "../../../assets/icon/telegram.svg";
import Diskord from "../../../assets/icon/diskord.svg";
import Twitter from "../../../assets/icon/twitter.svg";
import YouTube from "../../../assets/icon/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="py-10  px-8 ">
                <div className="flex items-center justify-center flex-col text-center pb-10">
                    <h3 className="text-white font-bold text-lg">Playmanity</h3>
                    <p className="text-sm text-text-body pb-10">Email: playmanity@gmail.com</p>
                    <div className="gap-2 flex">
                        <a href="https://www.tiktok.com/@playmanity" className="rounded-full h-10 w-10 flex justify-center items-center bg-primary">
                            <img src={TikTok} alt="Tik Tok" className="w-5" />
                        </a>
                        <a href="https://www.instagram.com/playmanity/" className="rounded-full h-10 w-10 flex justify-center items-center bg-primary">
                            <img src={Instagram} alt="Instagram" className="w-5" />
                        </a>
                        <a href="https://t.me/playmanity" className="rounded-full h-10 w-10 flex justify-center items-center bg-primary">
                            <img src={Telegram} alt="Telegram" className="w-5" />
                        </a>
                        <a href="https://discord.com/invite/playmanity" className="rounded-full h-10 w-10 flex justify-center items-center bg-primary">
                            <img src={Diskord} alt="Diskord" className="w-5" />
                        </a>
                        <a href="https://twitter.com/playmanity" className="rounded-full h-10 w-10 flex justify-center items-center bg-primary">
                            <img src={Twitter} alt="Twitter" className="w-5" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCx6Lrn7heLP17FNc1eNqQZA" className="rounded-full h-10 w-10 flex justify-center items-center bg-primary">
                            <img src={YouTube} alt="YouTube" className="w-5" />
                        </a>
                    </div>
                    <div className="flex gap-8 pt-8">
                        <span><Link to="/">Home</Link></span>
                        <span><Link to="/team">Our team</Link></span>
                        <span><Link to="/faq">FAQ</Link></span>
                        <span><Link to="/release-notes">Release notes</Link></span>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-3 gap-2 text-center flex-col">
                    <p className="text-sm text-text-body">coopyright &copy;2022 Playmanity.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;