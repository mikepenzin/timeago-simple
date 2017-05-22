'use strict';


var expect = require('chai').expect;
var timeago = require('../index');

describe('#timeago', function() {
    
    // Basic format acception
    
    it('Should convert date (Tue Mar 21 2012 15:08:46 GMT+0000 (UTC)) to relative date since', function() {
        var result = timeago.simple("Tue Mar 21 2012 15:08:46 GMT+0000 (UTC)");
        expect(result).to.equal('6 years ago');
    });

    it('Should convert date (Tue Apr 2 2014) to relative date since', function() {
        var result = timeago.simple("Tue Apr 2 2014");
        expect(result).to.equal('4 years ago');
    });

    it('Should convert date (12/31/2004) to relative date since', function() {
        var result = timeago.simple("12/31/2004");
        expect(result).to.equal('13 years ago');
    });

    it('Should convert date (2016/09/14) to relative date since', function() {
        var result = timeago.simple("2016/09/14");
        expect(result).to.equal('8 month ago');
    });
    
    //Relative past date
    
    it('Should convert date (now - three years ago) to relative date since', function() {
        var result = timeago.simple(DateCalc(94670856000));
        expect(result).to.equal('4 years ago');
    });
    
    it('Should convert date (now - 5 month ago) to relative date since', function() {
        var result = timeago.simple(DateCalc(13148730000));
        expect(result).to.equal('5 month ago');
    });
    
    it('Should convert date (now - 8 hours ago) to relative date since', function() {
        var result = timeago.simple(DateCalc(28800000));
        expect(result).to.equal('8 hours ago');
    });
    
    it('Should convert date (now - 5 minutes ago) to relative date since', function() {
        var result = timeago.simple(DateCalc(300000));
        expect(result).to.equal('5 minutes ago');
    });
    
    it('Should convert date (now - 30 seconds ago) to relative date since', function() {
        var result = timeago.simple(DateCalc(30150));
        expect(result).to.equal('31 seconds ago');
    });
    
    // Relative future date
    
    it('Should convert date (now + 4 years) to relative date in the future', function() {
        var result = timeago.future(FutureDateCalc(94670856000));
        expect(result).to.equal('in 4 years');
    });
    
    it('Should convert date (now + 5 month) to relative date in the future', function() {
        var result = timeago.future(FutureDateCalc(13148730000));
        expect(result).to.equal('in 5 month');
    });
    
    it('Should convert date (now + 8 hours) to relative date in the future', function() {
        var result = timeago.future(FutureDateCalc(28800000));
        expect(result).to.equal('in 8 hours');
    });
    
    it('Should convert date (now + 5 minutes) to relative date in the future', function() {
        var result = timeago.future(FutureDateCalc(300000));
        expect(result).to.equal('in 5 minutes');
    });
    
    it('Should convert date (now + 30 seconds) to relative date in the future', function() {
        var result = timeago.future(FutureDateCalc(29850));
        expect(result).to.equal('in 29 seconds');
    });
    
    // Troubleshooting

    it('Should hanlde bad date format (31/12/2004)', function() {
        var result = timeago.simple("31/12/2004");
        expect(result).to.equal('31/12/2004');
    });

    it('Should hanlde bad date format (fdgdfgdfgfg)', function() {
        var result = timeago.simple("fdgdfgdfgfg");
        expect(result).to.equal('fdgdfgdfgfg');
    });
    
    it('Should hanlde bad date format (4366325635463456)', function() {
        var result = timeago.simple("4366325635463456");
        expect(result).to.equal('4366325635463456');
    });
    
    it('Should hanlde bad date format within future function (31/12/2004)', function() {
        var result = timeago.future("31/12/2004");
        expect(result).to.equal('31/12/2004');
    });

    it('Should hanlde bad date format within future function (fdgdfgdfgfg)', function() {
        var result = timeago.future("fdgdfgdfgfg");
        expect(result).to.equal('fdgdfgdfgfg');
    });
    
    it('Should hanlde bad date format within future function (4366325635463456)', function() {
        var result = timeago.future("4366325635463456");
        expect(result).to.equal('4366325635463456');
    });
    
    it('Should hanlde when now date is less than entered date in future  (now - 4 years)', function() {
        var result = timeago.future(DateCalc(94670856000));
        expect(result).to.equal(DateCalc(94670856000));
    });
});


function DateCalc(milliseconds) {
    var time = Date.now() - milliseconds;
    var date = new Date(time);
    return date.toString();
}

function FutureDateCalc(milliseconds) {
    var time = Date.now() + milliseconds;
    var date = new Date(time);
    return date.toString();
}