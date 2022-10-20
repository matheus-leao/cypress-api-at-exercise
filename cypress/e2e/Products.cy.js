describe('Products', () => {
  it('Get Products', () => {
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/productsList'
    }).then((response) => {
      expect(response.status).to.equal(200);
    })
  })
})

describe('Brands', ()=>{
  it('Get All Brands', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/brandsList',
    }).then((response) => {
      expect(response.status).to.equal(200);
    })
  })
})