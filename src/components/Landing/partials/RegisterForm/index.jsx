import React from "react";
import { Formik, Form } from "formik";
import { TextInput, Select } from "./customFields";
import * as Yup from "yup";
import layout from "../../styles/index.module.css";
import styles from "../../styles/RegisterForm.module.css";
import countryList from "react-select-country-list";

// Get list of countries
const options = countryList().getLabels();

// basic RegEx for validating phoneNumber input
const onlyNums = /^\d+$/;

const RegisterForm = () => (
  <div className={layout.form}>
    <div className={styles.formContainer}>
      <h5>¡Inscríbete y reserva tu lugar ahora!</h5>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          phoneNumber: "",
          jobTitle: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Campo requerido"),
          lastName: Yup.string()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Campo requerido"),
          email: Yup.string()
            .email("Email inválido")
            .required("Campo requerido"),
          country: Yup.string()
            .required("Campo requerido")
            .oneOf(options, "Debe seleccionar un país")
            .required("Campo requerido"),
          phoneNumber: Yup.string()
            .matches(onlyNums, "Este campo sólo acepta números")
            .required("Campo requerido"),
          jobTitle: Yup.string()
            .max(30, "Debe tener 30 caracteres o menos")
            .required("Campo requerido"),
        })}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 400);
        }}>
        <Form className={styles.form}>
          <TextInput label='Nombre' name='firstName' type='text' />
          <TextInput label='Apellido' name='lastName' type='text' />
          <TextInput
            label='Correo electrónico del trabajo'
            name='email'
            type='email'
          />
          <Select label='País' name='country'>
            <option value=''>Seleccione un país</option>
            {options.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
          <TextInput
            label='Número de teléfono'
            name='phoneNumber'
            type='text'
          />
          <TextInput label='Puesto de trabajo' name='jobTitle' type='text' />
          <button className={styles.button} type='submit'>
            Inscríbete
          </button>
        </Form>
      </Formik>
    </div>
  </div>
);

export default RegisterForm;
