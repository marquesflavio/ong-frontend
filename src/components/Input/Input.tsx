import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({type, ...rest} : InputProps) {
    return ((
        <input 
            {...rest} 
            type={type}
        />
           
        
    ));
}