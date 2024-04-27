'use client';

import { useEffect, useState } from 'react';
import { Typography } from 'antd';

import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

const { Title } = Typography;

export const Datetime = () => {

    const [ currentTime, setCurrentTime ] = useState(dayjs());
    const [ currentDate, setCurrentDate ] = useState(dayjs());

    useEffect(() => {
        // Establece un intervalo para actualizar la hora y la fecha cada segundo
        const intervalId = setInterval(() => {
            setCurrentDate(dayjs());
            setCurrentTime(dayjs());
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []); // El segundo argumento del useEffect debe ser un arreglo vacío para que se ejecute solo una vez al montar el componente
    
    return (
        <div className="container-datetime">
            <Title level={ 5 } className="datetime">{currentTime.format('hh:mm A')}</Title>
            <Title level={ 5 } className="datetime">{currentDate.format('dddd D [de] MMMM, YYYY').toUpperCase()}</Title>
        </div>
    );
}
