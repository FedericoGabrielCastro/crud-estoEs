import { 
    ADD_ITEM_TO_LIST, 
    DELETE_ITEM_LIST,
    VISIBLE_ITEM_TRUE,
    EDIT_ITEM_LIST
} from "../types"

const initialState = []

export const addToListReducer =  (state = initialState, { type, projectName, description, manager, assigned, status, date, time, id }) => {
    switch (type) {

        case ADD_ITEM_TO_LIST:
            return state.concat({
                projectName: projectName,
                description: description,
                manager: manager,
                assigned: assigned,
                status: status,
                date: date,
                time: time,
                id: id,
            })

        case DELETE_ITEM_LIST: 
            return state.filter(item => item.id !== id)

        case VISIBLE_ITEM_TRUE: 
            return state.map(item => item.id === id ? {...item, visible: true} : {...item, visible: false})

        case EDIT_ITEM_LIST: 
            return state.map(item => item.id === id ? 
                { 
                    ...item,
                    projectName: projectName,
                    description: description,
                    manager: manager,
                    assigned: assigned,
                    status: status,
                    date: date,
                    time: time,
                    id: id
                } : item
            )

        default:
            return state
    }
}


// return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)