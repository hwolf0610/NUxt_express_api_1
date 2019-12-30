export const state = ()=>({
    counter: 2,
    string1: "sre",
})

export const mutations = {
    SET_VAR_1 (state, value) {
        console.log('SET_VAR_1', value)
        state.string1 = value
      },
    increment(state){
        state.counter++;
    }
}