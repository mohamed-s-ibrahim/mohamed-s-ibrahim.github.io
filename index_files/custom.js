$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '6466726524',
        limit: 30,
        resolution: 'standard_resolution',
        accessToken: '6466726524.1677ed0.6c30009956794cba8469ae7ecb93680e',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});