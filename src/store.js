import { create } from "zustand"

const store = (set) => ({
    tasks: [{ title: "Test", state: "PLANNED" }]
})

export const useStore = create(store)