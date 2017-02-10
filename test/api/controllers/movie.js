var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function () {

    describe('movies', function () {

        describe('GET /movie', function () {

            it('should return a list of objects', function (done) {

                request(server)
                    .get('/movie')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);

                        res.body.should.not.be.eql(null);

                        done();
                    });
            });

            it('should accept a movie object parameter', function (done) {

                request(server)
                    .post('/movie')
                    .send({
                        "title": "Mission Impossible ",
                        "year": 2015
                    })
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function (err, res) {
                        should.not.exist(err);

                        res.body.should.not.be.eql(null);

                        done();
                    });
            });

        });

    });

});
