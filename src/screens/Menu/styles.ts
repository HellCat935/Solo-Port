import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #98fb98;
`
export const FundoExplorar = styled.View`
  background: #fff;
  width: 100%;
  height: 70%;
  top: 37%;
  border-radius: 20px;
  position: absolute;
`
export const TituloBanner = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  margin-left: 4%;
  top: 25%;
`
export const BannerFundo = styled.View`
  background: #98fb98;
  width: 100%;
  height: 50%;
  position: absolute;
`
export const PlantaIcon = styled.Image`
  width: 130px;
  height: 130px;
  left: 60%;
`
export const TextoBanner = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 4%;
  font-family: ${({ theme }) => theme.fonts.body};
  top: 25%;
`
export const Buttons = styled.TouchableOpacity`
  background: #f1f1f1;
  width: 90%;
  height: 10%;
  margin-left: 5%;
  margin-top: 8%;
  border-radius: 10px;
`
export const TextInButton = styled.Text`
  font-size: 14px;
  align-items: center;
  margin-left: 10%;
  margin-top: 4%;
`
