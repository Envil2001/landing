import Button from "../../../UI/Button/Button";

import Image1 from "../../../../assets/titleimage.jpg";

const Section1 = ({ modalActive, setModalActive }) => {
    return (
        <div className="relative">
            <div className="container">
                <div className="row">
                    <div className="md:p-16 md:w-2/4 p-8 w-full">
                        <h1 className="Title">All paid games have become free thanks to advertising.</h1>
                        <div className="mt-8">
                            <span className="normal-text">Select the game you want to play. It can be a library or a home page.</span>
                        </div>
                        <div className="mt-10">
                            <div onClick={() => setModalActive(!modalActive)} >
                                <Button text={"Open Playmanity"} />
                            </div>
                            
                        </div>
                    </div>
                    <div className="md:p-16 md:w-2/4  p-8 w-full">
                        <img alt="image1" src={Image1} className="rounded-md overflow-hidden" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section1;