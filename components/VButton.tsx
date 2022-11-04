const VButton = ( { disabled, onClick, name, active } ) => {

    const defaultClass = "rounded px-6 py-2 bg-theme text-white uppercase"
    const disabledClass = " disabled:opacity-50"
    const hoverClass = " hover:bg-sky-600 focus:outline-none";

    let className = defaultClass
    if (disabled) {
        className = className + disabledClass

    } else {
        className = className + hoverClass
    }

    if (active) {
        className = className + " bg-sky-600 "
    }

    return (
        <button className={ className }  onClick={ onClick } >  { name } </button>
    )
}

export default VButton;