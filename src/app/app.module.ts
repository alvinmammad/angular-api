import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponent } from './pages/post/post.component';
import { CommentComponent } from './pages/comment/comment.component';
import { UserComponent } from './pages/user/user.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'post', component: PostComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  declarations: [AppComponent, PostComponent, CommentComponent, UserComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
