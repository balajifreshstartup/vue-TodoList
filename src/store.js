import {createStore} from 'vuex'

export default createStore({
    strict: true,
    state:{
        todolists:[
            {
                todo: "Buy groceries for next week",
                status: true
            },
            {
                todo: "Renew car insurance",
                status: false
            },
            {
                todo: "Sign up for online course",
                status: true
            }
        ]
    },
    mutations:{
        addTodo(state, payload){
            state.todolists.unshift(payload)
        }
    },
    actions:{
        addTodoAction: (content, payload) => {
            content.commit('addTodo',payload);
        }
    }
})