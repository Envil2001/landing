

const Button = ({text}) => {
    return (
        <button className="bg-brand rounded-3xl px-12 h-12 ease-linear transiton-all hover:bg-opacity-80">
            <div className="font-extrabold">
                {text}
            </div>
        </button>    
    )
}

export default Button;