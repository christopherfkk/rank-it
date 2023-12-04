import {Middleware} from 'redux'
import {io, Socket} from 'socket.io-client';

import {startConnecting, connectionEstablished, receiveRanking} from '../reducers/rankingSocketReducer';
import apiConfig from '../../../utils/apiConfig';
import RankingData from '../reducers/rankingSocketMessage';
import RankingSocketEvent from '../reducers/rankingSocketEvent';

const rankingSocketMiddleware: Middleware = store => {
    let socketRanks: WebSocket;

    return next => action => {

        if (startConnecting.match(action)) {
            socketRanks = new WebSocket(`${apiConfig.WEB_SOCKET_BASE_URL}/ws/ranking/`);

            socketRanks.addEventListener('open', () => {
                store.dispatch(connectionEstablished());
                socketRanks.send(JSON.stringify({ event: 'request_ranking' }));
            });

            socketRanks.addEventListener('message', (event) => {
                const message = JSON.parse(event.data);
                if (message.type === RankingSocketEvent.LatestRanking) {
                    store.dispatch(receiveRanking({ranking: message.ranking}));
                }
            });
        }

        next(action);
    }
}

export default rankingSocketMiddleware;
