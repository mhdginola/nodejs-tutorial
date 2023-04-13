import request from 'supertest';
import app from '../index';

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/');
    expect(res.statusCode).toEqual(200);
    // console.log(res);
    expect(res.text).toEqual('Hello World!');
    // expect(res.body).toHaveProperty('hello')
  })
})