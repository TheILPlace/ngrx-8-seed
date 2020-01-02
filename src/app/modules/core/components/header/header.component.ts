import { Component, OnInit } from '@angular/core';
import { RootStoreFacadeService } from '../../../root-store/state/root-store.facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rootStoreFacadeService: RootStoreFacadeService) { }

  userName$ = this.rootStoreFacadeService.userName$;


  ngOnInit() {

    this.rootStoreFacadeService.loadUserName();
  }

}
