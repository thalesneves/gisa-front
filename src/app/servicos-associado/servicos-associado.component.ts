import { ServicosAssociadoService } from './servicos-associado.service';
import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-servicos-associado',
  templateUrl: './servicos-associado.component.html',
  styleUrls: ['./servicos-associado.component.css']
})
export class ServicosAssociadoComponent implements OnInit {

  fluxos: any[];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private servicosAssociadoService: ServicosAssociadoService
  ) {
    this.fluxos = [];

    this.fluxos = [
      {
        nomeFluxo: 'Processo 1',
        nomeArquivo: 'Processo_1.bpmn',
        data: '10/11/2021 22:45:20'
      }
    ];
  }

  ngOnInit(): void {}

  public loadBPMN(url: string): void {
    window.open(url, "_blank");
  }

  public confirmDialog(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      key: 'exclusion',
      accept: () => { this.messageService.add({severity:'success', detail:'Exclusão realizada com sucesso!'}); }
    });
  }

  public uploadDialog(): void {
    this.confirmationService.confirm({ key: 'upload' });
  }

  public uploadFile(event: any, flowName: string): void {
    if (event.files && event.files[0]) {
      this.servicosAssociadoService.uploadFile(event.files[0], flowName);
      this.messageService.add({severity:'success', detail:'Upload realizado com sucesso!'});
    } else {
      this.messageService.add({severity:'error', detail:'Houve problemas com o upload!'});
    }
  }

}