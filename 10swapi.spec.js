const request = require('supertest');
 // Teste 10: Obter detalhes de uma espécie
 test('should fetch details of a specific species', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('name', 'Human');
  });