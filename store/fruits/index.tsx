import create from "zustand"

interface fruitState {
    fruits: Array<string>; 
    addFruits: (fruit: string) => void;
}

const useStore = create<fruitState>((set) => ({
    fruits: [], 

    // C2 truyen tham so
    addFruits: (fruit) => set(state => ({
        fruits: [...state.fruits, fruit]
    }))
}))

export default useStore;
