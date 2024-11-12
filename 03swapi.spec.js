const request = require('supertest');
// Teste 3: Obter o terceiro personagem
test('should fetch the third person', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/3/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('name', 'R2-D2');
  });
