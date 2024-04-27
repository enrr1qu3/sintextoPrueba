import { Employee } from '@/paginas';
import { getEmployeeByQRId } from '@/services';
import { notFound } from 'next/navigation';

interface IColaboradorPageProps {
    params: {
        qrId: string
    }
}

export const metadata = {
    title: 'Colaborador',
    description: 'Información básica del colaborador de SINTEXTO',
};

const getInfoEmployee = async (qrIdEmployee: string) => {
    const response = await getEmployeeByQRId(qrIdEmployee);

    if (response.data != null) {
        return response.data;
    }
    else {
        notFound();
    }
}

export default async function ColaboradorPage(props: IColaboradorPageProps) {
    const employee = await getInfoEmployee(props.params.qrId);

    return (
        <Employee employee={ employee } />
    );
}