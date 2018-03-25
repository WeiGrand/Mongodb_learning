/**
 * Created by heweiguang on 2018/3/24.
 */

const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app', () => {

    it('handles a GET request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.hi === 'there');
                done();
            });
    });
});
