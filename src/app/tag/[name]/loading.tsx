import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import"../../../styles/styleLoading/_loading.scss"

export default function Loading() {
    return <div className="container-loading">
        <Spin
            indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
        />
    </div>
}