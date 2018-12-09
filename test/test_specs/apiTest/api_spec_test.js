var chai = require('chai'),chaihttp = require('chai-http');
chai.use(chaihttp);
var supertest = require('supertest');
var chaiexpect = chai.expect;
var _ = require('lodash');

var validator = require('../../validators/schema_validator').validateSchema;

var api = supertest('https://httpbin.org');

describe('BDD TEST SUITE 1',function(){
    it('Test1',function(done){
        api.get('/get')
        .set('Accept','application/json')
        .expect(200)
        .expect(function(res){
               var result =  validator('getRouteSchema',res.body);
               if(!_.isBoolean(result)){
                   throw new Error(result);
               }
        })
        .end(function(err,res){
            if(err) return done(err);
            done();
        })
    })
})