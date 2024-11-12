const request = require('supertest');
// Teste 9: Obter um filme que não existe
test('should return 404 for a non-existing film', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/999/');
    expect(resposta.status).toBe(404);
  });