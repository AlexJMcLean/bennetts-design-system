import { FC, MouseEventHandler } from "react";
interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: FC<ButtonProps>;
export default Button;
