
(function () {

    // WAYPOINTS
    var waypoints = $('.waypoint-bottom').waypoint(function (direction) {
        var className = 'is-view';
        if (this.element.classList)
            this.element.classList.add(className);
        else
            this.element.className += ' ' + className;
    }, {
        offset: 'bottom-in-view'
    });

    var waypoints2 = $('.waypoint-middle').waypoint(function (direction) {
        var className = 'is-view';
        if (this.element.classList)
            this.element.classList.add(className);
        else
            this.element.className += ' ' + className;
    }, {
        offset: '85%'
    });

})();
