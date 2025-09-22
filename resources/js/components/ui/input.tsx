import { ChangeEventHandler, ReactNode } from "react";
import clsx from "clsx";


interface InputProps {
    type: string;
    className?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    autoComplete?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

interface TextProps {
    className?: string;
    placeholder?: string;
    name: string; // melhor que "alt"
    required?: boolean;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

interface LabelProps {
    htmlFor: string;
    className?: string;
    text: string;
}

interface FormInputProps extends InputProps {
    label: string;
    children?: ReactNode;
}

interface FormTextProps extends TextProps {
    label: string;
    children?: ReactNode;
}

export function Input({ type, className, placeholder, name, required = true, autoComplete, onChange}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            className={clsx(className, "border rounded px-4 py-2")}
            autoComplete={autoComplete}
            required={required}
            onChange={onChange}
        />
    );
}

export function TextArea({ className, placeholder, name, required = true, onChange }: TextProps) {
    return (
        <textarea
            placeholder={placeholder}
            name={name}
            id={name}
            className={clsx(className, "border rounded px-4 py-2")}
            rows={4}
            required={required}
            onChange={onChange}
        />
    );
}

export function Label({ htmlFor, text, className }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={clsx(className, "font-medium")}>
            {text}
        </label>
    );
}

function FormInput({
    type,
    placeholder,
    name,
    label,
    className,
    required,
    autoComplete,
    onChange,
    children,
}: FormInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name} text={label} />
            <Input type={type} placeholder={placeholder} name={name} className={className} required={required} autoComplete={autoComplete} onChange={onChange}/>
            {children}
        </div>
    );
}


function FormText({
    placeholder,
    name,
    label,
    className,
    required, 
    onChange,
    children,
}: FormTextProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name} text={label} />
            <TextArea placeholder={placeholder} name={name} className={className} required={required} onChange={onChange}/>
            {children}
        </div>
    );
}

export {FormInput, FormText}