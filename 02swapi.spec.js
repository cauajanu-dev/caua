const request = require('supertest');  // Importe o supertest

test('should fetch the second person', async () => {
  const resposta = await request('https://swapi.dev/api')  // Agora request está definido
    .get('/people/2/');
  
  expect(resposta.status).toBe(200);  // Verifica o status HTTP da resposta
  expect(resposta.body).toHaveProperty('name', 'C-3PO');  // Verifica se o nome da pessoa é "C-3PO"
}, 10000);  // 10 segundos de timeout para o teste
