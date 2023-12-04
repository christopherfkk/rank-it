import {Middleware} from 'redux'

import {startConnecting, connectionEstablished, receiveNotification, requestNotifications} from '../reducers/notifSocketReducer';
import apiConfig from '../../../utils/apiConfig';
import NotificationData from '../reducers/notifSocketMessage';
import NotifSocketEvent from '../reducers/notifSocketEvent';

const notifSocketMiddleware: Middleware = store => {
    let socket: WebSocket;

    return next => action => {
        const userId = store.getState().userAuth.userId

        if (startConnecting.match(action)) {
            socket = new WebSocket(`${apiConfig.WEB_SOCKET_BASE_URL}/ws/notifications/user/${userId}/`);

            socket.addEventListener('open', () => {
                store.dispatch(connectionEstablished());
                socket.send(JSON.stringify({ event: NotifSocketEvent.RequestNotifications, userId: userId }));
            });

            socket.addEventListener('message', (event) => {
                console.log("RECEIVED NOTIFS")
                const message = JSON.parse(event.data);
                if (message['type'] === NotifSocketEvent.LatestNotifications) {
                    store.dispatch(receiveNotification({notification: message['notification']}));
                }
            });
        }

        if (requestNotifications.match(action)) {
            console.log("SEND REQUEST")
            socket.send(JSON.stringify({ event: NotifSocketEvent.RequestNotifications, userId: userId }));
        }

        next(action);
    }
}

export default notifSocketMiddleware;
