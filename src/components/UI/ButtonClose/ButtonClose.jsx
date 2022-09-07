

const ButtonClose = ({classes, height, width, fState, setFState}) => {
    return (
        <button onClick={() => setFState(!fState)} style={{width: (4*width)/16, height: (4*height)/16}} className={`${classes} cursor-pointer  rounded-full flex
        items-center justify-center bg-small-btn backdrop-opacity-70 hover:backdrop-opacity-30`}>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.85 16.44a.5.5 0 0 1 0 .71l-.7.7a.5.5 0 0 1-.71 0L12 13.41l-4.44 4.44a.5.5 0 0 1-.71 0l-.7-.7a.5.5 0 0 1 0-.71L10.59 12 6.15 7.56a.5.5 0 0 1 0-.71l.7-.7a.5.5 0 0 1 .71 0L12 10.59l4.44-4.44a.5.5 0 0 1 .71 0l.7.7a.5.5 0 0 1 0 .71L13.41 12l4.44 4.44z" fill="currentColor">
                </path>
            </svg>
        </button>
    )
}

export default ButtonClose;