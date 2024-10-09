const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () =>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);
        
    });
});

describe('Test POST /launches', () => {
    test('It should respond with 201  Created',  async () => {
        const response = await request(app)
            .post('/launches')
            .send({
                mission : 'ABC D',
                rocket : 'ABC n',
                target : 'Alpha Centauri b', 
                launchDate : 'May 31, 2079'
            })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(201);

        expect(response.body).toMatchObject({

        });
    });
    test('It should catch missing required properties', ()=> {});
    test('It should catch invalid dates', () => {});
});