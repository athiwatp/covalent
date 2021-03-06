import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-components',
  styleUrls: ['./components.component.scss'],
  templateUrl: './components.component.html',
  animations: [fadeAnimation],
})
export class ComponentsComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    description: 'Components, Directives, Pipes & more',
    icon: 'picture_in_picture',
    route: '.',
    title: 'Components & Addons',
  }, {
    description: 'ng2 Material Design core components',
    icon: 'change_history',
    route: 'material-components',
    title: 'Angular-Material Components',
  }, {
    description: 'A sequence of logical & numbered steps',
    icon: 'view_list',
    route: 'steps',
    title: 'Stepper (Wizard)',
  }, {
    description: 'Expand & collapse containers',
    icon: 'open_with',
    route: 'expansion-panel',
    title: 'Expansion Panels',
  }, {
    description: 'Upload input button',
    icon: 'file_upload',
    route: 'file-upload',
    title: 'File Upload',
  }, {
    description: 'Small blocks for multiple items',
    icon: 'label_outline',
    route: 'chips',
    title: 'Chips & Autocomplete',
  }, {
    description: 'Circular or linear progress loader',
    icon: 'hourglass_empty',
    route: 'loading',
    title: 'Loading',
  }, {
    description: 'Quick way to use alert, confirm and prompt dialogs',
    icon: 'open_in_browser',
    route: 'dialogs',
    title: 'Simple Dialogs',
  }, {
    description: 'Display sets of raw data',
    icon: 'grid_on',
    route: 'data-table',
    title: 'Data Table',
  }, {
    description: 'JSON object tree with collapsible nodes',
    icon: 'format_indent_increase',
    route: 'json-formatter',
    title: 'JSON Formatter',
  }, {
    description: 'Paging for lists and tables',
    icon: 'swap_horiz',
    route: 'paging',
    title: 'Paging',
  }, {
    description: 'Notification count & menu',
    icon: 'notifications',
    route: 'notifications',
    title: 'Notifications',
  }, {
    description: 'Search and filter items',
    icon: 'search',
    route: 'search',
    title: 'Search',
  }, {
    description: 'Responsive service & directive',
    icon: 'devices',
    route: 'media',
    title: 'Media Queries',
  }, {
    description: 'Core directives & utilities',
    icon: 'wb_iridescent',
    route: 'directives',
    title: 'Directives',
  }, {
    description: 'Custom Angular pipes (filters)',
    icon: 'filter_list',
    route: 'pipes',
    title: 'Pipes',
  }];

  optional: Object[] = [{
    description: 'Highlighting your code snippets',
    icon: 'code',
    route: 'syntax-highlighting',
    title: 'Syntax Highlighting',
  }, {
    description: 'Parse markdown code',
    icon: 'chrome_reader_mode',
    route: 'markdown',
    title: 'Markdown',
  }, {
    description: 'Build forms from a JS object',
    icon: 'format_align_center',
    route: 'dynamic-forms',
    title: 'Dynamic Forms',
  }, {
    description: 'Http wrappers and helpers',
    icon: 'http',
    route: 'http',
    title: 'HTTP Service',
  }, {
    description: 'Simple responsive charts',
    icon: 'show_chart',
    route: 'charts',
    title: 'TD Charts',
  }];

  external: Object[] = [{
    description: 'Declarative D3 framework for ng2',
    icon: 'insert_chart',
    route: 'ngx-charts',
    title: 'NGX-Charts',
  }, {
    description: 'i18n library for ng2',
    icon: 'language',
    route: 'ngx-translate',
    title: 'NGX-Translate',
  }];

  constructor(public media: TdMediaService) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }
}
