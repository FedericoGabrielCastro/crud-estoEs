import {
    VISIBLE_ITEM_TRUE,
    EDIT_ITEM_LIST
} from '../types'

export const visibleItemTrueAction = ({id, visible}) => ({
    type: VISIBLE_ITEM_TRUE,
    id: id,
    visible: visible 
})

export const editItemAction = ({description, manager, assigned, status, date, time, id, projectName}) => ({
    type: EDIT_ITEM_LIST,
    description: description,
    manager: manager,
    assigned: assigned,
    status: status,
    date: date,
    time: time,
    id: id,
    projectName: projectName,
})
