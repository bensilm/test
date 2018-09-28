import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'table-header',
  templateUrl: './tableHeader.template.html',
  styleUrls: ['./tableHeader.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeaderComponent {
  @Input() columnNames: string[];
}
