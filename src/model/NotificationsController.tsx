import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

export const cancelAllNotification = async () => {
    console.log('Cancelando todas as notificações...')
    await notifee.cancelTriggerNotifications()
}

export const showAllNotification = async() => {
    console.log(await notifee.getTriggerNotifications())
}

export const shecheduleNotification = async (color: any, data: any) => {

    const validatedDates = validateDates(data)

    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    for (const item of validatedDates) {
        
        const trigger: TimestampTrigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: item.date
        }

        await notifee.createTriggerNotification({
            title: item.title,
            body: item.body,
            android: {
                channelId,
                smallIcon: 'icon_notification',
                color: color,
                pressAction: { id: 'default' },
            },
        }, trigger)
    }
}

const validateDates = (data: any) => { //Valida os eventos filtrando apenas as que são após a data de hoje
    const dates = data.filter((item: any) => {
        const notificationDate = new Date(item.date).getTime() + (1000 * 60 * 60 * 9) //Pega a data que por padrão é meia noite e soma mais 9 horas
        const currentTime = new Date(Date.now()).getTime() + (1000 * 60 * 1) //Momento atual + 1 minuto de margem de segurança
        if (notificationDate > currentTime) { //Estou comparando para saber se a data da notificação é mais antiga que o momento atual
            item.date = notificationDate
            return item
        }
    })
    return dates
}