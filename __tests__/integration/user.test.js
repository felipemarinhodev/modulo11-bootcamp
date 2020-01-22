import request from 'supertest';
import app from '../../src/app';

describe('', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Felipe Marinho',
        email: 'felipmarinho@gmail.com',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
