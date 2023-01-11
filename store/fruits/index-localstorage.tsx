import create from "zustand"
import { persist } from "zustand/middleware"
  
interface fruitState {
    fruits: Array<string>; 
    addFruits: (fruit: string) => void;
}

let store = ((set) => ({
    fruits: [], 

    // C2 truyen tham so
    addFruits: (fruit) => set(state => ({
        fruits: [...state.fruits, fruit]
    }))
}))

store = persist(store, { name: "basket"})

const useStore = create<fruitState>(store)

export default useStore;
