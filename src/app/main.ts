//var db;
//var dbName = "plongee.db";
@angular.module ('starter', ['ionic','ngCordova'])

.factory('PlongeesDataService', function ($cordovaSQLite, $ionicPlatform) {
  platformBrowserDynamic().bootstrapModule(AppModule);},
 
  function useWebSql() {
    db = window.openDatabase(dbName, "1.0", "Plongee database", 200000)
    console.info('Using webSql')
  },

  function useSqlLite() {
    db = $cordovaSQLite.openDB({name: dbName, location : 1})
    console.info('Using SQLITE')
  },

  function initDatabase(){
    var T =new Array(); 
    for ( i=1 ; i < 23 ; i++) {
        T[i] = $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS T[i] (id integer primary key, prof1, duree TIME, 3M SMALLINT, DTR SMALLINT, GPS TINYTEXT)')
           .then(function(res)
                {},
                 onErrorQuery)
        } $i++;
  },

  $ionicPlatform.ready(function () {
    if(window.cordova){
      useSqlLite()
    } else {
      useWebSql()
    } 
    initDatabase()
 return {
    
  createTableT1: function (T1) {
    var pal1 = '3m';
    var duree1 = '00:15:00',
    var duree2 = '00:30:00',
    var duree3 = '00:45:00',
    return $cordovaSQLite.execute(db, 'INSERT INTO T1 (duree (time), pal1 (int), DTR (int), GPS (text)) VALUES(duree1,0,1,A),(duree2,0,1,B),(duree3,0,1,C),(01:15:00,0,1,D),(01:45:00,0,1,E),(02:15:00,0,1,F),(03:00:00,0,1,G),(04:00:00,0,1,H),(05:15:00,0,1,I),(06:00:00,0,1,J);', [t1.duree, t1.pal1, t1.DTR, t1.GPS])
  },
  createTableT2: function (T2) {
  return $cordovaSQLite.execute(db, 'INSERT INTO T2 (duree (time), pal1 (int), DTR (int), GPS (text)) VALUES(duree1,0,1,B),(duree2,0,1,C),(duree3,0,1,D),(01:00:00,0,1,E),(01:30:00,0,1,F),(01:45:00,0,1,G),(02:15:00,0,1,H),(02:45:00,0,1,I),(03:15:00,0,1,J),(04:15:00,0,1,K),(05:00:00,0,1,L),(06:00:00,0,1,M);', [t1.duree, t1.pal1, t1.DTR, t1.GPS])
},
  /*  updateNote: function(note){
      return $cordovaSQLite.execute(db, 'UPDATE T1 set title = ?, content = ? where id = ?', [note.title, note.content, note.id])
    }, */
    getAll: function(callback){
      $ionicPlatform.ready(function () {
        $cordovaSQLite.execute(db, 'SELECT * FROM T1').then(function (results) {
          var data = []

          for (i = 0, max = results.rows.length; i < max; i++) {
            data.push(results.rows.item(i))
          }

          callback(data)
        }, onErrorQuery)
      })
    },

   /* deleteNote: function(id){
      return $cordovaSQLite.execute(db, 'DELETE FROM T_NOTE where id = ?', [id])
    }, */

    getById: function(id, callback){
      $ionicPlatform.ready(function () {
        $cordovaSQLite.execute(db, 'SELECT * FROM T1 where id = ?', [id]).then(function (results) {
          callback(results.rows.item(0))
        })
      })
    }
  }
  }),

    function onErrorQuery(err){
      console.error(err)
    })
  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppModule } from './app.module';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';