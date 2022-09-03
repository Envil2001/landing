import { useState } from "react";
import Section1 from "../Section1/section1";
import Section2 from "../Section2/section2";
import Section3 from "../Section3/section3";
import Section4 from "../Section4/section4";


export function Home() {
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
                    <div className="h-7 w-7 cursor-pointer absolute  -top-8 -right-8 rounded-full flex
                    items-center justify-center bg-small-btn backdrop-opacity-70 hover:backdrop-opacity-30" onClick={() => setModalActive(!modalActive)}>
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.85 16.44a.5.5 0 0 1 0 .71l-.7.7a.5.5 0 0 1-.71 0L12 13.41l-4.44 4.44a.5.5 0 0 1-.71 0l-.7-.7a.5.5 0 0 1 0-.71L10.59 12 6.15 7.56a.5.5 0 0 1 0-.71l.7-.7a.5.5 0 0 1 .71 0L12 10.59l4.44-4.44a.5.5 0 0 1 .71 0l.7.7a.5.5 0 0 1 0 .71L13.41 12l4.44 4.44z" fill="currentColor">
                            </path>
                        </svg>
                    </div>
                    <div>
                    Expect a full version of the program. If you want to follow the news:
                    <a href="https://linktr.ee/playmanity" className="inline-block ml-1 bg-brand rounded-sm text-center cursor-pointer">Link to social media</a>
                    </div>
                </div>
            </div>
        </>
    )
}