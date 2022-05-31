import { DELETE_ITEM_LIST } from "../types"

export const deleteItemListAction = (id) => ({
    type: DELETE_ITEM_LIST,
    id: id
})
