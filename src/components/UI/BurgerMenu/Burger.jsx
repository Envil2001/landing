import { Link } from "react-router-dom";
import ButtonClose from "../ButtonClose/ButtonClose";

const Burger = ({ mobileMenuActive, setMobileMenuActive }) => {
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
    return (
        <>
            <div className={`${mobileMenuActive ? "backdrop-blur-lg fixed" : ""} transition-all  top-0 left-0 w-full h-full z-40 bg-opacity-50 rounded-t-lg`}>
                {
                    mobileMenuActive ?
                        <div className={`${mobileMenuActive ? "translate-y-0 " : "-translate-y-full"} bottom-0 transition-all w-full delay-500 fixed left-0 rounded-t-lg bg-zinc-900`}>
                            {
                                headerMenu.map((item, index) => (
                                    <Link to={item.link} key={index}>
                                        <div  className="Body-13 px-10 flex items-center text-white cursor-pointer
                               hover:text-brand h-20">{item.name}
                                        </div>
                                    </Link>
                                ))
                            }
                            <ButtonClose classes={"absolute -top-10 right-0"} height={8} width={8} fState={mobileMenuActive} setFState={setMobileMenuActive}/>
                        </div>

                        :
                        null
                }
            </div>


        </>
    )
};

export default Burger;