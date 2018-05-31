import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { MyFilmsComponent } from './my-films/my-films.component';
import { FilmComponent } from './film/film.component';
import { BalanceComponent } from './balance/balance.component';
import { FilterComponent } from './filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import 'hammerjs';
import { MoviesService } from './movies.service';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
// import { FilterPipe } from './pipeFilter';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './movie-filter.pipe';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    MyFilmsComponent,
    FilmComponent,
    BalanceComponent,
    FilterComponent,
    // FilterPipe,
    MovieFilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatTabsModule,
    CommonModule,
    // FilterPipe
    FormsModule,
    MatIconModule

  ],
  providers: [MoviesService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
