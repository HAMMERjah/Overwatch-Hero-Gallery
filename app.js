var app= angular.module('myApp', []);

//create controller w/ Heroes for row 1//
app.controller('controllerOne', function($scope){
  $scope.heroesOne=[
    {name:'Ana', icon:'http://res.cloudinary.com/hammerjah/image/upload/v1469383262/overwatch/Ana_ck25do.png'},
    {name: 'Bastion', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Bastion_ujj0v9.png'},
    {name: 'D.Va', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383262/overwatch/Dva_jnv85z.png'},
    {name: 'Genji', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Genji_hv0kkq.png'},
    {name: 'Hanzo', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Hanzo_ek4v3c.png'},
    {name: 'Junkrat', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Junkrat_wiqai6.png'},
    {name: 'Lúcio', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Lucio_dbrcqn.png'},
    {name: 'McCree', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Mccree_imdubv.png'},
    {name: 'Mei', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Mei_waxusa.png'},
    {name: 'Mercy', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Mercy_oeeqnt.png'},
    {name: 'Pharah', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383261/overwatch/Pharah_s4skk4.png'}
  ]; 
  });

//create controller w/ Heroes for row 2//
app.controller('controllerTwo', function($scope){
  $scope.heroesTwo=[
    {name: 'Reaper', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383262/overwatch/Reaper_nqijqa.png'},
    {name: 'Reinhardt', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383262/overwatch/Reinhardt_jlslqs.png'},
    {name: 'Roadhog', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383262/overwatch/Roadhog_ko5e1y.png'},
    {name: 'Soldier: 76', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383262/overwatch/Soldier_brdpzn.png'},
    {name: 'Symmetra', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383262/overwatch/Symmetra_w8u6hy.png'},
    {name: 'Torbjörn', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383263/overwatch/Torbjorn_l2ubuk.png'},
    {name: 'Tracer', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383263/overwatch/Tracer_rr0ugk.png'},
    {name: 'Widowmaker', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383263/overwatch/Widow_jqsyk9.png'},
    {name: 'Winston', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383263/overwatch/Winston_jms0fy.png'},
    {name: 'Zarya', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383263/overwatch/Zarya_yzrnyh.png'},
    {name: 'Zenyatta', icon: 'http://res.cloudinary.com/hammerjah/image/upload/v1469383263/overwatch/Zenyatta_d7xiiv.png'}
  ];
});
