"use client";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { LabelForms } from "./LabelForms";

export const ContactForm = () => {

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
        mensaje: Yup.string()
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
                            <p className="text-white">Envíanos tu consulta a través del siguiente formulario. Te daremos respuesta en el menor tiempo posible.</p>
                        </div>
                        <Formik
                            initialValues={{
                                nombre: '',
                                apellido: '',
                                email: '',
                                telefono: '',
                                mensaje: ''
                            }}
                            validationSchema={ pqrValidationSchema }
                            onSubmit={ async ( values ) => {
                                try{
                                    const resp = await fetch( '/api/contact-sender', {
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
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2">
                                            <div className="w-full flex flex-col gap-2">
                                                <LabelForms 
                                                    inputFor='nombre'
                                                    text='Nombre'
                                                    req={ true }
                                                    clases="text-white"
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
                                            <div className="w-full flex flex-col gap-2">
                                                <LabelForms 
                                                    inputFor='apellido'
                                                    text='Apellido'
                                                    req={ true }
                                                    clases="text-white"
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
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="w-full flex flex-col gap-2 py-2">
                                                <LabelForms 
                                                    inputFor='email'
                                                    text='email'
                                                    req={ true }
                                                    clases="text-white"
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
                                                    clases="text-white"
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
                                        </div>
                                        <div className="w-full flex flex-col gap-2 py-2">
                                            <LabelForms 
                                                inputFor='mensaje'
                                                text='mensaje'
                                                req={ true }
                                                clases="text-white"
                                            />
                                            <Field
                                                id="mensaje"
                                                name="mensaje"
                                                as="textarea"
                                                className="w-full h-48 bg-gray-200 p-2"
                                            />
                                            <div className="">
                                                <ErrorMessage
                                                    name='mensaje'
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
                                    <h2 className='text-center text-2xl font-bold text-white'>¡El mensaje se ha enviado correctamente!</h2>
                                    <p className='text-center mb-4 text-white'>Nos pondremos en contacto en el menor tiempo posible. </p>
                                </>
                            :
                                ( formResponse == 'error-send' )
                                ?
                                    <>
                                        <h2 className='text-color-red text-align-center text-red-500'>Error</h2>
                                        <p className='text-align-center text-red-500'>No fue posible el envío del formulario, por favor inténtelo nuevamente.</p>
                                    </>
                                :
                                    <>
                                        <h2 className='text-color-red text-align-center text-red-500'>Error</h2>
                                        <p className='text-align-center text-red-500'>Ocurrió un error técnico. Por favor inténtelo nuevamente.</p>
                                    </>
                        }
                    </div>
            }
        </div>
    )
}