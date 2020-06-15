import { Component, OnInit } from '@angular/core';
import { Card } from '../../../../core/models/card.model';
import { Constants } from '../../../../utils/constants';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { CardsService } from '../../../../core/services/cards/cards.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  displayedColumns: string[] = ['description', 'dateCreate', 'moneda', 'idCard'];
  dataSource: Card[];
  dataObject: Card[];
  lenghTable: number;
  defaultSizePage: number;
  arraySizes: number[];
  pageEvent: PageEvent;
  descriptionFilter: string;

  constructor(
    public dialog: MatDialog,
    private service: CardsService
  ) {
    this.defaultSizePage = Constants.pageSizes[0];
    this.arraySizes = Constants.pageSizes;
    this.getCards();
   }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CardDetailComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getCards();
    });
  }

  getCards(){
    this.service.getCard('', this.descriptionFilter).subscribe(result => {
      this.dataObject = result;
      this.dataSource = result;
      this.lenghTable = result.length;
      const nuevoArray = this.dataObject.filter((item, index) => {
        return ( index >= 0 && index <= this.defaultSizePage - 1);
      });
      this.dataSource = nuevoArray;
    });
  }

  public getServerData(event?: PageEvent): any{
    const nuevoArray = this.dataObject.filter((item, index) => {
      return ( index >= (event.pageIndex * event.pageSize) && index <= (event.pageSize * (event.pageIndex + 1) - 1));
    });
    this.dataSource = nuevoArray;
  }

  delete(element: any){
    console.log(element);
    if (confirm(`Esta seguro de eliminar el elemento "${element.description}"`)) {
      this.service.deleteCard(element.idCard)
      .subscribe(result => {
        if (result != null){
          console.log(result);
          this.getCards();
          alert(`Se elimino el elemento correctamente`);
        }
      });
    }
  }
}
