import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Text } from '@angular/compiler';

/**
 * Generated class for the SqLitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const DATABASE_FILE_NAME : string = 'data.db ';

@IonicPage()
@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html',
})
export class SqLitePage {

  private db: SQLiteObject;
  T6m: String[] = ['Profondeur', 'duree','Pal1','DTR', 'GPS'];
  T8m: String[] = ['Profondeur', 'duree','Pal1','DTR', 'GPS'];
  'Profondeur' : Number;
  'Duree' : String;
  'Pal1' : Number;
  'DTR' : Number;
  'GPS' : Text;



  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private sqlite : SQLite){

            this.createDatabaseFile();
  }
private createDatabaseFile(): void {
  this.sqlite.create({
    name : DATABASE_FILE_NAME ,
    location : 'default'
  })
  .then((db : SQLiteObject) => {
    console.log('Bdd créée !');
    this.db= db;
    this.createTables();
  })
  .catch(e =>console.log(e));
}

  private createTables() : void {
    this.db.executeSql ('CREATE TABLE IF NOT EXISTS T6m', {})
      .then(() => {
        console.log('Table T6m created !');
      })
      .catch(e => console.log(e));
  }
  /*  this.db.executeSql ('CREATE TABLE  IF NOT EXISTS 'T8m',{})
  /* (Profondeur Number default not NULL,
                                                         duree Time DEFAULT Not NULL,
                                                          Pal1 Number DEFAULT NULL,
                                                          DTR Number DEFAULT Not NULL,
                                                          GPS String)' ,{})*/
  /*.then(()=> console.log('Table T8m created !'))
  .catch(e => console.log(e));*/
}
