'use client'

import { WhatsAppIcon } from "@/helpers/CustomIcons";
import { LinkOutlined } from "@ant-design/icons";
import { Button, ButtonProps, Row, Tooltip, notification } from "antd"
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";


export const SharingButtons = ({ title }: { title: string }) => {
    const [currentURL, setCurrentURL] = useState('');

    useEffect(() => {
        // Esto garantiza que `window.location.href` solo se acceda en el cliente
        setCurrentURL(window.location.href);
    }, []);
    const handleShareWhatsApp = () => {
        const message = `📰 ¡Echa un vistazo a esta noticia! 📰\n\n"${title}"\n\n${currentURL}`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    const handleCopyURL = () => {
        copy(currentURL);
        notification.success({
            message: '¡Enlace copiado al portapapeles!',
            className: 'notification-success'
        });
    };

    const buttonShareProps: ButtonProps = {
        type: "primary",
        shape: "circle",
        size: "large",
        role: "link"
    }

    return (
        <div className="share-links">
            <p>Compartir en:</p>

            <Row gutter={18}>
                {/* <Tooltip title="Facebook">
<Button 
    { ...buttonShareProps }
    className="btn-share-article btn-facebook" 
    icon={ <FacebookIcon /> }
    name="button-facebook"
/>
</Tooltip>

<Tooltip title="X">
<Button
    { ...buttonShareProps }
    className="btn-share-article btn-twitter"
    icon={ <XTwitterIcon /> }
    name="button-twitter"
/>
</Tooltip> */}

                <Tooltip title="WhatsApp">
                    <Button
                        {...buttonShareProps}
                        className="btn-share-article btn-whatsapp"
                        icon={<WhatsAppIcon />}
                        name="button-whatsapp"
                        onClick={handleShareWhatsApp}
                    />
                </Tooltip>

                <Tooltip title="Copiar enlace de la noticia">
                    <Button
                        {...buttonShareProps}
                        className="btn-share-article btn-link"
                        icon={<LinkOutlined />}
                        name="button-copy-url"
                        onClick={handleCopyURL}
                    />
                </Tooltip>
            </Row>
        </div>
    )
}
