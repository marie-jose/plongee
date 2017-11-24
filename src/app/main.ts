@angular.module ('starter', ['ionic','ngCordova'])
.factory('PlongeesDataService', function ($cordovaSQLite, $ionicPlatform) {
  var db, dbName = "plongee.db"

  function useWebSql() {
    db = window.openDatabase(dbName, "1.0", "Plongee database", 200000)
    console.info('Using webSql')
  }

  function useSqlLite() {
    db = $cordovaSQLite.openDB({name: dbName, location : 1})
    console.info('Using SQLITE')
  }

  function initDatabase(){
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS T_NOTE (id integer primary key, prof1, duree TIME, 3M SMALLINT, DTR SMALLINT, GPS TINYTEXT)')
      .then(function(res){

      }, onErrorQuery)
  }

  $ionicPlatform.ready(function () {
    if(window.cordova){
      useSqlLite()
    } else {
      useWebSql()
    }
     
    initDatabase()
  })

  function onErrorQuery(err){
    console.error(err)
  }

  return {
    createNote: function (note) {
      return $cordovaSQLite.execute(db, 'INSERT INTO T_NOTE (title, content) VALUES(?, ?)', [note.title, note.content])
    },
    updateNote: function(note){
      return $cordovaSQLite.execute(db, 'UPDATE T_NOTE set title = ?, content = ? where id = ?', [note.title, note.content, note.id])
    },
    getAll: function(callback){
      $ionicPlatform.ready(function () {
        $cordovaSQLite.execute(db, 'SELECT * FROM T_NOTE').then(function (results) {
          var data = []

          for (i = 0, max = results.rows.length; i < max; i++) {
            data.push(results.rows.item(i))
          }

          callback(data)
        }, onErrorQuery)
      })
    },

    deleteNote: function(id){
      return $cordovaSQLite.execute(db, 'DELETE FROM T_NOTE where id = ?', [id])
    },

    getById: function(id, callback){
      $ionicPlatform.ready(function () {
        $cordovaSQLite.execute(db, 'SELECT * FROM T_NOTE where id = ?', [id]).then(function (results) {
          callback(results.rows.item(0))
        })
      })
    }
  }
})


//DataBase instance.
/*var db, dbname="plongee.db";



.run(function(ionicPlatform, $cordovaSQLite) {
 
  $ionicPlatform.ready(function(){
      //important!!
      //Instantiate database/connecion after ionic paltform is ready.
      //
    db = $cordovaSQLite.openDB({name: dbname, location: "default"}),
    console.info('Using SQLite')
    function initDatabase(){
      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Prof10m (id integer primary key, duree TIME, 3M int(11), DTR INT(11), GPS TEXT)')
        .then(function(res){
 
        }, onErrorQuery)
    }


    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Message (id INTEGER PRIMARY KEY AUTOINCREMENT, duree TIME, 3M int(11), DTR INT(11), GPS TEXT)');
      $scope.save =function(newMessage){
         $cordovaSQLite.execute(db, 'INSERT INTO Message (message) values (?)', [newMessage])
          .then(function(result){
             $scope.statusMessage ="Message saved successful, cheers!";
            }, function(error){
             $scope.statusMessage ="Error on saving" + error.message;    
          })
      }
      $scope.load =function(){
              // Execute SELECT statement to load message from DataBase
            $cordovaSQLite.execute(db, 'SELECT FROM Messages ORDER BY id DESC')
           .then (function(result){
            if (result.row.length >0){
              $scope.newMessage =result.row.item(0).message;
              $scope.statusMessage ="Message loaded successful, cheer!";
            }
           }, function(error) {
            $scope.statusMessage ="Error on loading: " +error.message;
          }) 
      } 
    },
  } 
)
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

platformBrowserDynamic().bootstrapModule(AppModule);
