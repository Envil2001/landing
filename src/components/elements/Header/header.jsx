import Button from "../../UI/Button/Button";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ menuActive, setMenuActive }) => {
    const [showHeader, setShowHeader] = useState(true);
    const controlHeader = () => {
        window.scrollY > 100 ? setShowHeader(false) : setShowHeader(true);
    }
    useEffect(() => {
        window.addEventListener('scroll', controlHeader)
        return () => {
            window.removeEventListener('scroll', controlHeader)
        }

    }, []);

    const headerMenu = [
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
            link: "/release-notes"
        },
    ];

    const handleChange = () => {
        setMenuActive(!menuActive);
    }
    return (
        <header className={`fixed z-20 w-full  translate-y-0 ease-in-out duration-300  ${!showHeader ? 'translate-y-[-100%]' : ''}`}>
            <div className="md:h-32 h-24 w-full flex items-center">
                <div className="container lg:px-16 px-8">
                    <div className="flex items-center">

                        <div className="md:hidden block cursor-pointer" onClick={() => handleChange()}>
                            <svg className="f--icon-medium" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 7h-17a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5zm.5 5.5v-1a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5zm0 6v-1a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5z" fill="currentColor"></path></svg>
                        </div>
                        <div className="sm:flex hidden items-center Body-13 cursor-pointer text-white md:justify-start md:flex-none justify-center flex-auto">
                            <Link to="/">
                                <div className="flex">
                                    <img alt="logo" src={Logo} className="mr-10" />
                                    Playmanity
                                </div>
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center justify-center flex-auto gap-x-20">
                            {
                                headerMenu.map((item, index) => (
                                    <Link to={item.link} key={index}><div  className="Body-13 text-white cursor-pointer hover:text-brand">{item.name}</div></Link>
                                ))
                            }
                        </div>
                        <div className="sm:ml-0 ml-auto">
                            <Button text={"Play for free"} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;