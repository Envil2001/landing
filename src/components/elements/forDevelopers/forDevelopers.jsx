
import { useState } from "react";

import Button from "../../UI/Button/Button";
import CustomInput from "../../UI/Input/Input";

const initialValues = {
    inputName: '',
    inputCompany: '',
    inputAbout: ''
}
function ForDevelopers() {
    const [InputData, setInputData] = useState(initialValues);
    // console.log('InputData', InputData);
    const handleInputChange = (e, InputName) => setInputData((prevState) => ({
        ...prevState,
        [InputName]: e.target.value
    }))
    return (
        <>
            <div className="py-10  px-8 ">
                <div className="flex items-center justify-center flex-col text-center w-full max-w-3xl m-auto">
                    <h3 className="Title pb-10">Are you a game developer and want to join us ?</h3>
                    <form className="mt-10 w-11/12 ">
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
                        <Button text="Confirm" classes={"w-1/2 block m-auto"} submit />
                    </form>
                </div>
            </div>
            <div className="mt-20 bg-primary">
                <div className="px-8  py-20 w-full max-w-3xl m-auto">
                    <h1 className="Title mb-2 text-center">We would be happy to talk to you.</h1>
                    <p className="normal-text mb-10">If you want to learn more about the development of Playmanity or you are interested in the capabilities of the developer API, join our discord channel.</p>
                    <a href="https://discord.com/invite/playmanity"><Button text="Our diskord" classes={"w-1/2 block m-auto"} /></a>
                </div>
            </div>
        </>
    )
}

export default ForDevelopers;
