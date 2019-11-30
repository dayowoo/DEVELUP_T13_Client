import React, { Component } from 'react'
import { Wrapper } from './StyleSubHeader'

export class SubHeader extends Component {
    render() {
        return (
            <Wrapper>
                <img src="https://lh3.googleusercontent.com/NzcXo8M9q66HdrstnoFKI6fqjnY2c5cGmv0JPfsPKqGJub23DrYxJ7NK_Z6qFxjEyaKdihoEgFAL1nnz78R9LZR3kNGizMZzNOAbpS3nAl15401B_ciCZQED48P7uOOfT6IA0Wk5d9E"/>
                <div>
                    <h2>NOMARD CODER</h2>
                    <span>- 더 이상은 혼자가 아닙니다.</span>
                </div>
            </Wrapper>
        )
    }
}

export default SubHeader
