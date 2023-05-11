import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #98fb98;
`

export const Title = styled.Text`
  font-size: 40px;
  bottom: 25%;
`

export const HomeWrapper = styled.View`
  background-color: blue;
  width: 20px;
  height: 20px;
`

export const Imagem = styled.Image`
  width: 180px;
  height: 180px;
`
export const Buttons = styled.TouchableOpacity`
  border: 1px;
  border-radius: 10px;
  background: #f1f1f1;
  padding: 1% 3% 1% 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 120px;
  height: 50px;
  margin-left: 3%;
  top: 40%;
`

export const TextInButton = styled.Text`
  font-size: 15px;
  align-items: center;
  margin-left: 12%;
`
