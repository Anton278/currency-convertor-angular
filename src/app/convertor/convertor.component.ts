import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { calcRate, ICalcRateProps } from 'src/assets/calcRate';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss'],
})
export class ConvertorComponent {
  @Input() USDUAH!: number;
  @Input() EURUAH!: number;

  input1 = new FormControl();
  input2 = new FormControl();

  currency1 = 'UAH';
  currency2 = 'UAH';

  select1Handler(e: any) {
    this.currency1 = e.target.value;
    const props = {
      from: this.currency1,
      to: this.currency2,
      count: Number(this.input1.value),
      USDUAH: this.USDUAH,
      EURUAH: this.EURUAH,
    };
    this.input2.setValue(calcRate(props));
  }
  select2Handler(e: any) {
    this.currency2 = e.target.value;
    const props = {
      from: this.currency1,
      to: this.currency2,
      count: Number(this.input1.value),
      USDUAH: this.USDUAH,
      EURUAH: this.EURUAH,
    };
    this.input2.setValue(calcRate(props));
  }
  input1Handler(e: any) {
    const props: ICalcRateProps = {
      from: this.currency1,
      to: this.currency2,
      count: Number(e.target.value),
      USDUAH: this.USDUAH,
      EURUAH: this.EURUAH,
    };
    this.input2.setValue(calcRate(props));
  }
  input2Handler(e: any) {
    const props: ICalcRateProps = {
      from: this.currency2,
      to: this.currency1,
      count: Number(e.target.value),
      USDUAH: this.USDUAH,
      EURUAH: this.EURUAH,
    };
    this.input1.setValue(calcRate(props));
  }
}
