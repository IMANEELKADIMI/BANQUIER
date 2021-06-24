import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../../model/client';
import { ClientService } from '../../service/client.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  CLIENTS!: Client[];
  agencyId: string;

  dataSource = new MatTableDataSource<Client>(this.CLIENTS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'username',
    'nom',
    'active',
    'prenom',
    'email',
    'cin',
    'adresse',
    'tel',
    'dateNaissance',
    'dateInscription',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private clientService: ClientService, public dialog: MatDialog) {
    this.agencyId = sessionStorage.getItem('agency');
    console.log(this.agencyId);
  }

  deleteClient(id: number) {
    this.clientService.delete(id).subscribe(
      (data) => {
        console.log(data);

        this.clientService.findAll(this.agencyId).subscribe(
          (data) => {
            this.CLIENTS = data;
            this.dataSource = new MatTableDataSource<Client>(this.CLIENTS);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Client>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  sus_act(id: number) {
    this.clientService.sus_act(id).subscribe(
      (data) => {
        console.log(data);

        this.clientService.findAll(this.agencyId).subscribe(
          (data) => {
            this.CLIENTS = data;
            this.dataSource = new MatTableDataSource<Client>(this.CLIENTS);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Client>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    console.log('salam');
    this.clientService.findAll(this.agencyId).subscribe(
      (data) => {
        console.log(data);
        this.CLIENTS = data;
        this.dataSource = new MatTableDataSource<Client>(this.CLIENTS);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
        this.dataSource = new MatTableDataSource<Client>(null);
      }
    );
  }

  openDialog(code: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous supprimer le client ' + code + '?',
        codeSupp: code,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteClient(result.data.codeSupp);
      }
    });
  }

  openDialogg(code: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        message: 'Voulez vous résiler le client ' + code + '?',
        codeSupp: code,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sus_act(result.data.codeSupp);
      }
    });
  }
}
