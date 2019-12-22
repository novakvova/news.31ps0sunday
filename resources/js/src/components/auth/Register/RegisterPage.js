import React, { Component } from "react";
import TextFieldGroup from '../../common/TextFieldGroup';
// import FileFieldGroup from '../../common/FileFieldGroup';
import ImageFieldGroupCropper from "../../common/ImageFieldGroupCropper";
import axios from 'axios';

export class RegisterPage extends Component {
    state = {
        email: '',
        phone: '',
        photo: '',
        password: '',
        passwordConfirm: '',
        errors: {
            //email: 'Invalid'
        }
    };

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("--register submit--");
        const { email, photo, password } = this.state;
        let errors = {};

        if (email === "") errors.email = "Поле не може бути пустим!";
        if (photo === "") errors.photo = "Закинь фотку!";

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            console.log("Model is Valid");
            const model = {
                email: email,
                name: 'SEMEN',
                password: password
            };
            //const self=this;
            axios.post('/api/register',model)
                .then(resp=> {
                    console.log('------result good---------', resp);
                },
                error=> {
                    throw error.response.data;
                })
                .catch(err => {
                    this.setState({
                        errors: err
                    });
                });
            //ajax axios post
        } else {
            this.setState({ errors });
        }
    };

     getCroppedImage = img => {
        if (!!this.state.errors["photo"]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors["photo"];
            this.setState({
                photo: img,
                errors
            });
        } else {
            this.setState({ photo: img });
        }
    };

    render() {
        const { email, phone, photo, password, passwordConfirm, errors } = this.state;
        console.log("Regiter page state", this.state);
        return (
            <div className="container">
                <h1 className="d-flex justify-content-center">Реєстрація eee</h1>

                <form name="form" onSubmit={this.handleSubmit}>
                    <TextFieldGroup
                        field="email"
                        label="Електронна пошта"
                        value={email}
                        error={errors.email}
                        onChange={this.handleChange}
                    />

                    <TextFieldGroup
                        field="phone"
                        label="Телефон"
                        value={phone}
                        error={errors.phone}
                        onChange={this.handleChange}
                    />

                    <ImageFieldGroupCropper
                        getCroppedImage={this.getCroppedImage}
                        error={errors.photo}
                        photo={photo}
                    />

                    <TextFieldGroup
                        field="password"
                        label="Пароль"
                        value={password}
                        error={errors.password}
                        onChange={this.handleChange}
                        type="password"
                    />

                    <div className="form-group">
                        <button className="btn btn-primary">
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterPage;
