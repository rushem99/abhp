angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $ionicPlatform, $timeout, $sce)
{

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
    //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

    
.controller('VerseCtrl', function ($scope, $window)
{
    var versesEnglish = {
        1: "<b>John 3:16</b> <br>For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
        2: "<b>John 3:36</b> <br>He who believes in the Son has everlasting life; and he who does not believe the Son shall not see life, but the wrath of God abides on him.",
        3: "<b>Proverbs 3:5,6</b> <br>Trust in the Lord with all your heart, And lean not on your own understanding;<br>In all your ways acknowledge Him, And He shall direct your paths.",
        4: "<b>Matthew 6:33</b> <br>But seek first the kingdom of God and His righteousness, and all these things shall be added to you. 34 Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble.",
        5: "<b>Jeremiah 29:11</b> <br>For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
        6: "<b>Luke 9:23</b> <br> Then He said to them all, “If anyone desires to come after Me, let him deny himself, and take up his cross daily, and follow Me.",
        7: "<b>Matthew 11:28</b> <br> Come to Me, all you who labor and are heavy laden, and I will give you rest.",
        8: "<b>Isaiah 40:30</b> <br> But those who wait on the Lord<br>Shall renew their strength;<br>They shall mount up with wings like eagles,<br>They shall run and not be weary,<br>They shall walk and not faint.",
        9: "<b>1 Corinthians 15:58</b> <br>Therefore, my beloved brethren, be steadfast, immovable, always abounding in the work of the Lord, knowing that your labor is not in vain in the Lord.",
        10: "<b>John 16:33</b> <br>These things I have spoken to you, that in Me you may have peace. In the world you will[a] have tribulation; but be of good cheer, I have overcome the world.",
        11: "<b>Hebrews 10:24-25</b> <br> And let us consider one another in order to stir up love and good works, not forsaking the assembling of ourselves together, as is the manner of some, but exhorting one another, and so much the more as you see the Day approaching.",
        12: "<b>Isaiah 40:30</b> <br> But those who wait on the Lord<br>Shall renew their strength;<br>They shall mount up with wings like eagles,<br>They shall run and not be weary,<br>They shall walk and not faint.",
        13: "<b>Isaiah 40:30</b> <br> But those who wait on the Lord<br>Shall renew their strength;<br>They shall mount up with wings like eagles,<br>They shall run and not be weary,<br>They shall walk and not faint.",
        14: "<b>Isaiah 40:30</b> <br> But those who wait on the Lord<br>Shall renew their strength;<br>They shall mount up with wings like eagles,<br>They shall run and not be weary,<br>They shall walk and not faint.",
        15: "<b>Matthew 11:28</b> <br> But those who wait on the Lord<br>Shall renew their strength;<br>They shall mount up with wings like eagles,<br>They shall run and not be weary,<br>They shall walk and not faint.",
        16: " Come to Me, all you who labor and are heavy laden, and I will give you rest.",
        17: "value2",
        18: "value2"
    };
    var versesViet = {
        1: "<b>Giăng 3:16</b> <br> Vì Đức Chúa Trời yêu thương thế gian, đến nỗi đã ban Con một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.",
        2: "<b>Giăng 3:36</b> Ai tin Con, thì được sự sống đời đời; ai không chịu tin Con, thì chẳng thấy sự sống đâu, nhưng cơn thạnh nộ của Đức Chúa Trời vẫn ở trên người đó.",
        3: "<b>Châm Ngôn 3:5,6</b> <br> Hãy hết lòng tin cậy Đức Giê-hô-va, Chớ nương cậy nơi sự thông sáng của con;<br>Phàm trong các việc làm của con, khá nhận biết Ngài, Thì Ngài sẽ chỉ dẫn các nẻo của con.",
        4: "<b>Ma-thi-ơ 6:33</b> <br> Vậy, chớ lo lắng chi về ngày mai; vì ngày mai sẽ lo về việc ngày mai. Sự khó nhọc ngày nào đủ cho ngày ấy.",
        5: "<b>Giê-rê-mi-a 29:11</b> <br>Đức Giê-hô-va phán: Vì ta biết ý tưởng ta nghĩ đối cùng các ngươi, là ý tưởng bình an, không phải tai họa, để cho các ngươi được sự trông cậy trong lúc cuối cùng của mình.",
        6: "<b>Lu-ca 9:23</b> <br> Đoạn, Ngài phải cùng mọi người rằng: Nếu ai muốn theo ta, phải tự bỏ mình đi, mỗi ngày vác thập tự giá mình mà theo ta.",
        7: "<b>Ma-thi-ơ 11:28</b> <br>Hỡi những kẻ mệt mỏi và gánh nặng, hãy đến cùng ta, ta sẽ cho các ngươi được yên nghỉ.",
        8: "<b>I-sai-a 40:30</b> <br>Nhưng ai trông đợi Đức Giê-hô-va thì chắc được sức mới, cất cánh bay cao như chim ưng; chạy mà không mệt nhọc, đi mà không mòn mỏi.",
        9: "<b>I Cô-rinh-tô 15:58</b> <br>Vậy, hỡi anh em yêu dấu của tôi, hãy vững vàng, chớ rúng động, hãy làm công việc Chúa cách dư dật luôn, vì biết rằng công khó của anh em trong Chúa chẳng phải là vô ích đâu.",
        10: "<b>Giăng 16:33</b> <br>Ta đã bảo các ngươi những điều đó, hầu cho các ngươi có lòng bình yên trong ta. Các ngươi sẽ có sự hoạn nạn trong thế gian, nhưng hãy cứ vững lòng, ta đã thắng thế gian rồi!",
        11: "<b>Hê-bơ-rơ 10:24-25</b> <br> Ai nấy hãy coi sóc nhau để khuyên giục về lòng yêu thương và việc tốt lành; chớ bỏ qua sự nhóm lại như mấy kẻ quen làm, nhưng phải khuyên bảo nhau, và hễ anh em thấy ngày ấy hầu gần chừng nào, thì càng phải làm như vậy chừng nấy.",
        12: "<b>I-sai-a 40:30</b> <br>  Nhưng ai trông đợi Đức Giê-hô-va thì chắc được sức mới, cất cánh bay cao như chim ưng; chạy mà không mệt nhọc, đi mà không mòn mỏi.",
        13: "<b>I-sai-a 40:30</b> <br>  Nhưng ai trông đợi Đức Giê-hô-va thì chắc được sức mới, cất cánh bay cao như chim ưng; chạy mà không mệt nhọc, đi mà không mòn mỏi.",
        14: "1 Corinthians 15:58",
        15: "value2",
        16: "value2",
        17: "value2",
        18: "value2"
    };
    
    var curDate = new Date();
    var curDayOfMonth = curDate.getDate();

    $scope.verse =
        {
            English: versesEnglish[11],
            Viet: versesViet[11]
        }

    //getVerse
})


.controller('ContactCtrl', function ($scope)
{
    $scope.GotoLink = function (url)
    {
        window.open(url, '_system');
    }
})


.controller('HomeCtrl', function ($scope, $cordovaNetwork, $rootScope)
{
    $scope.isOnline;
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var mediaFrame = $("#mediaFrame");

    document.addEventListener("deviceready", function () {

        $scope.isOnline = $cordovaNetwork.isOnline()

        //if ($scope.isOnline == true)
        //    mediaFrame.attr('src', 'https://www.youtube.com/embed/CLVTSRXmFnw?width=640&height=390&autoplay=1&modestbranding=1&fs=0');

        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            $scope.isOnline = true;
        })

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function (event, networkState)
        {
            $scope.isOnline = false;
        })

    }, false);



    //console.log('width: ' + viewportWidth);
    //console.log('height: ' + viewportHeight);

    // resize the frame width and height to fill the screen size
  if (viewportWidth <= 630)
      mediaFrame.css('width', viewportWidth - 17);
  else
      mediaFrame.css('width', 630).css('height', 360);

  if (viewportHeight <= 360)
      mediaFrame.css('height', viewportHeight - 50);
  else
      mediaFrame.css('height', 360);
})

.controller('SaturdayCtrl', function ($scope)
{
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    var mediaFrame = $("#mediaFrame2");
    //console.log('width: ' + viewportWidth);
    //console.log('height: ' + viewportHeight);

    // resize the frame width and height to fill the screen size
    if (viewportWidth <= 630)
        mediaFrame.css('width', viewportWidth - 17);
    else
        mediaFrame.css('width', 630).css('height', 360);

    if (viewportHeight <= 360)
        mediaFrame.css('height', viewportHeight - 45);
    else
        mediaFrame.css('height', 360);
});
