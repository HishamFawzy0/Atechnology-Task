import { Component } from '@angular/core';
import { CalldetailsComponent } from "../calldetails/calldetails.component";
import { CallrecorderComponent } from "../callrecorder/callrecorder.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-parent',
  imports: [CalldetailsComponent, CallrecorderComponent, TranslateModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {}
