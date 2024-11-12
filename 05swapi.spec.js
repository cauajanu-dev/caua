const request = require('supertest');
// Teste 5: Obter a primeira nave
test('should fetch the third starship', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/3/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('name', 'Star Destroyer');
  });