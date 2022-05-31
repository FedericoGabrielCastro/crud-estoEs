import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/views/addPageStyle.module.css'
import { useNavigate } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { addToListAction } from '../redux/actions/addToListAction';

const AddPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            projectName: "",
            description: "",
            manager: "Loren Ipsum",
            assigned: "Federico Castro",
            status: "Enabled",
            date: new Date().toLocaleDateString(),
            time: new Date().toTimeString().slice(0, 8),
            id: Math.random(),
            visible: false
        },
        onSubmit: values => {
            console.log("FORMIK ADD:" , values.id)
            dispatch(addToListAction({
                projectName: values.projectName,
                description: values.description,
                manager: values.manager,
                assigned: values.assigned,
                status: values.status,
                date: values.date,
                time: values.time,
                id: values.id,
                visible: values.id
            }))
            navigate("/")

        },
        validationSchema: Yup.object().shape({
            projectName: Yup.string()
                .required("Name required"),
            description: Yup.string()
                .required("Description required",
            )
        })
    })

    return (
        <Fragment>
            <nav className={style.addPageNav}>
                <div onClick={() => navigate("/")}>
                    <BiArrowBack />
                    <p>Back</p>
                </div>
                <h1>Add Project</h1>
            </nav>
            <main>
                <section className={style.boxContent}>
                    <form className={style.formContent} onSubmit={formik.handleSubmit}>
                        <label htmlFor='projectName'>Project name</label>
                        <input 
                            name='projectName'
                            id='projectName'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.projectName}
                        />
                        <label htmlFor='description'>Description</label>
                        <input 
                            name='description'
                            id='description'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                        <label htmlFor='manager'>Project manager</label>
                        <select
                            name='manager'
                            id='manager'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.manager}    
                        >
                            <option value="Loren Ipsum">Loren Ipsum</option>
                            <option value="Super Saiyajin">Super Saiyajin</option>
                        </select>
                        <label htmlFor='assigned'>Assigned to</label>
                        <select
                            name='assigned'
                            id='assigned'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.assigned}    
                        >
                            <option value="Federico Castro">Federico Castro</option>
                            <option value="Ten Shin Han">Ten Shin Han</option>
                            <option value="Maestro Roshi">Maestro Roshi</option>
                        </select>
                        <label htmlFor='status'>Status</label>
                        <select
                            name='status'
                            id='status'
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.status}    
                        >
                            <option value="Enabled">Enabled</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <div>
                            <button className={style.buttonSubmit} type='submit'>Create project</button>
                        </div>
                    </form>
                </section>
            </main>
        </Fragment>
    );
};

export default AddPage;
