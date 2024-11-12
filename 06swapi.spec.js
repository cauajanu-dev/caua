const request = require('supertest');
// Teste 6: Obter uma lista de espécies
test('should fetch a list of species', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('results');
    expect(Array.isArray(resposta.body.results)).toBe(true);
    expect(resposta.body.results.length).toBeGreaterThan(0);
  });
