import Ad from "../../../../assets/ad.png"
const Section3 = () => {
    return (
        <div className="relative">
            <div className="container">
                <div className="row">
                    <div className="md:p-16 md:w-2/4 p-8 w-full">
                        <h1 className="Title">Watch the ad.</h1>
                        <div className="mt-16">
                            <span className="normal-text">All-in-one solution to organize, grow and monetize gaming
                                communities and esports competitions.</span>
                        </div>

                    </div>
                    <div className="md:p-16 md:w-2/4  p-8 w-full">
                        <img alt="ads" src={Ad} className="rounded-md overflow-hidden" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section3;