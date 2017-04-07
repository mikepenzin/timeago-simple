'use strict';

var expect = require('chai').expect;
var timeago = require('../index');

describe('#numFormatter', function() {
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
        expect(result).to.equal('7 month ago');
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
    
});