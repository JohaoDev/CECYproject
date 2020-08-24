import { Component, OnInit } from "@angular/core";
//import {CountryService} from '../../../../demo/service/countryservice';
//import { SelectItem, MenuItem } from "primeng/api";
import { BreadcrumbService } from "../../../../shared/breadcrumb/breadcrumb.service";
// import { NgxSpinnerService } from "ngx-spinner";

import { CecyServiceService } from "../../../../services/cecy/cecy-service.service";

@Component({
  selector: "app-cursos-docente",
  templateUrl: "./cursos-docente.component.html",
})
export class CursosDocentesComponent implements OnInit {
  constructor(
    private breadcrumbService: BreadcrumbService,
    private cecyService: CecyServiceService
  ) {
    this.breadcrumbService.setItems([
      { label: "CEC-Y", routerLink: ["/cecy/cursos-docente"] },
      { label: "Cursos Docente" },
    ]);
  }

  ngOnInit() {
    this.obtenerCursosDocente();
  }

  obtenerCursosDocente() {
    //TRAER CURSOS DE DOCENTE
    this.cecyService.get("agreements").subscribe((response) => {
      console.log(response);
    });
  }

  //test
  guardar() {
    this.cecyService
      .post("agreements", {
        name: "test2",
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  actualizar() {
    let id = prompt("Ingrese ID"),
      text = prompt("TEXTO");

    this.cecyService
      .update("agreements/" + id, {
        name: text,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  eliminar() {
    let id = prompt("Ingrese ID");

    this.cecyService.delete("agreements/" + id).subscribe((response) => {
      console.log(response);
    });
  }
}
