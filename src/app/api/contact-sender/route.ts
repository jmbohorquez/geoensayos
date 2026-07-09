import { transporter, mailOptions } from '../../../config/nodemailer';
import { NextRequest, NextResponse } from 'next/server';


export async function POST( request: NextRequest ) {
        
    const body = await request.json()
    
    if( body.nombre ==  '' || body.apellido == '' || body.email == '' || body.telefono == '' || body.mensaje == '' ){
        return NextResponse.json({ msg: 'Información incompleta' })
    }

    const message = `
        Nombre: ${ body.nombre } ${ body.apellido }\r\n
        Email: ${ body.email }\r\n
        Telefono: ${ body.telefono }\r\n
        Mensaje: ${ body.mensaje }\r\n
    `;

    try {
        
        await transporter.sendMail({
            from: mailOptions.from,
            to: mailOptions.to,
            subject: 'Contacto Geoensayos',
            text: message,
            html: '<h2>Nuevo Contacto</h2>' + message.replace( /\r\n/g, '<br />' )
        });

        return NextResponse.json({
            msg: true
        });
        
    } catch ( error ) {
        console.error( error );
        return NextResponse.json({
            msg: error
        });
    }

}