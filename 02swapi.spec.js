const request = require('supertest');
// Teste 2: Obter o segundo personagem
test('should fetch the second person', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/2/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('name', 'C-3PO');
  });