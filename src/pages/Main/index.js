import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage'
import { Text, View, TouchableOpacity, Image } from 'react-native'

import Ticket from '../../components/Ticket/index'
import { styles } from './styles';
import Metrics from '../../metrics/metrics'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            ativado: false,
            att: false,
            cupons: 0
        }
        this.countTickets = this.countTickets.bind(this)
    }

    async componentDidMount() {

        //await AsyncStorage.setItem('qtdTickets', '0')
        //await AsyncStorage.setItem('cupons', '0')

        await AsyncStorage.getItem('ativo', (err, res) => {
            this.setState({ ativado: res ? true : false })
        })
        await AsyncStorage.getItem('qtdTickets', (err, res) => {
            this.setState({ count: parseInt(res), att: true })
        })
        await AsyncStorage.getItem('cupons', (err, res) => {
            this.setState({ cupons: parseInt(res), att: true })
        })
    }

    async countTickets(qtdTickets) {

        if (qtdTickets === 10) {

            await AsyncStorage.multiSet([['cupons', String(this.state.cupons + 1)], ['qtdTickets', String(this.state.count)]], async () => {
                await this.setState({ count: 0, cupons: this.state.cupons + 1 })
            })

            return
        }

        if (!this.state.ativado) {
            await AsyncStorage.setItem('ativo', 'true')
            await AsyncStorage.setItem('cupons', '0')
        }

        await AsyncStorage.setItem('qtdTickets', String(qtdTickets))
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={require('../../../assets/images/logo-.png')} />
                </View>
                <LinearGradient
                    colors={[Metrics.colors.primary, Metrics.colors.secondary, Metrics.colors.tertiary]}
                    start={{ x: 1, y: 0.3 }}
                    end={{ x: 1, y: 0.8 }}
                    style={styles.dataUser}>
                    <View style={styles.descriptionStore}>
                        <Text style={styles.descriptionOne}>BARBEARIA DO FULANO</Text>
                        <Text style={styles.descriptionTwo}>R: Aristides de Melo, 798 - Jundiaí</Text>
                    </View>
                    <View style={styles.containerInfo}>

                        {this.state.att &&
                            <Ticket
                                countTickets={this.countTickets}
                                count={this.state.count} />
                        }
                    </View>
                    <View style={styles.containerFooter}>
                        <View style={styles.containerCount}>
                            <Text style={styles.textCount}>{this.state.cupons}</Text>
                            <Text style={styles.textCount2}>{this.state.cupons < 2 ? ' Cupom' : ' Cupons'}</Text>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Usar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }

};

export default Main;
