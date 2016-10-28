// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngSanitize', 'ngCordova'])

.run(function ($ionicPlatform, $cordovaNetwork, $rootScope, $ionicPopup)
{
    $ionicPlatform.ready(function ()
    {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard)
        {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar)
        {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }


        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function (event, networkState)
        {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Offline',
                template: 'You must be connected to a Wi-Fi or celluar data network.',
                cancelText: 'Cancel',
                okText: 'OK'
            });

            confirmPopup.then(function (res)
            {
                if (res)
                {
                    ionic.Platform.exitApp();
                }
                else
                {
                }
            });
        })

    });
})

.config(function ($stateProvider, $urlRouterProvider)
{
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html'
            }
        }
    })
    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            }
        }
    })
    .state('app.home', {
          url: '/home',
          views: {
              'menuContent': {
                  templateUrl: 'templates/home.html',
                  controller: 'HomeCtrl'
              }
          }
    })
    .state('app.verse', {
        url: '/verse',
        views: {
            'menuContent': {
                templateUrl: 'templates/verse.html',
                controller: 'VerseCtrl'
            }
        }
    })
    .state('app.saturday', {
        url: '/saturday',
        views: {
            'menuContent': {
                templateUrl: 'templates/saturday.html',
                controller: 'SaturdayCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
