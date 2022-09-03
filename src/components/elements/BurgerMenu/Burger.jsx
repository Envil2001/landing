import { Link } from "react-router-dom";

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
            <div className={`${mobileMenuActive ? "backdrop-blur-lg fixed top-0 left-0 w-full h-full z-40 bg-opacity-50 rounded-t-lg" : ""}`}>
                {
                    mobileMenuActive ?
                        <div className={`${mobileMenuActive ? "bottom-0" : "-bottom-full"} w-full fixed left-0 rounded-t-lg bg-zinc-900`}>
                            {
                                headerMenu.map((item, index) => (
                                    <Link to={item.link} key={index}>
                                        <div  className="Body-13 px-10 flex items-center text-white cursor-pointer
                               hover:text-brand h-20">{item.name}
                                        </div>
                                    </Link>
                                ))
                            }
                            <div className="absolute flex items-center justify-center cursor-pointer top-5 right-5 h-10 w-10 rounded-full bg-neutral-700 hover:bg-opacity-75" onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.85 16.44a.5.5 0 0 1 0 .71l-.7.7a.5.5 0 0 1-.71 0L12 13.41l-4.44 4.44a.5.5 0 0 1-.71 0l-.7-.7a.5.5 0 0 1 0-.71L10.59 12 6.15 7.56a.5.5 0 0 1 0-.71l.7-.7a.5.5 0 0 1 .71 0L12 10.59l4.44-4.44a.5.5 0 0 1 .71 0l.7.7a.5.5 0 0 1 0 .71L13.41 12l4.44 4.44z" fill="currentColor">

                                    </path>
                                </svg>
                            </div>
                        </div>

                        :
                        null
                }
            </div>


        </>
    )
};

export default Burger;