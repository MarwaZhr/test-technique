import Swal from "sweetalert2";

//sweet alet 

export const sweetAlertFunc = (text) => {
        Swal.fire({
          icon: 'error',
          title: '',
          text: text,
        })
}

