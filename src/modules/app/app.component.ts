import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
