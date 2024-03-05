import { create }  from 'zustand';

interface CountItf {
    count: number,
    eventPlus : () => void
}

const useCount = create<CountItf>()((set)  => ({
    count: 0,

    teacher_list: [],

    eventPlus: () => set((state) => ({
        count: state.count + 1 
    })),

    eventMinus: () => set((state) => ({
        count: state.count - 1 
    })),
}))

export default useCount;