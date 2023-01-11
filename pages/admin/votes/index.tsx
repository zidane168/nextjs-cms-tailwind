
import useStore from '../../../store/votes';
import React from 'react'

export default function Votes() {

    // const getVotes = useStore(state => state.votes) 
    // const addVotes = useStore(state => state.addVotes);
    // const subtractVotes = useStore(state => state.subtractVotes)
     
    const { votes, addVotes, subtractVotes } = useStore() 
    return ( 
        <>
            <div className="text-[#00F] text-center p-2 shadow-lg bg-rose-100 w-[500px] mt-20 rounded-full mx-auto">
                { votes } people have cast their votes

            </div> 
            <div className="mx-auto w-24 mt-20 flex  space-x-2">
                <button className="bg-gray-200 px-[20px] py-[10px]" onClick={ addVotes } > +  </button>
                <button className="bg-gray-200 px-[20px] py-[10px]" onClick={ subtractVotes } > - </button>
            </div>
        </>
    )
}
