var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
        var self = this;
        this.store = new MemoryStore(function () {
            self.renderHomeView();
        });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        //alert("Ready...Go");
        //$("body").tabs(); // turns the hyperlinks into tabs
        
        $('#page-content-wrapper').click(function () {
            $("#wrapper").removeClass("active");
        });


        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("active");
        });
        
        $('.has-tip').tooltip({
            container: 'body'
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    renderHomeView: function () {
        var html =
            "<div class='header'><h1>Home</h1></div>" +
                "<div class='search-view'>" +
                "<input class='search-key'/>" +
                "<ul class='employee-list'></ul>" +
                "</div>";
        $('body').html(html);
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },
};

app.initialize();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// use $(document).ready function to
// make sure that the code executes only after the document's 
// DOM has been loaded into the browser.
//$(document).ready(function () {
    // when page1Link link is clicked, page1 shows, 
    // page2 hides
	
        //alert("Ready...Go");
        //$("body").tabs(); // turns the hyperlinks into tabs
    
    //$("#page1Link").bind("click", function () {
    //    $("#page1").show();
    //    $("#page2").hide();
    //});

    //// when page2Link link is clicked, page2 shows, 
    //// page1 hides
    //$("#page2Link").bind("click", function () {
    //    $("#page1").hide();
    //    $("#page2").show();
    //});
//});

$(function () {
    $('#page-content-wrapper').click(function () {
        $("#wrapper").removeClass("active");
    });


    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

});
$('.has-tip').tooltip({
    container: 'body'
});