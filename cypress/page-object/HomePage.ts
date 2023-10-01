    export function navigate()
    {
      cy.visit('https://airmalta.com/')
    }
    export function  selectCity(locator:any, text:any){
        cy.get(locator).click()
        cy.get(locator+' input').type(text+'{Enter}')
        cy.get(locator+' .airport-option ').click()
        cy.get(locator+' .ellipsis').should('have.text',text)

    }
    export function  clickFindFlightBtn()
    {
      cy.get('.buttons > .d-none').click()
    }
    export function  getFirstFlightPrice()
    {
      cy.get('.Spinner-XKNxZ', {timeout: 10000}).should('not.exist');
      
      cy.contains("button div",/\d*\.+\d*/i, {timeout: 10000}).first().should('have.css', 'color', 'rgb(210, 39, 48)').click()

      cy.contains("button div",/\d*\.+\d*/i, {timeout: 10000}).first().should('have.css', 'color', 'rgb(41, 145, 71)').then(($btn) => {
        const txt = $btn.text()
        // $btn is the object that the previous command yielded
        cy.log('The first available flight price from Vienna International (VIE) to Malta International Airport (MLA)= '+txt)
      })

     
    }
    export function  selectFlightDuration( d: number)
      {

      cy.get('.flight-search-form').click
      const date = new Date();

        var startDate =date.toLocaleString('en-US', {  weekday: 'short' ,  year: 'numeric' ,  month: 'short'  ,  day: '2-digit' }).replaceAll(",",'')
         date.setDate(date.getDate() + d)

        var endDate =date.toLocaleString('en-US', {  weekday: 'short' ,  year: 'numeric' ,  month: 'short'  ,  day: '2-digit' }).replaceAll(",",'')
          cy.get('.startDate > .form-control').click();
          
          cy.get('[aria-label="'+startDate+'"]').click();

          cy.get('[aria-label="'+endDate+'"]').click()

          cy.document().then((doc) => {
            doc.querySelector('[aria-label="'+endDate+'"]').click()
          });
    }
    