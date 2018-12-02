import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { UserDataProvider } from '../providers/user-data/user-data';
import { PostDataProvider } from '../providers/post-data/post-data';
import { EditPage } from '../pages/edit/edit';
import { ViewDetailPage } from '../pages/view-detail/view-detail';
import { ViewDetailPageModule } from '../pages/view-detail/view-detail.module';
import {IonTagsInputModule} from "ionic-tags-input";
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostDetailPage,
    LoginPage,
    RegisterPage,
    EditPage,
    ViewDetailPage,
    TabsPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonTagsInputModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostDetailPage,
    LoginPage,
    RegisterPage,
    EditPage,
    ViewDetailPage,
    TabsPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    PostDataProvider,
    Camera
  ]
})
export class AppModule {}
