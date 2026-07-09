
interface Props{
    inputFor: string; 
    text: string; 
    req: boolean;
    clases?: string;
}

export const LabelForms = ({ inputFor, text, req, clases }: Props) => {
    return(
        <label 
            htmlFor={ inputFor }
            className={`${ clases }`}
        >
            { text }
            {
                req &&
                    <span className='form-required'>*</span>
            }
        </label>
    )
}