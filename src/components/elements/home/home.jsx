import { useState } from "react";

import ButtonClose from "../../UI/ButtonClose/ButtonClose";
import Section1 from "./Section1/section1";
import Section2 from "./Section2/section2";
import Section3 from "./Section3/section3";
import Section4 from "./Section4/section4";


const Home = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <Section1 modalActive={modalActive} setModalActive={setModalActive} />
            <Section2 /> 
            <Section3 />
            <Section4 />
            <div className={`${modalActive ? "flex" : "hidden"}  backdrop-blur-lg z-40 fixed top-0 left-0 w-full h-full 
       items-center justify-center`}>
                <div className="p-10 rounded-xl bg-primary relative max-w-xs w-full">
                    <ButtonClose classes={"absolute -top-8 -right-8"} height={10} width={10} fState={modalActive} setFState={setModalActive}/>
                    <div>
                    Expect a full version of the program. If you want to follow the news:
                    <a href="https://linktr.ee/playmanity" className="inline-block ml-1 bg-brand rounded-sm text-center cursor-pointer">Link to social media</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;