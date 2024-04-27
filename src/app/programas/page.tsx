import { Programs } from "@/paginas";
import { getAllLiveStreamSchedule } from "@/services";

import { notFound } from "next/navigation";

export const metadata = {
    title: 'Programas',
    description: 'Programas de SINTEXTO',
};

const getPrograms = async () => {
    const response = await getAllLiveStreamSchedule();

    if (response.data != undefined && response.data.length > 0) {
        return response.data;
    }
    else {
        notFound();
    }
}

export default async function ProgramasPage() {
    const programs = await getPrograms();
    
    return (
        <Programs programs={ programs } />
    );
}