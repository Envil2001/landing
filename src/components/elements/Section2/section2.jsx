import Libr from "../../../assets/library.jpg";

const Section2 = () => {
    return (
        <div className="relative">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="md:p-16 md:w-2/4  p-8 w-full">
                        <h1 className="Title">Choose the game you like.</h1>
                        <div className="mt-16">
                            <span className="normal-text">View a short advertisement..</span>
                        </div>
                    </div>
                    <div className="md:p-16 md:w-2/4  p-8 w-full">
                        <img alt="library" src={Libr} className="rounded-md overflow-hidden" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section2;