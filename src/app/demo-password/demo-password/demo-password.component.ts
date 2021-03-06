import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-password',
  templateUrl: './demo-password.component.html',
  styleUrls: ['./demo-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPasswordComponent implements OnInit {

  usage: string = `

<h3>Installation</h3>
<pre>npm install --save https://github.com/IntelStudios/is-components-ngx/raw/7.x/package/is-password-7.1.0.tgz</pre>

<h3>Import Module</h3>
<pre>import { IsPasswordModule } from 'is-password';</pre>
`

  constructor() { }

  ngOnInit() {
  }

}
