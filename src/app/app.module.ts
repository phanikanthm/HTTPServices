import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { FormsModule} from '@angular/forms';
import { PutComponent } from './put/put.component';
import { DeleteComponent } from './delete/delete.component';
import { WeatherapiComponent } from './weatherapi/weatherapi.component';
import { UserComponent } from './user/user.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ProductComponent,
    PutComponent,
    DeleteComponent,
    WeatherapiComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
