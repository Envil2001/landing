

const CustomInput = ({ classes, placeholder, handleChange, value, type, textarea, fiedName }) => {
    return (
        <div className={`h-20 w-full ${classes}`}>
            {
                textarea ?
                    <textarea cols="40" rows="6" placeholder={placeholder} value={value} type={type}
                        onChange={(e) => handleChange(e, fiedName)}
                        className="resize-none h-32  w-full text-white rounded-full bg-input px-10 py-5" />
                    :
                    <input placeholder={placeholder} value={value} type={type}
                        onChange={(e) => handleChange(e, fiedName)}
                        className="h-full w-full text-white rounded-full bg-input px-10 py-5" />
            }
        </div>
    )
}

export default CustomInput;