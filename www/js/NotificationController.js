/**
 * Created by juane on 29/04/2016.
 */

app.controller('NotificationController',function($scope, $ionicPopup){

  $scope.showAlert = function(title, message) {
    var alertPopup = $ionicPopup.alert({
      title: title,
      template: message
    });
  };

  $scope.notificationTrigger = function(){

  };

  $scope.$on('onNotificationTrigger', function(event, notification, state) {
    //The state object contains information from the triggered notification
    console.log('Triggering notification');
  });

  $scope.$on('onNotificationClick', function(event, notification, state) {
    console.log('User clicked the notification');

    $scope.showAlert('Alert', 'Notification Clicked');
  });
});
