import Link from "next/link"

const VLink = ( {  href, name, active }: any ) => {

    const defaultClass = "rounded px-6 py-2 bg-theme text-white uppercase" 

    let className = defaultClass 

    if (active) {
        className = className + " border-b-2 border-white"
    }

    return (
        <Link className={ className }  href={ href } >  { name } </Link>
    )
}

export default VLink;