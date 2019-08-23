import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";

import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Metrics from '../../metrics/metrics'

export default class Ticket extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ticketsOne: [{ id: 1, ativated: false }, { id: 2, ativated: false }, { id: 3, ativated: false }, { id: 4, ativated: false }, { id: 5, ativated: false }],
            ticketsTwo: [{ id: 6, ativated: false }, { id: 7, ativated: false }, { id: 8, ativated: false }, { id: 9, ativated: false }, { id: 10, ativated: false }],
            atualized: false,
            totalTickets: 0,
        }
    }
    async componentDidMount() {
        await this.atualizaInitialState()
        await this.atualizaVisual(this.state.totalTickets)
        this.setState({atualized: true})

    }

    atualizaVisual(qtdTickets){
        const arrOne = [...this.state.ticketsOne]
        const arrTwo = [...this.state.ticketsTwo]
        
        for(let i = 0 ; i < qtdTickets; i++){
            arrOne[i].ativated = true
        }

        if(qtdTickets > 5){
            for(let i = 0 ; i < qtdTickets - 5; i++){
                arrTwo[i].ativated = true
            }   
        }
    }

    atualizaInitialState() {
        this.setState({ totalTickets: this.props.count })
    }

    async attTickets(id, lista) {
        await this.handleTicketAtivate(id, lista)
        await this.props.countTickets(this.state.totalTickets)
        if(this.state.totalTickets === 10){
            this.setState({
                ticketsOne: [{ id: 1, ativated: false }, { id: 2, ativated: false }, { id: 3, ativated: false }, { id: 4, ativated: false }, { id: 5, ativated: false }],
                ticketsTwo: [{ id: 6, ativated: false }, { id: 7, ativated: false }, { id: 8, ativated: false }, { id: 9, ativated: false }, { id: 10, ativated: false }],
                totalTickets: 0
            })
        }        
    }

    handleTicketAtivate(item, lista) {
        const { id } = item
        let outSequency = false
        let arrTicket = []
        let ticketAtv = false
        let ind = null

        if (lista === "One") {
            //arrTicket = eval(`[...this.state.tickets${lista}]`) funciona 
            arrTicket = [...this.state.ticketsOne]
            
            arrTicket.map((ticket, i) => {

                if (ticket.id < id && !ticket.ativated) outSequency = true
                if (ticket.id > id && ticket.ativated ) outSequency = true
                if (this.state.ticketsTwo[0].ativated) outSequency = true

                if (ticket.id === id && !outSequency) {
                    ticketAtv = !ticket.ativated
                    ind = i
                }
            })

            if (!outSequency) {
                arrTicket[ind].ativated = ticketAtv
 
                this.setState({
                    ticketsOne: arrTicket,
                    totalTickets: ticketAtv ? this.state.totalTickets + 1 : this.state.totalTickets - 1
                })
            }

        } else {
            const arrTicket = [...this.state.ticketsTwo]
            
            arrTicket.map((ticket, i) => {

                if (!this.state.ticketsOne[4].ativated) outSequency = true
                if (ticket.id < id && !ticket.ativated) outSequency = true
                if (ticket.id > id && ticket.ativated ) outSequency = true

                if (ticket.id === id && !outSequency) {
                    ticketAtv = !ticket.ativated
                    ind = i
                }
            })

            if (!outSequency) {
                arrTicket[ind].ativated = ticketAtv

                this.setState({
                    ticketsTwo: arrTicket,
                    totalTickets: ticketAtv ? this.state.totalTickets + 1 : this.state.totalTickets - 1
                })
            }
        }7
    }

    render() {
        const { ticketsOne, ticketsTwo, atualized } = this.state

        return (
            <View style={styles.container}>
                <View style={styles.containerListOne}>

                {ticketsOne && atualized && ticketsOne.map((item) => {
                    return (
                        <TouchableOpacity
                            key={String(item.id)}
                            style={styles.containerTicket}
                            onPress={() => this.attTickets(item, "One")}>
                            {
                                item.ativated
                                    ?
                                    <View style={styles.containerTicketAtivacted}>
                                        <Icon name="check-circle" size={30} color={Metrics.colors.primary} />
                                    </View>
                                    :
                                    <Image style={styles.imageTicket} source={require('../../../assets/images/caveira.png')} />
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={styles.containerListTwo}>

                {ticketsTwo && atualized && ticketsTwo.map((item) => {
                    return (
                        <TouchableOpacity
                            key={String(item.id)}
                            style={styles.containerTicket}
                            onPress={() => this.attTickets(item, "Two")}>
                            {
                                item.ativated
                                    ?
                                    <View style={styles.containerTicketAtivacted}>
                                        <Icon name="check-circle" size={30} color={Metrics.colors.tertiary} />
                                    </View>
                                    :
                                    <Image style={styles.imageTicket} source={require('../../../assets/images/caveira.png')} />
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
            </View>

        )
    }
}