import create from 'zustand'

type State = {
    items: {}[],
    addItem: (item: any) => any,
}

const useStore = create<State>((set) => ({
    items: [],
    addItem: (item : any) => {
        const itemArr : any = useStore.getState().items
        // console.log(itemArr)
        for(let i = 0; i < itemArr.length; i++) {
            if(itemArr[i].id === item.id) {
                itemArr[i].quantity++
                set((state) => ({items: itemArr}))
                return
            }
        }
        alert('New item')
        set((state: any) => ({items: [...state.items, item]}))
    }
}))

export default useStore