import Link from 'next/link';
import { Button, Result } from 'antd';

import '../../styles/not-found/_not-found.scss';

export default function NotFoundEmployee() {
    
    return (
        <main className="not-found-container">
            <Result
                status="404"
                title="404 - Not Found"
                subTitle="Es posible que la página que buscas haya sido eliminada, haya expirado o la dirección no existe."
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