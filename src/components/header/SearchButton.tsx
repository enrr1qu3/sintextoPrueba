'use client';
import { useEffect, useRef, useState } from 'react'
import { Button, Modal, Input, InputRef } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import '../../styles/header/_search-button.scss';
import { useRouter } from 'next/navigation'

export const SearchButton = () => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ inputValue, setInputValue ]   = useState('');
    const inputRef = useRef<InputRef>(null);
    
    const router = useRouter();

    const onShowModal = () => {
        setIsModalOpen(true);
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    const redirectToSearch = () => {
        const encoded = encodeURI(inputValue);
        router.push(`/buscador/${encoded}`);
        onCloseModal();
        setInputValue('');
    }

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value); // Actualiza el estado con el valor del input
    };

    useEffect(() => {
        setTimeout(() => {
            if (isModalOpen && inputRef.current) {
                inputRef.current.focus();
            }
        }, 0);
    }, [ isModalOpen ]);

    return (
        <>
        <Button
            icon={ <SearchOutlined /> }
            onClick={ onShowModal }
            size="large"
            type="primary"
        />

        <Modal
            title="Búsqueda"
            open={ isModalOpen }
            onCancel={ onCloseModal }
            footer={ null }
        >
            <div className="container-search">
                <Input
                    autoFocus
                    ref={ inputRef }
                    size="large"
                    placeholder="Buscar por"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    className="custom-input-search"
                    onPressEnter={ redirectToSearch }
                    prefix={ <SearchOutlined /> }
                />
            </div>
        </Modal>
        </>
    );
}
