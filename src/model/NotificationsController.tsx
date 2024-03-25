import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

type eventType = {
    date: number
}

export const shecheduleNotification = async (color: any, data: any) => {

    await notifee.cancelTriggerNotifications() //Excluir todas as notificações

    console.log(await notifee.getTriggerNotifications())

    const validatedDates = validateDates(data)

    await notifee.requestPermission()

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
        const notificationDate = new Date(item.date).getTime() + (1000 * 60 * 60 * 23) + (1000 * 60 * 55) //Pega a data que por padrão é meia noite e soma mais 9 horas
        console.log(new Date(notificationDate))
        const currentTime = new Date(Date.now()).getTime() + (1000 * 60 * 10) - (1000 * 60 * 60 * 3) //Momento atual + 10 minutos de margem de segurança - 3h pelo fuso horário
        console.log(new Date(currentTime))
        console.log()
        if (notificationDate > currentTime) { //Estou comparando para saber se a data da notificação é mais antiga que o momento atual
            console.log('entrou')
            item.date = notificationDate
            return item
        }
    })
    return dates
}