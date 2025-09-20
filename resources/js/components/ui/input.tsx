import { ReactNode } from "react";
import clsx from "clsx";


interface InputProps {
    type: string;
    className?: string;
    placeholder?: string;
    name: string; // melhor que "alt"
}

interface TextProps {
    className?: string;
    placeholder?: string;
    name: string; // melhor que "alt"
}

interface LabelProps {
    htmlFor: string;
    className?: string;
    text: string;
}

interface FormInputProps {
    type: string;
    placeholder?: string;
    name: string;
    label: string;
    className?: string;
    children?: ReactNode;
}

interface FormTextProps {
    placeholder?: string;
    name: string;
    label: string;
    className?: string;
    children?: ReactNode;
}


export function Input({ type, className, placeholder, name }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={name}
            className={clsx(className, "border rounded px-4 py-2")}
            autoComplete={type}
            required
        />
    );
}

export function TextArea({ className, placeholder, name }: TextProps) {
    return (
        <textarea
            placeholder={placeholder}
            name={name}
            id={name}
            className={clsx(className, "border rounded px-4 py-2")}
            rows={4}
        />
    );
}

export function Label({ htmlFor, text, className }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={className}>
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
    children,
}: FormInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name} text={label} />
            <Input type={type} placeholder={placeholder} name={name} className={className}/>
            {children}
        </div>
    );
}


function FormText({
    placeholder,
    name,
    label,
    className,
    children,
}: FormTextProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={name} text={label} />
            <TextArea placeholder={placeholder} name={name} className={className} />
            {children}
        </div>
    );
}

export {FormInput, FormText}