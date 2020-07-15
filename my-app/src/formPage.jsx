import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './pages/homePage';

export class MainFormPage extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <Form />
            </div>
        )
    }
}