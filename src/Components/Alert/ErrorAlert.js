import Swal from "sweetalert2";
import {useDispatch} from "react-redux"
import { resetErrAction } from "../../redux/globalActions/globalAction";
const ErrorMsg = ({ message }) => {
  const dispatch=useDispatch();
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    color: "white",
    background:"black",
  });
  dispatch(resetErrAction());
};

export default ErrorMsg;