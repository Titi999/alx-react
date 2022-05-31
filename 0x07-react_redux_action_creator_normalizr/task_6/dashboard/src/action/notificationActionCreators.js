import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} from './notificationActionTypes';

export const markAsAread = (index) => { 
    return {
        type: MARK_AS_READ,
        index
    }
};
export const setNotificationFilter = (filter) => {
    return{
        type: NotificationTypeFilters,
        filter
    };
};

const boundMarkAsAread = markAsAread.bind(MARK_AS_READ);
const boundSetNotificationFilter = setNotificationFilter.bind(NotificationTypeFilters, SET_TYPE_FILTER);
