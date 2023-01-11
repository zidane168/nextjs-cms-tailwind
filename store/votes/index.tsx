import create from "zustand"

// define a store
const useStore = create(set => ({
    votes: 0,
    message: 'holloa',
    addVotes: () => set(state => ({
        votes: state.votes + 1
    })),
    subtractVotes: () => set(state => ({
        votes: state.votes - 1 
    }))

}))

export default useStore;
