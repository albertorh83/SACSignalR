define([], function () {

    return {
        newGuid: function () {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        },
        emptyGuid: '00000000-0000-0000-0000-000000000000'
    };

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

});