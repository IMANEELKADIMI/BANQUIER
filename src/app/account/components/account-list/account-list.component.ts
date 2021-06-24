import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AccountService } from '../../service/account.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../model/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  ACCOUNTS!: Account[];
  codeId: string;

  dataSource = new MatTableDataSource<Account>(this.ACCOUNTS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'numero',
    'client',
    'solde',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {
    console.log('AccountList');
    this.codeId = this.route.snapshot.params['id'];
    console.log(this.codeId);
  }

  deleteAccount(id: number) {
    this.accountService.delete(id).subscribe(
      (data) => {
        console.log(data);

        this.accountService.findAll(this.codeId).subscribe(
          (data) => {
            this.ACCOUNTS = data;
            this.dataSource = new MatTableDataSource<Account>(this.ACCOUNTS);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Account>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.accountService.findAll(this.codeId).subscribe(
      (data) => {
        console.log(data);
        this.ACCOUNTS = data;
        this.dataSource = new MatTableDataSource<Account>(this.ACCOUNTS);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
        this.dataSource = new MatTableDataSource<Account>(null);
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
        this.deleteAccount(result.data.codeSupp);
      }
    });
  }
  goToOperations(code: string) {
    this.router.navigate([
      '/client/' + this.codeId + '/account/' + code + '/operations',
    ]);
  }

 
}
