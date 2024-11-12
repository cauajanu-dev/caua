const request = require('supertest');
// Teste 4: Obter uma lista de planetas
test('should fetch a list of planets', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/');
    expect(resposta.status).toBe(200);
    expect(resposta.body).toHaveProperty('results');
    expect(Array.isArray(resposta.body.results)).toBe(true);
    expect(resposta.body.results.length).toBeGreaterThan(0);
  });