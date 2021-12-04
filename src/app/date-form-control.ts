import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', { emitModelToViewChange: true });
      return;
    }
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { emitModelToViewChange: true });
      return;
    }

    if (value.length === 3 && this.value.length === 4) {
      let slicedValue = value.slice(0, -1);
      super.setValue(slicedValue, { emitModelToViewChange: true });
      return;
    }

    if (value.length === 3 && this.value.length === 2) {
      super.setValue(value.slice(0, 2) + '/' + value.slice(-1), {
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', {
        emitModelToViewChange: true,
      });
      return;
    }

    super.setValue(value, {
      emitModelToViewChange: true,
    });
  }
}
