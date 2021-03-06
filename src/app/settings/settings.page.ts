import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  mileageOptions = [
    { value: '10000', label: '10,000'},
    { value: '12000', label: '12,000'},
    { value: '15000', label: '15,000'},
  ];

  constructor(public appService: AppService) { }

}
