const request = require('supertest');
// Teste 7: Obter detalhes de um veículo que não existe
test('should return 404 for a non-existing vehicle', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/999/');
    expect(resposta.status).toBe(404);
  });