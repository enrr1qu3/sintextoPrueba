import Image from 'next/image';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import '../../styles/styleLoading/_loading.scss';

export const LoadingSpinner = () => {
    return (
        <div className="container-loading">
            <div className="image-container">
                <Spin
                    indicator={
                        <LoadingOutlined className="spinner" spin />
                    }
                />
                <Image
                    className="image-logo"
                    src="/images/logo.png"
                    alt="Loading"
                    width={ 60 }
                    height={ 60 }
                />
            </div>
        </div>
    );
}