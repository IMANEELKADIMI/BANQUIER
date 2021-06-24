import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Creneau } from '../../model/Creneau';
import { MatTableDataSource } from '@angular/material/table';
import { CreneauService } from '../../service/Creneau.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-Creneau-list',
  templateUrl: './Creneau-list.component.html',
  styleUrls: ['./Creneau-list.component.css'],
})
export class CreneauListComponent implements OnInit {
  CRENEAUX!: Creneau[];

  dataSource = new MatTableDataSource<Creneau>(this.CRENEAUX);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'dateDebut',
    'dateFin',
    'status',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private creneauService: CreneauService,
    public dialog: MatDialog
  ) {}

  deleteOperator(id: number) {
    this.creneauService.delete(id).subscribe(
      (data) => {
        console.log(data);

        this.creneauService.findAll().subscribe(
          (data) => {
            this.CRENEAUX = data;
            this.dataSource = new MatTableDataSource<Creneau>(this.CRENEAUX);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Creneau>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.creneauService.findAll().subscribe(
      (data) => {
        console.log(data);
        this.CRENEAUX = data;
        this.dataSource = new MatTableDataSource<Creneau>(this.CRENEAUX);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
        this.dataSource = new MatTableDataSource<Creneau>(null);
      }
    );
  }

  openDialog(code: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous supprimer le creneau ' + code + '?',
        codeSupp: code,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteOperator(result.data.codeSupp);
      }
    });
  }
}
