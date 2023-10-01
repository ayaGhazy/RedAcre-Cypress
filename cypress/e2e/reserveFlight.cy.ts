import { selectCity,selectFlightDuration,clickFindFlightBtn,getFirstFlightPrice ,navigate} from '../page-object/HomePage';

describe('template spec', () => {
  beforeEach(() => {

    navigate()
  
  })
  it('Get the first available flight price from Vienna International (VIE) to Malta International Airport (MLA).', () => {
   
    // type Departing from
    selectCity('.route-selection-origin','Vienna International')
    // select flying to
    selectCity('.route-selection-destination','Malta International Airport')
    // select flight duration as start date is today
    selectFlightDuration(10)

    clickFindFlightBtn()
    // get flight price and display it in logs
    getFirstFlightPrice()
  
  })
})