import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  message = PROJECT_BUILD_VERSION;
  constructor() {}

  ngOnInit() {}
}
