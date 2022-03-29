import React, { useEffect, useState } from 'react'
import Card from './ui/Card'
import './Dashboard.css'
import Chart from './Chart'
import truncateString from './utils/Truncate'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from 'react-spring'
import { RemoveRedEye } from '@mui/icons-material'
import VisibilitySensor from 'react-visibility-sensor'


const Dashboard = (props) => {
    const [open, set] = useState(false)
    const [cardsVisible, setCardsVisible] = useState(false)

    const springApi = useSpringRef()

    const data = props.user.cards

    const transApi = useSpringRef()
    const transition = useTransition(cardsVisible ? data : [], {
        ref: transApi,
        trail: 200 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })

    useChain(cardsVisible ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])

    const visChange = () => {
        setCardsVisible(!cardsVisible)
    }

    useEffect(() => {
        set(open => true)
    }, [])

    return (
        <div className='dashboard'>
            <h3>Welcome back, {props.user.fName}!</h3>
            <div className='left'>
                <Card type={"balance"} title={props.user.accountType + ' ' + props.user.accountNo}>
                    Balance:
                    <div className='balance'>
                        ${Intl.NumberFormat('en-US').format(props.user.balance)}
                    </div>
                </Card>
                <Card title="Transaction History">
                    {props.user.recentTransactions.map((transaction, id) =>

                        <div className='transaction' key={id} >
                            {truncateString(transaction.title)}
                            {transaction.date}
                            <div className={`transactionAmnt ${transaction.isNegative ? "negative" : ""}`}>
                                ${Intl.NumberFormat('en-US').format(transaction.amount)}
                            </div>
                        </div>
                    )}
                </Card>
            </div>
            <Card title="Expenses" type="center">
                <div className='chartContainer'>
                    <Chart recentTransactions={props.user.recentTransactions} />
                </div>
            </Card>
            <VisibilitySensor onChange={visChange} partialVisibility >
                <animated.div className='cards'
                // onClick={() => set(open => !open)}
                >

                    <h3>My Cards </h3>

                    <div className='cardContainer'>
                        {transition((style, item) => (
                            <animated.div
                                className='card credit'
                                style={{ ...style, background: item.css }}
                            >
                                <h2>{item.title}</h2>
                                <div>{item.number} &nbsp; Exp: {item.expiration}</div>


                                <span>{props.user.fName + " " + props.user.lName}</span>
                            </animated.div>
                        ))}

                        {/* {props.user.cards.map((card, id) =>

                        <Card key={id} title={card.title} type="credit">
                            {card.number}
                            {card.expiration}
                            <span>{props.user.fName + " " + props.user.lName}</span>
                            </Card>
                        )} */}
                        {/* <Card title="Debit" type="credit two">
                        ##########23
                        10/24
                        <span>Adam M. Cardholder</span>
                    </Card>
                    <Card title="Debit" type="credit three">
                    ##########23
                    10/24
                    <span>Adam M. Cardholder</span>
                    </Card> */}
                    </div>
                </animated.div>
            </VisibilitySensor>
        </ div>
    )
}

export default Dashboard