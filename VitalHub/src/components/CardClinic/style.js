import styled, { css } from "styled-components";


//containers/content
export const ContentSelect = styled.View`
   /* background-color: blue; */
`

export const ElementsContainer = styled.View`
    /* background-color: blue; */
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
`

export const OpenDay = styled.View`
    flex-direction: row;
    width: 100px;
    height: 26px;
    background-color: #E8FCFD;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 2px;
`

export const RateContainer = styled.View`
    justify-content: space-between;
    /* background-color: red; */
    /* border: 1px blue solid; */
`

export const IconContainer = styled.View`
    flex-direction: row;
    gap: 5px;
`

export const FlexCard = styled.View.attrs({
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
})`
    /* border: solid 1px red; */
    width: 100%;
    height: 102px;
    flex-direction: row;
    justify-content: space-evenly;
    background-color:white;
    border-radius: 5px;
`



export const ContainerCard = styled.TouchableHighlight`
justify-content: space-between;
align-items: center;
margin-top: 15px;
border: 2px solid ${(props) => (props.isSelected ? '#496BBA' : 'transparent')};
border-radius: 5px;
/* border: 2px solid; */
/* width: 100%;  */

`

// export const ButtonClinic = styled.TouchableHighlight`
//     border: 2px solid ${(props) => (props.clickButton ? '#496BBA' : 'transparent')};
//     width: fit-content;
//     height: fit-content;
// `



export const ButtonContainerSelect = styled.View`
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const ButtonBox = styled(ButtonContainerSelect)`

`








//texts
export const TextContainer = styled.View`
    /* background-color: red; */
    justify-content: center;
`

export const TextContainerMedic = styled(TextContainer)`
    margin-left: 0px;
    
`

export const TextOpen = styled.Text`
        font-family: 'Quicksand_600SemiBold';
        color: #49B3BA;
    `

export const TextRate = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
    color: #F9A620;
`


//button
export const ButtonSelectText = styled.TouchableOpacity`
margin-top: 10px;
`

