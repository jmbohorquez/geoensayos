"use client";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { LabelForms } from "./LabelForms";

export const FormPQR = () => {

    const [ formResponse, setFormResponse ] = useState( '' )

    const pqrValidationSchema = Yup.object({
        nombre: Yup.string()
            .min(2, 'El texto es muy corto' )
            .max(50, 'El texto es muy largo' )
            .required( 'Este campo es requerido' )
            .matches(/^[aA-zZáéíóúÁÉÍÓÚÇçäëïöüÄËÏÖÜñÑ\s]+$/, 'Solo se admiten letras' ),
        apellido: Yup.string()
            .min(2, 'El texto es muy corto' )
            .max(50, 'El texto es muy largo' )
            .required( 'Este campo es requerido' )
            .matches(/^[aA-zZáéíóúÁÉÍÓÚÇçäëïöüÄËÏÖÜñÑ\s]+$/, 'Solo se admiten letras' ),
        email: Yup.string()
            .email( 'El formato no es válido' )
            .required( 'Este campo es requerido' ),
        telefono: Yup.number()
            .integer()
            .required( 'Este campo es requerido' )
            .typeError( 'El formato no es válido' ),
        asunto: Yup.string()
            .min(2, 'El texto es muy corto' )
            .max(50, 'El texto es muy largo' )
            .required( 'Este campo es requerido' )
            .matches( /^[aA-zZ0-9!¡?¿:@#.,;áéíóúÁÉÍÓÚÇçäëïöüÄËÏÖÜñÑ\s]+$/, 'Solo se admiten letras y números' ),
        descripcion: Yup.string()
            .matches( /^[aA-zZ0-9!¡?¿:@#.,;áéíóúÁÉÍÓÚÇçäëïöüÄËÏÖÜñÑ\s]+$/, 'Solo se admiten letras y números' ),
    })

    const resetForm = () => {
        setTimeout( () => {
            setFormResponse( '' )
        }, 3000 )
    }

    return(
        
        <div className="w-full md:w-2/3 lg:w-1/2">
            {
                !formResponse
                ?
                    <>
                        <div className="w-full">
                            <p className="">Envíanos tu petición, queja o reclamo a través del siguiente formulario.</p>
                        </div>
                        <Formik
                            initialValues={{
                                nombre: '',
                                apellido: '',
                                email: '',
                                telefono: '',
                                asunto: '',
                                descripcion: ''
                            }}
                            validationSchema={ pqrValidationSchema }
                            onSubmit={ async ( values ) => {
                                try{
                                    const resp = await fetch( '/api/pqr-sender', {
                                        method: 'POST',
                                        body: JSON.stringify( values ),
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json'
                                        }
                                    } )
                    
                                    if( resp.status === 200 ){
                                        setFormResponse( 'ok' )
                                    }else {
                                        setFormResponse( 'error-send' )
                                        resetForm()
                                    }

                                }catch( err ){
                                    console.log( 'ERROR: ', err )
                                    setFormResponse( 'error-server' )
                                    resetForm()
                                }
                            }}
                        >
                            {
                                ( formik ) => (
                                    <Form>
                                        <div className="w-full flex flex-col md:flex-row gap-4 py-2">
                                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                                <LabelForms 
                                                    inputFor='nombre'
                                                    text='Nombre'
                                                    req={ true }
                                                />
                                                <Field 
                                                    id="nombre" 
                                                    name="nombre" 
                                                    type="text"
                                                    className="w-full bg-gray-200 p-2"
                                                />
                                                <div className="text-red-500 text-xs">
                                                    <ErrorMessage
                                                        name='nombre'
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                                <LabelForms 
                                                    inputFor='apellido'
                                                    text='Apellido'
                                                    req={ true }
                                                />
                                                <Field 
                                                    id="apellido" 
                                                    name="apellido"
                                                    type="text"
                                                    className="w-full bg-gray-200 p-2"
                                                />
                                                <div className="text-red-500 text-xs">
                                                    <ErrorMessage
                                                        name='apellido'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col gap-2 py-2">
                                            <LabelForms 
                                                inputFor='email'
                                                text='email'
                                                req={ true }
                                            />
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="w-full bg-gray-200 p-2"
                                            />
                                            <div className="text-red-500 text-xs">
                                                <ErrorMessage
                                                    name='email'
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col gap-2 py-2">
                                            <LabelForms 
                                                inputFor='telefono'
                                                text='telefono'
                                                req={ true }
                                            />
                                            <Field
                                                id="telefono"
                                                name="telefono"
                                                type="text"
                                                className="w-full bg-gray-200 p-2"
                                            />
                                            <div className="text-red-500 text-xs">
                                                <ErrorMessage
                                                    name='telefono'
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col gap-2 py-2">
                                                <LabelForms 
                                                    inputFor='asunto'
                                                    text='asunto'
                                                    req={ true }
                                                />
                                                <Field 
                                                    id="asunto" 
                                                    name="asunto" 
                                                    type="text"
                                                    className="w-full bg-gray-200 p-2"
                                                />
                                                <div className="text-red-500 text-xs">
                                                    <ErrorMessage
                                                        name='asunto'
                                                    />
                                                </div>
                                            </div>
                                        <div className="w-full flex flex-col gap-2 py-2">
                                            <LabelForms 
                                                inputFor='descripcion'
                                                text='descripción'
                                                req={ true }
                                            />
                                            <Field
                                                id="descripcion"
                                                name="descripcion"
                                                as="textarea"
                                                className="w-full h-48 bg-gray-200 p-2"
                                            />
                                            <div className="">
                                                <ErrorMessage
                                                    name='descripcion'
                                                />
                                            </div>
                                        </div>
                                        <button
                                            disabled={ !formik.isValid || !formik.dirty } 
                                            type="submit"
                                            className='btn btn-primary cursor-pointer'
                                        ><span>Enviar</span></button>
                                    </Form>
                                )
                            }
                        </Formik>
                    </>
                :
                    <div className='form-text-response'>
                        {
                            ( formResponse == 'ok' )
                            ?
                                <>
                                    <h2 className='text-color-1 text-align-center'>¡El mensaje se ha enviado!</h2>
                                    <p className='text-align-center'>Daremos proceso a tu PQR y nos pondremos en contacto en el menor tiempo posible. <br />
                                    <strong>No dudes en contactarnos</strong> si necesitas más información o asistencia.</p>
                                </>
                            :
                                ( formResponse == 'error-send' )
                                ?
                                    <>
                                        <h2 className='text-color-red text-align-center'>Error</h2>
                                        <p className='text-align-center'>No fue posible el envío del formulario, por favor inténtelo nuevamente.</p>
                                    </>
                                :
                                    <>
                                        <h2 className='text-color-red text-align-center'>Error</h2>
                                        <p className='text-align-center'>Ocurrió un error técnico. Por favor inténtelo nuevamente.</p>
                                    </>
                        }
                    </div>
            }
        </div>
    )
}