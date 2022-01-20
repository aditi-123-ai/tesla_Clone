import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVERNTORY"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVERNTORY"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVERNTORY"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVERNTORY"
            />
            <Section
                title= "Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVERNTORY"
            />
            <Section
                title= "Solar for New Roofs"
                description="Solar Roof Costs Less Then a New Roof Plus Solar Panel"
                backgroundImg="solar-roof.jpg"
                leftBtnText="ORDER NOW"
                rightBtnText="Learn More"
            />
            <Section
                title= "Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`