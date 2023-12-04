import User from '../../../interfaces/User';


// interface NotificationType{
//     id: number
//     entity: string
//     description: string
// }
// interface NotificationObject {
//     id: number
//     notification_type: NotificationType
//     entity_id: number
//     created_at: string
// }
//
// interface NotificationData {
//     id: number
//     notification_object: NotificationObject
//     message: string
//     status: string
//     notifier: number
// }

interface NotificationData {
    object: Object
}

export default NotificationData;
