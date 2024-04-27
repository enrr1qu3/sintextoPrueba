import Link from 'next/link';
import { Button, Result } from 'antd';

import '../../styles/not-found/_not-found.scss';

export default function NotFoundPrograms() {
    
    return (
        <main className="not-found-container">
            <Result
                title="Programas no disponible"
                subTitle="Estamos trabajando en los programas que tenemos planeados para tí"
                extra={
                    <Link href="/">
                        <Button className="btn-home" type="primary" size="large">
                            Ir al inicio
                        </Button>
                    </Link>
                }
            />
        </main>
    )
}