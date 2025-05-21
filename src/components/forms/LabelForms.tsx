
interface Props{
    inputFor: string; 
    text: string; 
    req: boolean;
}

export const LabelForms = ({ inputFor, text, req }: Props) => {
    return(
        <label htmlFor={ inputFor }>
            { text }
            {
                req &&
                    <span className='form-required'>*</span>
            }
        </label>
    )
}