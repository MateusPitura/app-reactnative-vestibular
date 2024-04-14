import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

export const cancelAllNotification = async () => {
    await notifee.cancelTriggerNotifications()
}

export const showAllNotification = async () => {
    console.log()
    console.log("Notificações agendadas")
    console.log(await notifee.getTriggerNotifications())
}

export const shecheduleNotification = async (color: any, data: any) => {

    const validatedDates = validateDates(data)

    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Datas importantes',
    });

    if (validatedDates) {
        for (const item of validatedDates) {

            const trigger: TimestampTrigger = {
                type: TriggerType.TIMESTAMP,
                timestamp: item.data
            }

            await notifee.createTriggerNotification({
                title: item.universidadeSigla,
                body: item.descricao,
                android: {
                    channelId,
                    smallIcon: 'icon_notification',
                    color: color,
                    pressAction: { id: 'default' },
                },
            }, trigger)
        }
    }
}

const validateDates = (data: any) => { //Valida os eventos filtrando apenas as que são após a data de hoje
    const dates = data?.filter((item: any) => {
        const dataFormated = item.data.split("T")[0]
        const notificationDate = new Date(dataFormated).getTime() + (1000 * 60 * 60 * 12)//Pega a data que por padrão é meia noite e soma mais 12 horas, considerando fuso horário de 3 horas a notificação vai aparecer 9 a.m.
        // const notificationDate = new Date(dataFormated).getTime() + (1000 * 60 * 60 * 20) + (1000 * 60 * 29)//Teste
        const currentTime = new Date(Date.now()).getTime() + (1000 * 60 * 1) //Momento atual + 1 minuto de margem de segurança
        if (notificationDate > currentTime) { //Estou comparando para saber se a data da notificação é mais antiga que o momento atual
            item.data = notificationDate
            return item
        }
    })
    return dates
}