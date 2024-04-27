
import { Result } from 'antd'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <Result
                status="404"
                title="404 - Not Found"
                subTitle="Es posible que la página que buscas haya sido eliminada, haya expirado o la dirección no existe."
                extra={"En breve será redirigido a la página de inicio..."}
            />
            <Link href="/">Ver listado de Pokémons</Link>

        </main>
    )
}