import { StyleSheet } from 'react-native'

import Metrics from '../../metrics/metrics'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerLogo:{
    flex: 0.3,
    backgroundColor: 'black',
  },
  logo:{
    width:'100%',
    height:'100%',
    maxWidth: '100%',
    maxHeight:'100%'
  },
  dataUser:{
    flex: 0.7,
    justifyContent: 'space-between'
  },
  descriptionStore:{
    marginTop:15,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  descriptionOne:{
    fontSize: 25,
    color:'#e2dfdf',
    fontFamily: Metrics.fonts.principalBold

  },
  descriptionTwo:{
    fontSize: 20,
    marginTop:5,
    color:'#e2dfdf',
    /*fontFamily: 'LobsterTwo-Regular'*/
    fontFamily: Metrics.fonts.principal
  },
  containerInfo:{
    flexDirection: 'row',
    height: '40%',
    maxHeight:200,
    marginEnd: 10,
    marginStart: 10,
    borderRadius: 4,
  },
  containerFooter: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'baseline',
    height: 80
  },

  containerButton:{
    /*height:'60%',
    width:'100%',*/
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10,
    marginBottom:25,
  },

  button:{
    width: '80%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 2,
    borderColor: Metrics.colors.secondary,
    backgroundColor: Metrics.colors.tertiary,
    borderRadius: 4,
    padding: 10,
  },
  textButton:{
    fontSize: 20,
    color:'#e2dfdf',
    fontFamily: Metrics.fonts.secondaryBold    
  },
  containerCount:{
    /*height:'60%',
    width:'40%',*/
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textCount:{
    fontSize: 25,
    color:'#e2dfdf',
    fontFamily: Metrics.fonts.secondaryBold    
  },
  textCount2:{
    fontSize: 20,
    color:'#e2dfdf',
    fontFamily: Metrics.fonts.secondaryBold    
  }

})
