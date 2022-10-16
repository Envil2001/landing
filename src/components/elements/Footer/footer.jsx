import TikTok from "../../../assets/icon/tiktok.svg";
import Instagram from "../../../assets/icon/instagram.svg";
import Telegram from "../../../assets/icon/telegram.svg";
import Diskord from "../../../assets/icon/diskord.svg";
import Twitter from "../../../assets/icon/twitter.svg";
import YouTube from "../../../assets/icon/youtube.svg";
import { Link } from "react-router-dom";

const footerInfo = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Our team",
        link: "/team",
    },
    {
        name: "FAQ",
        link: "/faq",
    },
    {
        name: "Release notes",
        link: "/release-notes",
    },
    {
        name: "For Advertisers",
        link: "/for-advertisers",
    },
    {
        name: "For Game Developers",
        link: "/for-game-developers",
    }
];

const linkIcon = [
    {
        name: "Tik Tok",
        link: "https://www.tiktok.com/@playmanity",
        image: TikTok
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/playmanity/",
        image: Instagram
    },
    {
        name: "Telegram",
        link: "https://t.me/playmanity",
        image: Telegram
    },
    {
        name: "Diskord",
        link: "https://discord.com/invite/playmanity",
        image: Diskord
    },
    {
        name: "Twitter",
        link: "https://twitter.com/playmanity",
        image: Twitter
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCx6Lrn7heLP17FNc1eNqQZA",
        image: YouTube
    },
]

const Footer = () => {
    return (
        <footer>
            <div className="py-10  px-8 ">
                <div className="flex items-center justify-center flex-col text-center pb-10">
                    <h3 className="text-white font-bold text-lg">Playmanity</h3>
                    <p className="text-sm text-text-body pb-10">Email: playmanity@gmail.com</p>
                    <div className="gap-2 flex">
                        {
                            linkIcon.map((item, index) => (
                                <a key={index} href={item.link} className="rounded-full h-10 w-10 flex justify-center items-center bg-primary">
                                    <img src={item.image} alt={item.name} className="w-5" />
                                </a>
                            ))
                        }
                    </div>
                    <div className="flex gap-8 pt-8">
                        {
                            footerInfo.map((item, index) => (
                                <span key={index}><Link to={item.link} key={index}>{item.name}</Link></span>
                            ))
                        }
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