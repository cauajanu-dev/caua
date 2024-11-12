const request = require('supertest');
// Teste 1: Obter o primeiro personagem
test('should fetch the first person', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('name', 'Luke Skywalker');
  });
