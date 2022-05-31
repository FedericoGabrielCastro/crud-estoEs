import { ADD_ITEM_TO_LIST } from "../types";

export const addToListAction = ({description, manager, assigned, status, date, time, id, projectName}) => ({
    type: ADD_ITEM_TO_LIST,
    projectName: projectName,
    description: description,
    manager: manager,
    assigned: assigned,
    status: status,
    date: date,
    time: time,
    id: id,
});