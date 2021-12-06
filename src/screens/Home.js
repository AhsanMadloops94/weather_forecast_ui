import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, 
  ImageBackground,
  ScrollView,
} from 'react-native';
export default function Home() {  
  const refRBSheet = useRef();
  return (
    <ImageBackground
      source={require('../assets/images/weather.jpg')}
      style={{flex: 1}}>  
      <View style={{padding: 5}}>
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontSize: 30,

            color: 'black',
          }}>
          Weather - Forecast
        </Text>

        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={{marginTop: 10}}>
          <View
            style={{padding: 10, borderRadius: 10, backgroundColor: 'black'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'white', fontSize: 30}}>12:23</Text>

                  <Text style={{color: 'white'}}>{'\n'}pm</Text>
                </View>

                <Text style={{color: 'white'}}>Thu, 25 November</Text>
              </View>

              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignContent: 'flex-end',
                      justifyContent: 'flex-end',
                    }}>
                    <Text style={{color: 'white', textAlign: 'right'}}>
                      {'\n'}Cloud
                    </Text>

                    <Text
                      style={{
                        color: 'white',
                        fontSize: 30,
                        textAlign: 'right',
                      }}>
                      19
                    </Text>
                    <Text style={{color: 'white'}}>o</Text>
                  </View>
                </View>
                <Text style={{color: 'white', textAlign: 'right'}}>
                  Johar Town
                </Text>
                <Text style={{color: 'white'}}>Updated 25/11 10:37 am</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{padding: 10, marginTop: 10}}>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={false}
            closeOnPressMask={false}
            height={500}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}>
            <ScrollView>
              <View style={{flex: 1, paddingTop: 10}}>
                <View
                  style={{
                    flexDirection: 'column',
                    borderRadius: 10,
                    paddingLeft: 26,
                    paddingRight: 26,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>UV index</Text>
                    <Text>Moderate</Text>
                  </View>

                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: 'black',
                      width: '100%',
                      height: '0.4%',
                    }}></View>

                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{textAlign: 'left'}}>Sunrise</Text>
                    <Text>6:39 am</Text>
                  </View>

                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: 'black',
                      width: '100%',
                      height: '0.4%',
                    }}></View>

                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Sunset</Text>
                    <Text>5:00 pm</Text>
                  </View>

                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: 'black',
                      width: '100%',
                      height: '0.4%',
                    }}></View>

                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Wind</Text>
                    <Text>6km/h</Text>
                  </View>

                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: 'black',
                      width: '100%',
                      height: '0.4%',
                    }}></View>

                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>AQI</Text>
                    <Text>very High(10)</Text>
                  </View>

                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: 'black',
                      width: '100%',
                      height: '0.4%',
                    }}></View>

                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Humidity</Text>
                    <Text>37%</Text>
                  </View>
                </View>

                <View
                  style={{
                    marginTop: 10,
                    backgroundColor: 'black',
                    width: '100%',
                    height: '0.4%',
                  }}></View>

                <View>
                  <View style={{paddingLeft: 26, marginTop: 20}}>
                    <Text>Johar Town</Text>
                    <Text>Thu, 25 November 3:11 pm</Text>
                  </View>

                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderRadius: 10,
                      paddingLeft: 26,
                      paddingRight: 26,
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontSize: 40,
                              textAlign: 'right',
                            }}>
                            25
                          </Text>
                          <Text style={{color: 'black'}}>o</Text>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                          <Text>Sunny</Text>
                          <Text>26/11</Text>
                          <Text>Feel like 25</Text>
                        </View>
                      </View>

                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{flex: 1}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginTop: 20,
                            }}>
                            <View style={{flexDirection: 'column'}}>
                              <Text>4pm</Text>
                              <Text>Sunny</Text>
                              <Text>25o</Text>
                              <Text>0%</Text>
                            </View>

                            <Text>{'        '}</Text>

                            <View style={{flexDirection: 'column'}}>
                              <Text>5pm</Text>
                              <Text>Sunny</Text>
                              <Text>23o</Text>
                              <Text>1%</Text>
                            </View>

                            <Text>{'        '}</Text>

                            <View style={{flexDirection: 'column'}}>
                              <Text>6pm</Text>
                              <Text>Sunny</Text>
                              <Text>22o</Text>
                              <Text>1%</Text>
                            </View>

                            <Text>{'        '}</Text>

                            <View style={{flexDirection: 'column'}}>
                              <Text>7pm</Text>
                              <Text>Sunny</Text>
                              <Text>20o</Text>
                              <Text>1%</Text>
                            </View>

                            <Text>{'        '}</Text>

                            <View style={{flexDirection: 'column'}}>
                              <Text>8pm</Text>
                              <Text>Sunny</Text>
                              <Text>19o</Text>
                              <Text>1%</Text>
                            </View>

                            <Text>{'        '}</Text>

                            <View style={{flexDirection: 'column'}}>
                              <Text>8pm</Text>
                              <Text>Sunny</Text>
                              <Text>19o</Text>
                              <Text>1%</Text>
                            </View>

                            <Text>{'        '}</Text>

                            <View style={{flexDirection: 'column'}}>
                              <Text>8pm</Text>
                              <Text>Sunny</Text>
                              <Text>19o</Text>
                              <Text>1%</Text>
                            </View>

                            <Text>{'        '}</Text>

                            <View style={{flexDirection: 'column'}}>
                              <Text>8pm</Text>
                              <Text>Sunny</Text>
                              <Text>19o</Text>
                              <Text>1%</Text>
                            </View>
                          </View>
                        </View>
                      </ScrollView>
                      <Text>{'\n\n\n\n\n\n'}</Text>

                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'black',
                          width: '100%',
                          height: '1%',
                        }}></View>
                    </View>

                    <View>
                      <View></View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </RBSheet>
        </View>
      </View>
    </ImageBackground>
  );
}
