import { Flex, Tag } from "antd"
import Link from "next/link"

export const ArticleTags = ({ tags }: { tags:[{id:number, name:string }] }) => {
    return (
        <Flex gap={4} wrap="wrap" align="center" className="row-detail-label">
           { tags.length > 0 && <p className="label-tags" key={"wfqwee"}> Etiquetas:</p>}
            {tags?.map((tag: { id: number, name: string }) => (
                <Link href={`/tag/${tag.name}`} key={tag.name}>
                    <Tag key={tag.id}
                        className="link-tag"
                        bordered={false}
                    >
                        #{tag.name}
                    </Tag>
                </Link>
            ))}
        </Flex>
    )
}
