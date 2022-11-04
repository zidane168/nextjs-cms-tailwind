

const VButton = ( { disabled, onClick, name } ) => {

    return (
        disabled ? 
            <button className="rounded px-6 py-2 bg-theme text-white uppercase disabled:opacity-50" 
                disabled  onClick={ onClick } >  { name } </button> : 
         
            <button className="rounded px-6 py-2 bg-theme hover:bg-sky-600 focus:outline-none text-white uppercase" 
                onClick={ onClick } >  { name } </button> 
        
    )
  
}

export default VButton;