import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #98fb98;
`

export const Scroll = styled.ScrollView`
  flex: 1;
`
export const Title = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.body};
  position: absolute;
  left: 35%;
  margin-top: 17%;
  font-weight: bold;
  color: black;
`
export const SetaContainer = styled.TouchableOpacity`
  width: 40px;
  height: 30px;
  top: 5%;
  left: 2%;
`
export const ImagemFloresta = styled.Image`
  width: 190px;
  height: 190px;
  left: 25%;
  top: 4.5%;
`
export const FundoExplorar = styled.View`
  background: #fff;
  width: 96%;
  height: 100%;
  border-radius: 20px;
  left: 2%;
  display: flex;
  margin-bottom: 20%;
  bottom: 3%;
`
export const Texto = styled.Text`
  font-size: 15px;
  color: #000;
  margin-left: 5%;
  font-family: ${({ theme }) => theme.fonts.body};
  margin-top: 4%;
  margin-right: 5%;
`
export const SoloImagem = styled.Image`
  width: 180px;
  height: 180px;
  margin-left: 25%;
  margin-top: 5%;
`
