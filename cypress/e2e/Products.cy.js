
describe('Product Tests', () => {
  it('1 - Get All Products', () => {
    cy.getRequest('/productsList').then((response) => {
      cy.AssertModel(response)
      expect(response.status).to.equal(200);
      expect(response.body).contains(200);
    })
  })

  it('2 - Post unsupported method', ()=>{
    cy.postRequest('/productsList').then((response) => {

      cy.AssertModel(response)
      expect(response.status).to.equal(200);
      expect(response.body).contains('"responseCode": 405');
      expect(response.body).contains('"message": "This request method is not supported."');
    })
  })
})


describe('Brand Tests', ()=>{
  it('3 - Get All Brands', ()=>{
    cy.getRequest('/brandsList').then((response) => {
      cy.AssertModel(response)
      expect(response.status).to.equal(200);
    })
  })

  it('4 - Put to All Brands', ()=>{
    cy.putRequest('/brandsList').then((response) => {
      cy.AssertModel(response)
      expect(response.body).contains('"responseCode": 405');
      expect(response.body).contains('"message": "This request method is not supported."');
    })
  })
})

describe('Product Tests', () => {
  it('5 - Post to Search Product', () => {
    cy.postRequest('searchProduct', { search_product : 'jean', }).then((response) => {
      console.log(response)
      cy.AssertModel(response);
      expect(response.body).contains('"responseCode": 200');
    })
  });

  it('6 - Post to Search Product without filter param', () => {
    cy.postRequest('searchProduct').then((response) => {
      cy.AssertModel(response);
      expect(response.body).contains('"responseCode": 400');
      expect(response.body).contains('"message": "Bad request, search_product parameter is missing in POST request."');
    })
  });
});

  describe('Login Tests', () => {
  it('10 - Post to Verify Login with invalid Details', () => {
    cy.postRequest( 'verifyLogin',
      {
        email : 'email',
        password: 'senha'
      }
    ).then((response) => {
      cy.AssertModel(response);
      expect(response.body).contains('"responseCode": 404');
      expect(response.body).contains('"message": "User not found!"');
    })
  });

  it('8 - Post to Verify Login with valid Details without email', () => {
    cy.postRequest('verifyLogin',
      {
        password: ''
      }
    ).then((response) => {
      cy.AssertModel(response);
      expect(response.body).contains('"responseCode": 400');
      expect(response.body).contains('"message": "Bad request, email or password parameter is missing in POST request."');
    })
  });

  it('9 - Delete to Verify Login', () => {
    cy.deleteRequest('verifyLogin').then((response) => {
      cy.AssertModel(response);
      expect(response.body).contains('"responseCode": 405');
      expect(response.body).contains('"message": "This request method is not supported."');
    })
  });
  })