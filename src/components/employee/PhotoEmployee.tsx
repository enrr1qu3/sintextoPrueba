import Image from 'next/image';
import { Avatar, Col } from 'antd';

import { IEmployee } from '@/interfaces';

interface IPhotoEmployeeProps {
    employee: IEmployee
}

export const PhotoEmployee = (props: IPhotoEmployeeProps) => {
    const { employee } = props;

    return (
        <Col xs={24} md={ 9 } lg={ 7 } className="column-photo">
            <div>
                <div className="bg-container-avatar">
                    <Avatar className="avatar-employee"
                        size={ 200 }
                        icon={ 
                            <Image
                                src={ employee.profileURL! }
                                alt="Avatar empleado"
                                width={ 2048 }
                                height={ 1080 }
                            />
                        }
                    />
                </div>
                <div className="bg-container-avatar-bottom">
                    { employee.employeePost }
                </div>
            </div>
        </Col>
    );
}