import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { ProfilePage } from '../pages/profile/profile';
import { MyChatsPage } from '../pages/my-chats/my-chats';
import { ChatPage } from '../pages/chat/chat';
import { Camera } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { ComponentsModule } from '../components/components.module'; //necesario para que funcione el decorador componente

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    ProfilePage,
    MyChatsPage,
    ChatPage

    
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    ProfilePage,
    MyChatsPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
