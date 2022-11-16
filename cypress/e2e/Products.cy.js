describe('Product Tests', () => {
  it('Get Products', () => {
    cy.request({
      url: '/productsList'
    }).then((response) => {
      cy.AssertModel(response)
      expect(response.status).to.equal(200);
      expect(response.body).contains(200);
    })
  })

  it('Post unsupported method', ()=>{
    cy.request({
      method: 'POST',
      url: '/productsList'
    }).then((response) => {

      cy.AssertModel(response)
      expect(response.status).to.equal(200);
      expect(response.body).contains('"responseCode": 405');
      expect(response.body).contains('"message": "This request method is not supported."');
    })
  })
})


describe('Brand Tests', ()=>{
  it('Get All Brands', ()=>{
    cy.request({
      url: '/brandsList',
    }).then((response) => {
      cy.AssertModel(response)
      expect(response.status).to.equal(200);
    })
  })

  it('Put to All Brands', ()=>{
    cy.request({
      url: '/brandsList',
      method: 'PUT'
    }).then((response) => {
      cy.AssertModel(response)
      expect(response.body).contains('"responseCode": 405');
      expect(response.body).contains('"message": "This request method is not supported."');
    })
  })
})

describe('Product Tests', () => {
  it('Post to Search Product', () => {
    cy.request({
      url: 'searchProduct',
      method: 'POST',
      body: {
        search_product : 'jean'
      },
    }).then((response) => {
      cy.AssertModel(response);
      //warning: Come back hear to improve this assertion
      expect(response.body, { "responseBody" : 200});
    })
  });

  it('Post to Search Product without filter param', () => {
    cy.request({
      url: 'searchProduct',
      method: 'POST',
    }).then((response) => {
      cy.AssertModel(response);
      expect(response.body).contains('"responseCode": 400');
      expect(response.body).contains('"message": "Bad request, search_product parameter is missing in POST request."');
    })
  });

})