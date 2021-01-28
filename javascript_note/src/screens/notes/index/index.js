import React, { Fragment } from 'react';
import HeaderLogged from '../../../components/header_logged/index'
import Notes from '../../components/notes/index'

const NotesScreen = () => (
    <Fragment>
        <HeaderLogged/>
        <Notes/>
    </Fragment>
);

export default NotesScreen;