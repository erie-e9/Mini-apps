import React, { Component } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';
import { colors } from '../../utils/constants';
import BasicButtons from '../../components/CalculatorComponents/BasicButtons';
import HeaderOptions from '../../components/CalculatorComponents/HeaderOptions';

// Cambios pendientes
//     Regresar: this.operations = ['←','÷','×','-','+']
//     Realizar los calculos de otra manera que no sea con val
//     El primer digito no debe ser 0

const Root = styled.View`
    flex: 1;
`;
const ResultContainer = styled.View`
    flex: 5;
    justifyContent: flex-end;
    alignItems: flex-end;
    paddingHorizontal: 15;
`;
const ResultText = styled.Text`
    fontSize: 85;
    color: ${colors.WHITE}
    fontWeight: 200;
`;
const CalculationContainer = styled.View`
    flex: 2;
    justifyContent: center;
    alignItems: flex-end;
    paddingHorizontal: 20;
`;
const CalculationText = styled.Text`
    fontSize: 23;
    color: ${colors.WHITERGBA}
    fontWeight: 200;
`;
const ButtonsContainer = styled.View`
    flexGrow: 1;
    flexDirection: row;
`;
const ButtonRow = styled.View`
    flex: 1;
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    padding: 0px;
    margin: 0px;
`;
const NumbersContainer = styled.View`
    flex: 3;
    backgroundColor: ${colors.LINGVISTWHITE};
`;
const OperationsContainer = styled.View`
    flex: 1;
    backgroundColor: ${colors.LINGVISTWHITE};
    justifyContent: space-around;
    alignItems: center;
`;
const TextStyleOne = styled.Text`
    fontSize: 25;
    fontWeight: 400;
    color: ${colors.GRAY777};
`;
const TextStyleTwo = styled.Text`
    fontSize: 32;
    fontWeight: 300;
    color: ${colors.GRAY777};
`;
const FooterContainer = styled.View`
    flex: 1;
    backgroundColor: ${colors.SECUNDARY};
`;

class CalculatorScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Calculator'
      });

      constructor() {
          super()
          this.state = {
            resultText: "",
            calculationText: ""
          }
        //   this.operations = ['←','÷','×','-','+']
        this.operations = ['←','/','*','-','+']
      }

      buttonPressed(number) {
        this.setState({
            calculationText: this.state.calculationText+number,
            // resultText: number
        })
      }

      cacPressed() {
          this.setState({
              resultText: '',
              calculationText: ''
          })
      }

      percentPressed() {
          const text = this.state.calculationText;
          const percent = text / 100;
          this.setState({
              resultText: percent
          })
      }

      operate(operation) {
          switch(operation) {
            case '←':
                let text = this.state.calculationText.split('')
                text.pop()
                this.setState({
                    calculationText: text.join('')
                })
            break
            case '/':
            case '*':
            case '-':
            case '+':
            const lastChar = this.state.calculationText.split('').pop()
                if(this.operations.indexOf(lastChar) > 0) return
                if (this.state.calculationText == "") return
                this.setState({
                    calculationText: this.state.calculationText + operation
                })
            break
          }
      }
      
// Validate if last character isn´t an operator
      validate() {
          const text = this.state.calculationText
          switch (text.slice(-1)) {
            case '/':
            case '*':
            case '-':
            case '+':
                return false
            
          }
          return true
      }

      getResult() {
          const text = this.state.calculationText
        //   video way
            if (text !== "") {
                this.setState({
                    resultText: eval(text)
                })
            }
        //  alternative
        // text.split('').forEach(char => {
        //     if (char == '÷' || char == '×' || char == '-' || char == '+') {
        //      do something
        //     }
        // })
      }

      resultPressed() {
        return this.validate() && this.getResult()
      }

    render() {
        let rows = [];
        let nums = [[7,8,9],[4,5,6],[1,2,3]]
        for (let i = 0; i < 3; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(
                <BasicButtons
                    onPress={() => this.buttonPressed(nums[i][j])}
                    key={nums[i][j]}
                    colorbutton={colors.LINGVISTWHITE}>
                    <TextStyleOne>{nums[i][j]}</TextStyleOne>
                </BasicButtons> 
                )
            }
            rows.push(<ButtonRow key={i}>{row}</ButtonRow>)
        }

        let ops = []
        for (let i = 0; i < 5; i++) {
            ops.push(
            <BasicButtons 
                onPress={() => this.operate(this.operations[i])}
                key={this.operations[i]}
                colorbutton={colors.LINGVISTWHITE2}>
                <TextStyleTwo>{this.operations[i]}</TextStyleTwo>
            </BasicButtons>
            )

        //     <ButtonRow>
        //     <BasicButtons>
        //         <TextStyleOne>(</TextStyleOne>
        //     </BasicButtons>
        //     <BasicButtons>
        //         <TextStyleOne>)</TextStyleOne>
        //     </BasicButtons>
        //     <BasicButtons>
        //         <TextStyleOne>N²</TextStyleOne>
        //     </BasicButtons>
        // </ButtonRow>

        // colors={['#F29A48', '#E8706E', '#e27091']}
        }        
        return (
            <Root>
                <LinearGradient
                    colors={['#F29A48', '#E8706E', '#e27091']}
                    start={[0.8, 0.2]}
                    style={{ flex: 5 }}>
                    <HeaderOptions/>
                    <ResultContainer>
                        <ResultText>
                            {this.state.resultText === "" ? 0 : this.state.resultText}
                        </ResultText>
                    </ResultContainer>
                    <CalculationContainer>
                        <CalculationText>
                            {this.state.calculationText === "" ? 0 : this.state.calculationText}
                        </CalculationText>
                    </CalculationContainer>
                </LinearGradient>
                <ButtonsContainer>
                    <NumbersContainer>
                        <ButtonRow>
                            <BasicButtons 
                                onPress={() => this.cacPressed()}
                                colorbutton={colors.LINGVISTWHITE2}>
                                <TextStyleOne style={{color: '#e27091'}}>AC</TextStyleOne>
                            </BasicButtons>
                            <BasicButtons
                                colorbutton={colors.LINGVISTWHITE2}>
                                <TextStyleOne>+/-</TextStyleOne>
                            </BasicButtons>
                            <BasicButtons
                                onPress={() => this.percentPressed()}
                                colorbutton={colors.LINGVISTWHITE2}>
                                <TextStyleOne>%</TextStyleOne>
                            </BasicButtons>
                        </ButtonRow>
                            {rows}
                        <ButtonRow>
                            <BasicButtons onPress={() => this.buttonPressed(0)}>
                                <TextStyleOne>0</TextStyleOne>
                            </BasicButtons>
                            <BasicButtons onPress={() => this.buttonPressed(`.`)}>
                                <TextStyleTwo>.</TextStyleTwo>
                            </BasicButtons>
                            <BasicButtons onPress={() => this.resultPressed()}
                                colorbutton={colors.STATUSORANGE}>
                                <TextStyleTwo style={{color: 'white'}}>=</TextStyleTwo>
                            </BasicButtons>
                        </ButtonRow>
                    </NumbersContainer>
                    <OperationsContainer>
                            {ops}
                    </OperationsContainer>
                </ButtonsContainer>
                <FooterContainer/>
            </Root>
        );
    }
}

export default CalculatorScreen;