import React, { Fragment, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from '../styles/views/ListPageStyle.module.css';
import { Link } from 'react-router-dom'

import { MdAdd } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import NewTableList from '../components/newTableList';

import { deleteItemListAction } from '../redux/actions/deleleItemList';
import { visibleItemTrueAction } from '../redux/actions/editListAction';
import { saveSearchAction } from '../redux/actions/setSearchAction';

const ListPage = () => {

    const dataTable = useSelector(store => store.addToListReducer) // data list.
    const search = useSelector(store => store.setSearchReducer) // save search text.
    console.log(search)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickOption = (id , visible) => {
        console.log("CLICK ID BUTTON:", id , visible)
        dispatch(visibleItemTrueAction({id: id, visible: visible}))
    }

    const handleEditClick = (id, projectName, description, manager, assigned, date, time, status) => {
        navigate(`/edit/${projectName}`, { state: {
            id: id,
            projectName: projectName,
            description: description,
            manager: manager,
            assigned: assigned,
            date: date,
            time: time,
            status: status
        }})
    }

    const handleOnChange = useCallback((event) => {
        dispatch(saveSearchAction(event.target.value))
        console.log(event.target.value)
    },[dispatch])

    const handleDeleteClick = (id) => {
        console.log("Delete", id)
        dispatch(deleteItemListAction(id))} 

    return (
        <Fragment>
            <nav className={style.listPageNav}>
                <h1> My projects </h1>
                <Link to="/add" className={style.buttomAdd}>
                    <MdAdd/>
                    <p>Add project</p>
                </Link>
            </nav>
            <main className={style.listPageMain}>
                <input type="text" placeholder='Search...' value={search} onChange={handleOnChange}/>
                <section className={style.boxContent}>
                    <article className={style.crudTableContent}>
                        <table className={style.tableContent}>
                            <thead>
                                <tr className={style.titlesTable}>
                                    <th>Project info</th>
                                    <th>Project Manager</th>
                                    <th>Assigned to</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataTable.filter((item) => {
                                        if (item.projectName.toLowerCase().startsWith(search.toLowerCase()) 
                                            || item.projectName.toLowerCase().endsWith(search.toLowerCase()) 
                                            || item.projectName.toLowerCase().includes(search.toLowerCase())) {
                                            return true
                                        } else {
                                            return false
                                        }
                                    })
                                    .map((item ) => {
                                        return (
                                            <NewTableList 
                                                key={item.id} 
                                                projectName={item.projectName}
                                                date={item.date}
                                                time={item.time}
                                                manager={item.manager}
                                                assigned={item.assigned}
                                                status={item.status}
                                                handleClickOption={() => handleClickOption(item.id, item.visible)}
                                            >
                                                {
                                                    item.visible ? <div className={style.alignModal}>
                                                        <div className={style.modalEditDelete}>
                                                            <div onClick={() => handleEditClick(
                                                                    item.id,
                                                                    item.projectName,
                                                                    item.description,
                                                                    item.manager,
                                                                    item.assigned,
                                                                    item.date,
                                                                    item.time,
                                                                    item.status
                                                                )}>
                                                                <FiEdit />
                                                                <p>Edit</p>
                                                            </div>
                                                            <div onClick={() => handleDeleteClick(
                                                                item.id
                                                            )}>
                                                                <AiOutlineDelete />
                                                                <p>Delete</p>
                                                            </div>
                                                        </div> 
                                                    </div> : null
                                                }
                                            </NewTableList> 
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </article>
                    <article className={style.pagination}>
                        <div> Pagination </div>
                    </article>
                </section>
            </main>
        </Fragment>
    );
};

export default ListPage;
