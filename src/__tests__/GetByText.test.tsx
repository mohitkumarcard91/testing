import {render,screen} from '@testing-library/react'
import GetByText from '../pages/GetByText'

describe("GetByTest",()=>{
    beforeEach(()=>{
        render(<GetByText/>)
    })
    test("heading",()=>{
        const headingElement=screen.getByText("GetByText")
        const buttonElement=screen.getByText(/click here/i)
        expect(headingElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })
})