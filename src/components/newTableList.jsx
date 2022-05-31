import React from 'react';
import style from '../styles/components/newTableListStyle.module.css'

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { SiLetterboxd} from 'react-icons/si';

const NewTableList = ({projectName, manager, assigned, status, date, time, handleClickOption, children}) => {

    return (
        <tr className={style.userAddList}>
            <td className={style.projectINfo}>
                <div className={style.projectInfoData}>
                    <p>{projectName}</p>
                    <span><i> Creation date: {date} {time} </i></span>
                </div>
            </td>
            <td className={style.projectManager}>
                <div className={style.projectManagerData}>
                    <SiLetterboxd />
                    <p>{manager}</p>
                </div>
            </td>
            <td className={style.assigned}>
                <div className={style.assignedData}>
                    <CgProfile />
                    <p>{assigned}</p>
                </div>
            </td>
            <td className={style.status}>
                <div>{status}</div>
            </td>
            <td className={style.iconOpt}>
                <BiDotsVerticalRounded onClick={handleClickOption}/>
                {children}                
            </td>
        </tr>
    );
};

export default NewTableList;
