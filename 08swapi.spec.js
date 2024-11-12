const request = require('supertest');
// Teste 8: Obter uma lista de filmes
test('should fetch a list of films', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('results');
    expect(Array.isArray(resposta.body.results)).toBe(true);
    expect(resposta.body.results.length).toBeGreaterThan(0);
  });