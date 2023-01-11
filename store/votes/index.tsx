import create from "zustand"

// https://blog.openreplay.com/zustand-simple-modern-state-management-for-react
 
interface voteState {
    votes: number;
    addVotes: () => void;
    subtractVotes: () => void;
}

const useStore = create<voteState>((set, get) => ({
    votes: 0, 

    // C1 ko can truyen tham so
    addVotes: () => set(state => ({
        votes: state.votes + 1
    })),
    subtractVotes: () => set(
        state => ({
            votes: state.votes - 1   
        })
    ),
    action: () => {
        const userVotes = get().votes
        console.log(userVotes)
    }

}))

export default useStore;
