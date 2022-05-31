import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import ListPage from './views/ListPage';
import AddPage from './views/AddPage';
import EditPage from './views/EditPage';
import CustomNavbar from './components/CustomNavbar';
import { store } from './redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <CustomNavbar />
                <Routes>
                    <Route path="/" element={<ListPage />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/edit/:id" element={<EditPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
