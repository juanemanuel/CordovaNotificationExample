/**
 * Created by juane on 29/04/2016.
 */
angular.module('ionic.utils', ['ngCordova'])
.factory('$notificationHelper',['$cordovaLocalNotification',
  function($cordovaLocalNotification){
    return{
      saveSchedule: function(schedule) {
        //checking permissions
        if (window.cordova && !$cordovaLocalNotification.hasPermission()){
            $cordovaLocalNotification.registerPermission();
        }

        var now = new Date();

        $cordovaLocalNotification.schedule(
          {
            id: schedule.id,
            at: now.setMinutes(now.getMinutes() + 1)
          });
        },
      deleteSchedule: function(schedule){
        if(window.cordova)
          $cordovaLocalNotification.cancel(schedule.id);
      }
    };
  }]);

