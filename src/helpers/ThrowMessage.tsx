import Swal, { SweetAlertOptions } from "sweetalert2";

export type AlertProps = Pick<SweetAlertOptions, "title" | "icon" | "text">;
export const ThrowMessage = (props: AlertProps) => Swal.fire(props);
