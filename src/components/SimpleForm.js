import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {Input, Button, Message} from 'semantic-ui-react';

class SimpleForm extends Component {
    locationInput({input, meta: {touched, error}, ...custom}) {
        const hasError = touched && error !== undefined;
        return (
            <div>
                {hasError && <Message error header="Error" content={error}/>}
                <Input
                    error={hasError}
                    fluid
                    placeholder='Location...'
                    {...input}
                    {...custom}
                />
            </div>
        )
    }

    submitForm = ({location}, dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: 'FETCH_WEATHER',
                location,
                resolve,
                reject
            })
        }).catch(error => {
            throw new SubmissionError(error);
        })
    }

    render() {
        const {handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit(this.submitForm)}>
                <Field name="location" component={this.locationInput}/>
                <br/>
                <Button fluid type='submit'> submit </Button>
            </form>
        );
    }
}

const validate = ({location}) => {
    const errors = {}
    if (!location || location.trim() === '') {
        errors.location = 'Location reqired'
    }
    return errors
}

export default reduxForm({
    form: 'simple',
    validate
})(SimpleForm)