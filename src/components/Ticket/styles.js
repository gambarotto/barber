import { StyleSheet } from 'react-native'
import Metrics from '../../metrics/metrics'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    containerListOne: {
        flex: 1,
        flexDirection: 'row',

    },
    containerListTwo: {
        flex: 1,
        flexDirection: 'row',
    },
    containerTicket: {
        flex: 1,
        justifyContent:'center',
        margin: 5,
        borderRadius:4,
    },
    imageTicket: {
        maxWidth: '100%',
        maxHeight:'100%',
        borderRadius:4,
    },
    containerTicketAtivacted:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Metrics.colors.secondary,
        borderRadius: 4,
    }
})
