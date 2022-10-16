
import { useState } from "react";

import Button from "../../UI/Button/Button";
import CustomInput from "../../UI/Input/Input";

const initialValues = {
    inputName: '',
    inputCompany: '',
    inputAbout: ''
}
function ForAds() {
    const [InputData, setInputData] = useState(initialValues);
    // console.log('InputData', InputData);
    const handleInputChange = (e, InputName) => setInputData((prevState) => ({
        ...prevState,
        [InputName]: e.target.value
    }))
    return (
        <div className="py-10  px-8 ">
            <div className="flex items-center justify-center flex-col text-center w-full max-w-3xl m-auto">
                <h3 className="Title pb-10">Advertising your product can be a fantastic way to help you attract more users, increase your reach and give it a marketing boost.
                    Before you decide to publish an ad, make sure that you have ready-made promotional materials, such as a description of your product and several banner images! <b style={{color: "#5F62F1"}}>Free Trial 5000 ads views</b></h3>
                <div className="">
                    <div className="arrow"></div>
                </div>
                <form className="mt-20 w-11/12 ">
                    <div className="space-y-10 mb-40">
                        <CustomInput classes={"w-full"} handleChange={handleInputChange} placeholder="Email" type="email" value={InputData.inputName} fiedName="inputName">
                            Email
                        </CustomInput>
                        <CustomInput classes={"w-full"} handleChange={handleInputChange} placeholder="Company Name" type="text" value={InputData.inputCompany} fiedName="inputCompany">
                            Name Company
                        </CustomInput>
                        <CustomInput classes={"w-full"} handleChange={handleInputChange} value={InputData.inputAbout} fiedName="inputAbout" textarea >
                            About your company
                        </CustomInput>
                    </div>
                    <Button text="Confirm" classes={"w-full"} submit />
                </form>
            </div>
        </div>
    )
}

export default ForAds;
