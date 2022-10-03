import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToastAlertService {
  constructor(private toastr: ToastrService) {}

  toastSuccess(message: string): void {
    this.toastr.success(message);
  }

  toastError(message: string): void {
    this.toastr.error(message);
  }

  toastInfo(message: string): void {
    this.toastr.info(message);
  }

  async openModalEdit(nameValue: string): Promise<string> {
    const { value } = await Swal.fire({
      title: 'Editar Nombre',
      input: 'text',
      inputLabel: 'Nombre',
      inputValue: nameValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El Campo no puede estar vacido!';
        }
        if (value === nameValue) {
          return 'Cambie el valor del campo';
        }
        return null;
      }
    });
    return value;
  }
}
