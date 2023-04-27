import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { resetSuccessAction } from "../../redux/globalActions/globalAction";

const SuccessMsg = ({ message, title }) => {
  const dispatch = useDispatch();
  Swal.fire({
    icon: "success",
    title: title,
    text: message,
    color: "white",
    background:"black",

  });
  dispatch(resetSuccessAction());
};

export default SuccessMsg;
