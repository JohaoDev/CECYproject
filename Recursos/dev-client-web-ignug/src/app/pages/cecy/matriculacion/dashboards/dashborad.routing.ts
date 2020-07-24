import { Routes } from "@angular/router";
import { DashboardCoordinadorComponent } from "./dashboard-coordinador/dashboard-coordinador.component";
import { MatriculasComponent } from "./matriculas/matriculas.component";
import { BienvenidaComponent } from "./bienvenida/bienvenida.component";
import { EstadoAcademicoComponent } from "./estado-academico/estado-academico.component";

export const HomeRoutes: Routes = [
  {
    path: "",
    children: [
      // Componentes complementarios al sistema
      {
        path: "bienvenida",
        component: BienvenidaComponent,
      },
      {
        path: "matriculas",
        component: MatriculasComponent,
      },
      {
        path: "estado-academico",
        component: EstadoAcademicoComponent,
      },
      // Roles del sistema
      {
        path: "coordinador",
        component: DashboardCoordinadorComponent,
      },
      {
        path: "estudiante",
        component: DashboardCoordinadorComponent,
      },
      {
        path: "secretaria",
        component: DashboardCoordinadorComponent,
      },
      {
        path: "vicerrector",
        component: DashboardCoordinadorComponent,
      },
      {
        path: "rector",
        component: DashboardCoordinadorComponent,
      },
      {
        path: "administrador",
        component: DashboardCoordinadorComponent,
      },
      {
        path: "docente",
        component: DashboardCoordinadorComponent,
      },
    ],
  },
];
