import Play from "../../../assets/play.png";
const Section4 = () => {
    return (
        <div className="relative">
            <div className="container">
                <div className="p-16">
                    <div className="text-center mb-20 max-w-[50rem] w-full m-auto">
                        <h1 className="Title ">Play and enjoy.</h1>
                    </div>
                    <div>
                        <img alt="play" src={Play} className="max-w-[40rem] w-full m-auto rounded-md overflow-hidden"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section4;