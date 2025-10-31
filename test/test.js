import * as appModule from '../app.js';
import request from 'supertest';
import { expect } from 'chai';


const app = appModule.default;   // default export
const { greet } = appModule;     // named export



describe('GET /', () => {
  it('should return Hello CI/C!', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello CI/C!');
  });
});

describe('GET /hello', () => {
  it('should greet World by default', async () => {
    const res = await request(app).get('/hello');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello World!');
  });

  it('should greet a given name', async () => {
    const res = await request(app).get('/hello?name=Chanda');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello Chanda!');
  });
});

describe('POST /sum', () => {
  it('should return sum of two numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 2, b: 3 });
    expect(res.status).to.equal(200);
    expect(res.body.result).to.equal(5);
  });

  it('should return 400 for invalid input', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 2, b: 'x' });
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error');
  });
});

describe('greet helper', () => {
  it('should return correct greeting', () => {
    expect(greet()).to.equal('Hello CI/C!');
    expect(greet('Chanda')).to.equal('Hello Chanda!');
  });
});

