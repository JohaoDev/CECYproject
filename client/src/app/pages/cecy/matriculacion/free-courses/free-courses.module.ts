import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomeRoutes } from "./free-courses.routing";
import { FormsModule } from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";
import { MultiSelectModule } from "primeng/multiselect";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { SpinnerModule } from "primeng/spinner";
import { SliderModule } from "primeng/slider";
import { LightboxModule } from "primeng/lightbox";
import { ListboxModule } from "primeng/listbox";
import { RatingModule } from "primeng/rating";
import { ColorPickerModule } from "primeng/colorpicker";
import { EditorModule } from "primeng/editor";
import { ToggleButtonModule } from "primeng/togglebutton";
import { SelectButtonModule } from "primeng/selectbutton";
import { SplitButtonModule } from "primeng/splitbutton";
import { PasswordModule } from "primeng/password";
import { CoursesComponent } from "./courses/courses.component";
import { DetailsCourseComponent } from "./details-course/details-course.component";
import { RegistrationComponent } from "./registration/registration.component";
import { CarouselModule } from "primeng/carousel";
import { AccordionModule } from "primeng/accordion";
import { OverlayPanelModule } from "primeng/overlaypanel";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    AutoCompleteModule,
    MultiSelectModule,
    CalendarModule,
    ChipsModule,
    CarouselModule,
    OverlayPanelModule,
    CheckboxModule,
    AccordionModule,
    RadioButtonModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    SpinnerModule,
    SliderModule,
    LightboxModule,
    ListboxModule,
    RatingModule,
    ColorPickerModule,
    EditorModule,
    ToggleButtonModule,
    SelectButtonModule,
    SplitButtonModule,
    PasswordModule,
  ],
  declarations: [
    CoursesComponent,
    DetailsCourseComponent,
    RegistrationComponent,
  ],
})
export class DashboardModule {}
