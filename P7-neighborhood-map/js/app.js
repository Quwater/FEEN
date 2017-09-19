var huangJiangLat = 22.9152929;
var huangJiangLng = 114.0013883;
var config = {
    apiKey: 'VWGK3UUZFWBGUZ45JLO2GK4JL4WP4XTL4L2HVU41DKUP5L3G',
    authUrl: 'https://foursquare.com/',
    apiUrl: 'https://api.foursquare.com/',
    clientSecret: 'C52E5KAHGQJAGSVTBRWAZJWBS2WOEO0EN1DAOXTDLIGWZWUV',
};

function init() {
    initMenu();
    loadData();
}

function loadData() {
    // 通过 foursquare API 检索附近标志性地点，接受数据并初始化地图。
    $.getJSON(config.apiUrl + 'v2/venues/explore?ll=' + huangJiangLat + ',' + huangJiangLng + '&client_id=' + config.apiKey + '&client_secret=' + config.clientSecret + '&v=20140601', {}, function (data) {
        var locations = [];
        var venues = data.response.groups[0].items;
        for (var i = 0; i < venues.length; i++) {
            var venue = venues[i].venue;
            var name = venue.name;
            var url = venue.url;
            var rating = venue.rating;
            var address = venue.location.address;
            var city = venue.location.city;
            var state = venue.location.state;
            var position = {
                lat: venue.location.lat,
                lng: venue.location.lng
            };
            locations.push({
                title: name,
                url: url,
                rating: rating,
                address: address,
                city: city,
                state: state,
                position: position
            });
        }
        initMap(locations);
    })
    .fail(function(){
        document.getElementById('map').innerHTML = "加载地址信息失败，请稍后再尝试。";
    });
}


function initMap(locations) {
    var latlngbounds = new google.maps.LatLngBounds();
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 22.9152929,
            lng: 114.0013883
        },
        zoom: 8,
        mapTypeControl: false
    });
    addMarkers(locations, map, latlngbounds);
    map.fitBounds(latlngbounds);

    var ViewModel = function () {
        var self = this;

        //将所有的地点按字母表顺序排序
        self.locations = ko.observableArray(locations).sort(function (left, right) {
            return left.title == right.title ? 0 : left.title < right.title ? -1 : 1;
        });

        self.filter = ko.observable("");

        self.filteredLocations = ko.computed(function () {
            return ko.utils.arrayFilter(self.locations(), function (location) {
                var contains = location.title.toUpperCase().includes(self.filter().toUpperCase());
                location.marker.setVisible(contains);
                return contains;
            });
        });

        self.noMatchesFound = ko.computed(function () {
            return self.filteredLocations().length === 0;
        });

        self.clickLocation = function (location) {
            return function (location) {
                clickLocation(location)();
            };
        };
    };
    ko.applyBindings(new ViewModel());
}

function clickLocation(location) {
    //使用闭包来保存对 marker 的引用
    return function () {
        if (location.marker.getAnimation() !== null) {
            location.infoWindow.close();
            location.marker.setAnimation(null);
        } else {
            location.infoWindow.open(map, location.marker);
            location.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    };

}

function addMarkers(locations, map, latlngbounds) {

    locations.forEach(function (location) {

        //通过每一个标记的地址信息设置信息窗口
        var url = location.url ? location.url : "";
        var href = location.url ? 'href="' + location.url + '"' : "";
        var urlDisplay = url === "" ? "No website" : "Website";
        var contentString = '<h1>' + location.title + '</h1>' +
            '<h2>' + location.address + ' ' + location.city + ', ' + location.state + '</h2>' +
            '<h3><a target="blank"' + href + '>' + urlDisplay + '</a></h3>' +
            '<h3>评分：' + location.rating + '</h3>';
        var infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        //向latlngbounds添加地址位置
        latlngbounds.extend(location.position);

        var marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: location.position
        });

        location.marker = marker;
        location.infoWindow = infoWindow;

        google.maps.event.addListener(location.infoWindow, 'closeclick', function () {
            if (location.marker.getAnimation() !== null) {
                location.marker.setAnimation(null);
            }
        });

        location.marker.addListener('mousedown', clickLocation(location));
    });
}

//设置侧边栏的事件处理程序
function initMenu() {
    var menuButton = document.getElementById('menu');
    var menuCloseButton = document.getElementById('menu-close');
    var sideNav = document.getElementById('list-view');
    menuCloseButton.addEventListener('mousedown', function () {
        toggleOpen(sideNav);
    });
    menuButton.addEventListener('mousedown', function () {
        toggleOpen(sideNav);
    });
}

function toggleOpen(ele) {
    ele.classList.toggle('open');
}

function googleMapsError(){
    document.getElementById('map').innerHTML = "由于某种原因，加载谷歌地图失败。";
}
